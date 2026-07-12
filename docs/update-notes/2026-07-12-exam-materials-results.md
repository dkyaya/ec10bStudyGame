# Exam Materials Results — 2026-07-12

Companion to `docs/update-notes/2026-07-12-exam-materials-plan.md`. Outcome of
incorporating the newly added midterm-prep document into the Econ 10b study game.

## Summary

- New source file: `MidtermStudyMaterials_Summer2026.doc` → source ID
  `midterm_review`
- Academic-integrity check: **performed, passed** — confirmed legitimate,
  instructor-released study material (see the plan doc for the full assessment).
  No file was excluded or flagged as a concern.
- New questions added: **17**
- `needsReview` count among new questions: **0**
- Final question count: **288** (was 271)
- Final vocab count: **39** (was 38; +1)
- Final formula count: **51** (was 40; +11)
- Final graph count: **39** (was 37; +2, one with a new inline SVG diagram)
- Final source count: **13** (was 12; +1)
- Final topic count: **17** (unchanged — no new topics needed)
- New study mode: **Midterm Review**, filtering on `sourceIds` containing
  `midterm_review` (see design rationale in the plan doc and
  `docs/question-authoring-guide.md`)
- `node scripts/validate-data.mjs`: **0 errors, 0 warnings** on the final
  288-question bank

## Questions generated per source

All 17 new questions come from the single new source, `midterm_review`.

| questionType | Count | IDs |
|---|---|---|
| `formula` | 11 | `formula-examprep-closedeconomy-si-001`, `formula-examprep-realrepayment-001`, `formula-examprep-valueadded-001`, `formula-examprep-cpiindex-001`, `formula-examprep-productivitycounterfactual-001`, `formula-examprep-productivitycounterfactual-002`, `formula-examprep-nationalsaving-001`, `formula-examprep-nationalsaving-002`, `formula-examprep-inventorysale-001`, `formula-examprep-stockpv-001`, `formula-examprep-realgdpgrowth-001` |
| `graph` | 2 | `graph-examprep-verticalsaving-001` (with an inline diagram), `graph-examprep-foreignshock-001` (text-described) |
| `standard` | 3 | `standard-examprep-housingsavings-001`, `standard-examprep-valueadded-002`, `standard-examprep-usnxki-001` |
| `vocab` | 1 | `vocab-examprep-moneyassets-001` |
| **Total** | **17** | |

## Questions by topic (all pre-existing topics — none added)

| Topic | Count |
|---|---|
| `saving-investment` | 4 |
| `gdp-accounting` | 3 |
| `growth-accounting-compound-growth` | 3 |
| `capital-flows` | 2 |
| `gdp-cpi-inflation` | 2 |
| `financial-markets` | 1 |
| `loanable-funds` | 1 |
| `money-banking` | 1 |

## Coverage balance (Part E check)

- **Formula questions**: 11 of 17 (65%) — matches the source material, which is
  dominated by quantitative practice problems with full worked solutions (the
  instructor's own framing: "analytical (problem set-like) questions that might
  be quantitative or qualitative").
- **Graph questions**: 2 of 17 — matches the source, which explicitly asks
  students to "illustrate the effect... on a carefully labeled diagram" in
  exactly two of its 11 problems; no more or fewer graph questions were forced
  than the source itself calls for.
- **Conceptual application questions**: 3 standard questions (the wealth-effect-
  on-saving question, the value-added-method conceptual follow-up, and the U.S.
  NX/KI-signs question) cover the source's qualitative/true-false-style content
  without needing to force a False/True format the app doesn't support (converted
  to 4-choice MC instead, as required).
- **Vocab**: 1 question (money as a zero-nominal-interest asset), grounded in
  the source's own outline framing of money vs. other financial assets.
- **No excessive duplication**: every one of the 17 questions tests a distinct
  calculation or concept; where a single source problem had multiple genuinely
  distinct gradeable parts (the value-added problem, the productivity-
  counterfactual problem, and the multi-part national-saving problem), it was
  split into 2-3 separate questions — never split just to inflate the count
  (see the plan doc for the reasoning behind each split).

## Diagram added

One new inline SVG diagram, for `graph-examprep-verticalsaving-001`: a
**vertical saving-supply curve** shifting left against a fixed downward-sloping
investment-demand curve — a visually distinct pattern from the upward-sloping
saving curves used in the existing loanable-funds diagrams, since this source
problem specifically stipulates a perfectly interest-rate-insensitive saving
supply. The diagram's equilibrium markers were verified against the exact
line-intersection coordinates (same method used in the 2026-07-11 graph-question
audit) before being finalized: E = (165, 114), E' = (135, 90), confirming the
real interest rate rises and the quantity of saving/investment falls when the
vertical line shifts left, matching the question's claims exactly.

## Arithmetic verification

Every one of the 11 formula questions' correct answers and all of their
numeric distractors were independently computed via a standalone Python script
before being written into `data/questions.json` (not just hand-checked) —
including the two multi-step questions (`formula-examprep-realrepayment-001`,
combining the Fisher equation with compound interest, and
`formula-examprep-productivitycounterfactual-002`, a piecewise dual-rate
compound-growth comparison). All computed values matched the intended
methodology exactly; see the plan doc for the source's own worked solutions
that were re-derived (not copied) to confirm the underlying method before fresh
numbers were substituted in.

## Skipped or adapted material

- **The topic-outline portion of the source** (roughly the first half of the
  document) was not mined directly into questions — it's a bulleted list of
  topics with no gradeable content of its own, and nearly every topic it names
  is already covered by existing sources. It was used only to confirm the
  topic coverage and emphasis reflected in the table above.
- **One claim adapted rather than reused as-is**: the open-economy practice
  problem's own suggested solution included a secondary claim about the effect
  on U.S. net exports that rests on a looser, more debatable mix of trade
  effects than the same problem's much cleaner capital-inflows claim. The
  adapted question (`graph-examprep-foreignshock-001`) keeps only the
  defensible capital-inflows mechanism and omits the debatable NX claim. See
  `docs/source-notes.md`'s 2026-07-12 section and the plan doc for the full
  reasoning.
- **No content was skipped for being unclear, incomplete, or unreadable** — the
  `.doc` file converted cleanly via `textutil`, and every one of the 11
  practice problems had a complete, internally consistent worked solution
  available.

## `needsReview` handling

No question required `needsReview: true`. Every question's underlying concept
and arithmetic was independently verified against the source's own worked
solution (recomputed, not just read) before being written with a fresh
scenario, per the no-verbatim-copying rule.

## Validation and QA

- `node scripts/validate-data.mjs`: 288 questions, 17 topics, 13 sources, 39
  vocab, 51 formula, 39 graph (11 with an inline diagram), **0 errors, 0
  warnings**.
- See the CHANGELOG entry for this update for the live-app playtest
  verification (Midterm Review mode, regression checks on Formula/Graph/
  Vocabulary modes, answer-choice shuffling, Reset Progress).
