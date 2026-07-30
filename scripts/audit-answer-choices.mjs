#!/usr/bin/env node
// Audits answer-choice giveaway patterns without modifying question data.
// Run with: node scripts/audit-answer-choices.mjs
// Optional: node scripts/audit-answer-choices.mjs --json

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const questions = JSON.parse(readFileSync(join(root, "data/questions.json"), "utf8"));

const STOPWORDS = new Set([
  "a", "an", "and", "are", "as", "at", "be", "because", "been", "being",
  "both", "but", "by", "can", "does", "for", "from", "had", "has", "have",
  "how", "if", "in", "into", "is", "it", "its", "more", "most", "no", "not",
  "of", "on", "one", "only", "or", "other", "than", "that", "the", "their",
  "then", "there", "these", "they", "this", "to", "under", "up", "was", "were",
  "what", "when", "which", "while", "why", "will", "with", "would",
]);

const CAUSAL_MARKERS = [
  "because", "causing", "causes", "leading", "leads", "so that", "therefore",
  "thereby", "which makes", "which raises", "which reduces", "which shifts",
];

const TECHNICAL_HINTS = new Set([
  "aggregate", "appreciation", "arbitrage", "autonomous", "capital", "credibility",
  "crowding", "cyclical", "deficit", "deflation", "depreciation", "demand", "equilibrium",
  "expectations", "federal", "fiscal", "forex", "frictional", "inflation", "inflow",
  "interest", "investment", "leverage", "liabilities", "liquidity", "multiplier",
  "nominal", "output", "parity", "participation", "potential", "quantitative", "real",
  "recessionary", "saving", "securitization", "stabilization", "structural", "supply",
  "trilemma", "unemployment",
]);

function words(text) {
  return String(text)
    .toLowerCase()
    .replace(/[’']/g, "")
    .match(/[a-z0-9]+(?:[.-][a-z0-9]+)*/g) || [];
}

function punctuationCount(text) {
  return (String(text).match(/[,;:()—–]/g) || []).length;
}

function clauseCount(text) {
  const lower = String(text).toLowerCase();
  const punctuation = (lower.match(/[,;:—–]/g) || []).length;
  const conjunctions = (lower.match(/\b(?:because|although|while|whereas|which|that|so|but|therefore|thereby)\b/g) || []).length;
  return 1 + punctuation + conjunctions;
}

function containsCausalMarker(text) {
  const lower = String(text).toLowerCase();
  return CAUSAL_MARKERS.some((marker) => lower.includes(marker));
}

function structuralSignature(text) {
  const value = String(text).trim();
  return {
    causal: containsCausalMarker(value),
    clauses: clauseCount(value),
    punctuation: punctuationCount(value),
    numeric: /\d|[%$=+*/]/.test(value),
    arrow: /→|->/.test(value),
    sentence: /[.!?]$/.test(value),
  };
}

function technicalTerms(question) {
  const stemAndTags = `${question.question} ${(question.tags || []).join(" ")}`;
  const counts = new Map();
  for (const word of words(stemAndTags)) {
    if (word.length < 5 || STOPWORDS.has(word)) continue;
    counts.set(word, (counts.get(word) || 0) + 1);
  }
  return new Set(
    [...counts]
      .filter(([word, count]) => count > 1 || TECHNICAL_HINTS.has(word))
      .map(([word]) => word)
  );
}

function round(value) {
  return Math.round(value * 100) / 100;
}

function inspect(question) {
  const correct = question.choices[question.answerIndex];
  const wrong = question.choices.filter((_, index) => index !== question.answerIndex);
  const correctWords = words(correct).length;
  const wrongWords = wrong.map((choice) => words(choice).length);
  const wrongAverage = wrongWords.reduce((sum, count) => sum + count, 0) / wrongWords.length;
  const lengthRatio = wrongAverage ? correctWords / wrongAverage : Infinity;
  const correctPunctuation = punctuationCount(correct);
  const wrongPunctuation = wrong.map(punctuationCount);
  const wrongPunctuationAverage = wrongPunctuation.reduce((sum, count) => sum + count, 0) / wrongPunctuation.length;
  const terms = technicalTerms(question);
  const termCounts = question.choices.map((choice) => {
    const tokens = new Set(words(choice));
    return [...terms].filter((term) => tokens.has(term));
  });
  const correctTerms = termCounts[question.answerIndex];
  const wrongTermCounts = termCounts.filter((_, index) => index !== question.answerIndex).map((items) => items.length);
  const signatures = question.choices.map(structuralSignature);
  const correctSignature = signatures[question.answerIndex];
  const wrongSignatures = signatures.filter((_, index) => index !== question.answerIndex);
  const flags = [];

  if (correctWords > Math.max(...wrongWords)) flags.push("CORRECT_LONGEST");
  if (lengthRatio >= 1.3 && correctWords - wrongAverage >= 3) flags.push("LENGTH_MARGIN");
  if (wrongWords.some((count) => count <= correctWords * 0.55 && correctWords - count >= 5)) {
    flags.push("SHORT_DISTRACTOR");
  }
  if (correctPunctuation >= wrongPunctuationAverage + 1.5 || clauseCount(correct) >= Math.max(...wrong.map(clauseCount)) + 2) {
    flags.push("CLAUSE_PUNCTUATION");
  }
  if (
    correctTerms.length >= 1 &&
    Math.max(...wrongTermCounts) === 0 &&
    correctTerms.some((term) => TECHNICAL_HINTS.has(term))
  ) {
    flags.push("TECHNICAL_VOCAB_ONLY");
  }

  const structuralDifferences = wrongSignatures.map((signature) => {
    let differences = 0;
    if (signature.causal !== correctSignature.causal) differences += 1;
    if (signature.numeric !== correctSignature.numeric) differences += 1;
    if (signature.arrow !== correctSignature.arrow) differences += 1;
    if (signature.sentence !== correctSignature.sentence) differences += 1;
    if (Math.abs(signature.clauses - correctSignature.clauses) >= 2) differences += 1;
    return differences;
  });
  if (structuralDifferences.every((count) => count >= 1)) flags.push("STRUCTURAL_MISMATCH");

  return {
    id: question.id,
    topic: question.topic,
    questionType: question.questionType || "standard",
    answerIndex: question.answerIndex,
    wordCounts: question.choices.map((choice) => words(choice).length),
    correctToWrongAverageRatio: round(lengthRatio),
    punctuationCounts: question.choices.map(punctuationCount),
    technicalTermsByChoice: termCounts,
    structuralSignatures: signatures,
    flags,
  };
}

const inspected = questions.map(inspect);
const flagged = inspected.filter((result) => result.flags.length > 0);
const flagCounts = {};
const topicCounts = {};
const typeCounts = {};

for (const result of flagged) {
  for (const flag of result.flags) flagCounts[flag] = (flagCounts[flag] || 0) + 1;
  topicCounts[result.topic] = (topicCounts[result.topic] || 0) + 1;
  typeCounts[result.questionType] = (typeCounts[result.questionType] || 0) + 1;
}

const report = {
  totalQuestions: questions.length,
  flaggedQuestions: flagged.length,
  flagCounts,
  topicCounts,
  questionTypeCounts: typeCounts,
  flagged,
};

const topicArg = process.argv.find((arg) => arg.startsWith("--topic="));
const selectedTopic = topicArg ? topicArg.slice("--topic=".length) : null;
const idArg = process.argv.find((arg) => arg.startsWith("--id="));
const selectedIds = idArg ? new Set(idArg.slice("--id=".length).split(",")) : null;

if (process.argv.includes("--details")) {
  const resultById = new Map(inspected.map((result) => [result.id, result]));
  for (const question of questions.filter((item) =>
    (!selectedTopic || item.topic === selectedTopic) && (!selectedIds || selectedIds.has(item.id))
  )) {
    const result = resultById.get(question.id);
    console.log(`\n${question.id} | ${question.questionType || "standard"} | ${question.difficulty} | ${result.flags.join(", ") || "UNFLAGGED"}`);
    console.log(`STEM: ${question.question}`);
    question.choices.forEach((choice, index) => {
      const marker = index === question.answerIndex ? "CORRECT" : "WRONG";
      console.log(`  [${index}] ${marker} (${result.wordCounts[index]}w): ${choice}`);
      if (index !== question.answerIndex) console.log(`      WHY WRONG: ${question.wrongExplanations[index]}`);
    });
    console.log(`  WHY CORRECT: ${question.correctExplanation}`);
  }
} else if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`Checked ${questions.length} questions.`);
  console.log(`Flagged ${flagged.length} questions for manual review.`);
  console.log("Flags:");
  for (const [flag, count] of Object.entries(flagCounts).sort()) console.log(`  ${flag}: ${count}`);
  console.log("By question type:");
  for (const [type, count] of Object.entries(typeCounts).sort()) console.log(`  ${type}: ${count}`);
  console.log("By topic:");
  for (const [topic, count] of Object.entries(topicCounts).sort()) console.log(`  ${topic}: ${count}`);
  console.log("\nFlagged IDs (ratio; flags):");
  for (const result of flagged) {
    console.log(`  ${result.id} (${result.correctToWrongAverageRatio}; ${result.flags.join(", ")})`);
  }
}
