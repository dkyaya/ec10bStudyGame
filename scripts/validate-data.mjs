#!/usr/bin/env node
// Validates data/questions.json, data/topics.json, and data/sources.json.
// Pure Node, no dependencies. Run with: node scripts/validate-data.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const REQUIRED_FIELDS = [
  "id",
  "topic",
  "subtopic",
  "difficulty",
  "sourceIds",
  "sourceLabel",
  "needsReview",
  "question",
  "choices",
  "answerIndex",
  "correctExplanation",
  "wrongExplanations",
  "tags",
];

let errorCount = 0;
let warnCount = 0;

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  errorCount += 1;
}

function warn(msg) {
  console.warn(`WARN: ${msg}`);
  warnCount += 1;
}

function loadJson(relPath) {
  const fullPath = join(root, relPath);
  let raw;
  try {
    raw = readFileSync(fullPath, "utf8");
  } catch (err) {
    fail(`${relPath}: could not read file (${err.message})`);
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    fail(`${relPath}: invalid JSON (${err.message})`);
    return null;
  }
}

function normalizeText(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function main() {
  const questions = loadJson("data/questions.json");
  const topics = loadJson("data/topics.json");
  const sources = loadJson("data/sources.json");

  if (!Array.isArray(questions) || !Array.isArray(topics) || !Array.isArray(sources)) {
    fail("One or more data files did not parse to an array. Cannot continue validation.");
    printSummaryAndExit();
    return;
  }

  const topicIds = new Set(topics.map((t) => t.id));
  const sourceIds = new Set(sources.map((s) => s.id));
  const seenIds = new Set();
  const seenTextKeys = new Map();

  questions.forEach((q, index) => {
    const label = q.id || `#${index}`;

    REQUIRED_FIELDS.forEach((field) => {
      if (q[field] === undefined) fail(`${label}: missing required field "${field}"`);
    });

    if (q.id) {
      if (seenIds.has(q.id)) fail(`${label}: duplicate question id`);
      seenIds.add(q.id);
    } else {
      fail(`${label}: question has no id`);
    }

    if (q.topic && !topicIds.has(q.topic)) {
      fail(`${label}: references unknown topic id "${q.topic}"`);
    }

    (q.sourceIds || []).forEach((sid) => {
      if (!sourceIds.has(sid)) fail(`${label}: references unknown source id "${sid}"`);
    });

    if (Array.isArray(q.choices) && Array.isArray(q.wrongExplanations)) {
      if (q.choices.length !== q.wrongExplanations.length) {
        fail(
          `${label}: choices length (${q.choices.length}) does not match wrongExplanations length (${q.wrongExplanations.length})`
        );
      }

      if (typeof q.answerIndex !== "number" || q.answerIndex < 0 || q.answerIndex >= q.choices.length) {
        fail(`${label}: answerIndex ${q.answerIndex} is out of range for ${q.choices.length} choices`);
      } else {
        q.wrongExplanations.forEach((exp, i) => {
          if (i === q.answerIndex) {
            if (exp !== null) fail(`${label}: wrongExplanations[${i}] should be null at the correct answer's index`);
          } else if (!exp || !String(exp).trim()) {
            fail(`${label}: missing wrongExplanation for incorrect choice at index ${i}`);
          }
        });
      }
    } else {
      if (!Array.isArray(q.choices)) fail(`${label}: choices is not an array`);
      if (!Array.isArray(q.wrongExplanations)) fail(`${label}: wrongExplanations is not an array`);
    }

    if (q.question) {
      const key = normalizeText(q.question);
      if (seenTextKeys.has(key)) {
        warn(`${label}: question text is a near-duplicate of "${seenTextKeys.get(key)}"`);
      } else {
        seenTextKeys.set(key, label);
      }
    }
  });

  console.log(`Checked ${questions.length} questions, ${topics.length} topics, ${sources.length} sources.`);
  printSummaryAndExit();
}

function printSummaryAndExit() {
  if (errorCount === 0 && warnCount === 0) {
    console.log("All checks passed with no errors or warnings.");
  } else {
    console.log(`\nSummary: ${errorCount} error(s), ${warnCount} warning(s).`);
  }
  process.exit(errorCount > 0 ? 1 : 0);
}

main();
