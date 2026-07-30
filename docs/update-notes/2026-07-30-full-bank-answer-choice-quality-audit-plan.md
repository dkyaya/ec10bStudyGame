# 2026-07-30 Full-Bank Answer-Choice Quality Audit — Plan

## Context

The final lecture add-on (same day, see
`docs/update-notes/2026-07-30-final-lecture-addon-*.md`) found and fixed a
length-based answer-choice giveaway pattern in 18 of its own 41 new
questions before they were ever committed. The user has now asked for the
same scrutiny applied backward across the **entire active 250-question
bank**, most of which was authored before that check existed. This audit's
primary focus is answer-choice quality and guessability — not a general
content re-audit — per the task's explicit scope.

## Total questions audited: 250

### questionType breakdown

| Type | Count |
|---|---|
| `standard` (explicit) | 64 |
| `standard` (legacy, untyped) | 41 |
| `vocab` | 58 |
| `formula` | 58 |
| `graph` | 29 |

### Topic breakdown

| Topic | Count |
|---|---|
| `monetary-policy-postmidterm` | 29 |
| `keynesian-cross-model` | 26 |
| `fiscal-policy` | 26 |
| `financial-crisis-2008` | 26 |
| `aggregate-demand-supply` | 24 |
| `business-cycles-output-gaps` | 22 |
| `exchange-rates` | 21 |
| `unemployment` | 20 |
| `money-market` | 20 |
| `open-economy-policy` | 20 |
| `inflation-dynamics` | 16 |

### Source breakdown (by primary `sourceIds[0]`)

| Source | Count |
|---|---|
| `class8` | 75 |
| `class9` | 46 |
| `class10` | 41 |
| `class11` | 41 |
| `financial_crisis_reading` | 19 |
| `much_ado_multipliers` | 9 |
| `problemset4` | 9 |
| `haltom_unconventional_mp` | 6 |
| `romer_great_depression` | 2 |
| `final_study_guide` | 1 |
| `romer_fiscal_stimulus_nyt` | 1 |

## Audit methods

1. **Automated giveaway scan** (Part B) — the dependency-free Node script
   `scripts/audit-answer-choices.mjs` checks every
   question's four choices for the length/structure patterns listed below,
   producing a ranked, reason-tagged flag list used to prioritize manual
   review, not as an auto-fix tool.
2. **Manual answer-choice review** (Part C) — every flagged question, tiered
   by severity, plus a representative unflagged sample across all 11 topics
   and all 4 `questionType`s, checked against the length/plausibility/
   specificity/parallel-structure/causal-chain/formula/graph/reading rubric
   in the task brief.
3. **Source-fidelity spot-check while editing** (Part D) — any rewritten
   choice is checked against the question's own `correctExplanation` and
   `wrongExplanations` (which already cite the source claim) before being
   changed, so a rewrite never drifts the tested claim.
4. **Ambiguity audit** (Part E) — for every changed question, confirm
   exactly one choice is correct and no distractor is defensible.
5. **Difficulty re-check** (Part F) — for changed questions only, re-apply
   the difficulty rubric; relabel only if the fix genuinely changed how hard
   the question is to answer.
6. **Targeted spot checks** (Part G) — Class 11 exchange-rate/trilemma
   questions, Okun's-Law/output-gap formula questions, AD-AS graph
   questions, formula questions with several numeric distractors, and
   reading-heavy vocab questions get an extra pass even if not flagged,
   given their recent-audit or complexity profile.

## Automated checks implemented

For every question with exactly 4 choices, the script computes:

- **CORRECT_LONGEST** — the correct choice has the highest word count
  (ties for longest are included, because the signal can still recur across
  a bank even when an occasional distractor ties it).
- **LENGTH_MARGIN** — the correct choice is at least 30% and at least three
  words longer than the average distractor.
- **SHORT_DISTRACTOR** — at least one distractor is less than 60% of the
  correct choice's length, with a gap of at least four words.
- **CLAUSE_PUNCTUATION** — the correct choice has noticeably more commas,
  semicolons, colons, dashes, parentheses, or clause markers than the
  average distractor, a proxy for “only one full causal chain.”
- **TECHNICAL_VOCAB_ONLY** — stem/tag-derived course vocabulary appears in
  the correct choice and in none of the distractors.
- **STRUCTURAL_MISMATCH** — the correct choice's causal-chain, numeric,
  arrow, or sentence structure differs from all three distractors.

These six checks are deliberately broad and mechanical — they are a
**prioritization filter**, not a verdict. Every flagged question still gets
a human read before any edit, and the results note documents false
positives the scan caught that turned out fine on manual review.

## Automated scan results (raw)

```
Total questions: 250
Total flagged: 171

By category:
  CORRECT_LONGEST: 156
  LENGTH_MARGIN: 144
  SHORT_DISTRACTOR: 115
  CLAUSE_PUNCTUATION: 91
  STRUCTURAL_MISMATCH: 62
  TECHNICAL_VOCAB_ONLY: 2

By topic:
  financial-crisis-2008: 24
  monetary-policy-postmidterm: 20
  fiscal-policy: 19
  inflation-dynamics: 16
  money-market: 16
  aggregate-demand-supply: 16
  keynesian-cross-model: 14
  unemployment: 13
  business-cycles-output-gaps: 13
  open-economy-policy: 12
  exchange-rates: 8

By questionType:
  standard (explicit + legacy/untyped): 85
  vocab: 46
  graph: 28
  formula: 12
```

The same-day Class 11 topics (`exchange-rates` and `open-economy-policy`)
produce 20 flags under this intentionally broader scan. Manual inspection
shows many are false positives: a correct choice is only one to four words
longer while all four choices already have parallel, developed structures.
That is a useful sanity check both that the scan is sensitive and that its
flags cannot be treated as automatic rewrite instructions.

## Manual-review prioritization

All 171 flagged questions will receive a manual decision. Highest priority
goes to questions with `LENGTH_MARGIN` plus `SHORT_DISTRACTOR`, followed by
causal-chain questions with `CLAUSE_PUNCTUATION` or `STRUCTURAL_MISMATCH`.
Borderline `CORRECT_LONGEST`-only flags are still read, but are expected to
produce many documented false positives. The remaining 79 unflagged
questions supply the representative sample across all 11 topics and all
four question types; formula, graph, reading-heavy vocab, Okun's-law, AD-AS,
and Class 11 questions receive their targeted checks regardless of flag
status.

## High-risk patterns being checked for (per the task brief)

- Correct answer longest by word count.
- Correct answer much more specific than distractors.
- Correct answer the only choice with a full causal chain.
- Correct answer the only choice using technical/course vocabulary.
- Distractors too short or vague relative to the correct answer.
- Distractors obviously false / cartoonishly wrong.
- Answer choices not parallel in grammatical structure.
- "All plausible except one clearly academic-sounding answer" pattern.
- Formula distractors whose stated derivation doesn't match the displayed
  number.
- Graph distractors describing an outcome that's impossible under the
  diagram as described/drawn.
- Reading-question distractors that are unrelated claims rather than
  plausible nearby misreadings.

## What this audit will NOT do

- Rewrite questions that are already well-balanced just because they were
  touched by the scan's coarse heuristics (false positives are expected and
  will be left alone, with examples documented).
- Re-verify source grounding for claims that aren't being edited — this is
  an answer-choice audit, not a full re-extraction of every source file.
  Source-fidelity checks happen only when a choice's wording is actually
  being changed (Part D), or where Part G's targeted spot-checks flag a
  substantive concern.
- Change question IDs, topics, or `questionType` values for unchanged
  questions.
- Change application behavior in `src/` or presentation in `styles/`.
  The only planned non-data implementation is the documented, dependency-
  free scanner in `scripts/` required to make the giveaway check
  reproducible.
