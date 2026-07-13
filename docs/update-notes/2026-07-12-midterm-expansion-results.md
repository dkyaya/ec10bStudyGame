# Midterm Review Expansion Results — 2026-07-12

Companion results doc to
`docs/update-notes/2026-07-12-midterm-expansion-plan.md`.

## Sources used

- **`midterm_review`** (`MidtermStudyMaterials_Summer2026.doc`) — the only
  source used. No new sheet/exam-prep file was found in `private-materials/`
  (see the plan doc for the full file-by-file comparison); every file
  present is already represented in `data/sources.json`. `data/sources.json`
  was not modified in this update.

## Questions added

**52 new questions**, IDs prefixed `midterm-var-*`, all with
`sourceIds: ["midterm_review"]` and `sourceLabel: "Instructor Midterm Study
Guide and Practice Problems"` (matching the existing 17 questions'
convention exactly). Every new question is a fresh scenario (new entities,
new numbers, new sentence structure and answer-choice wording/order) built
from one of the source document's 11 worked practice problems — never a
number-substitution "mad-libs" variant of the original problem or of an
existing app question, per the task's non-verbatim rules.

### IDs added, by prefix

- `midterm-var-saving-001` .. `-009` (9): closed-economy S=I reverse/surplus/
  diagnose variants (3), housing/capital-gains variants (3), national/
  private/public saving variants (3)
- `midterm-var-cpi-001` .. `-008` (8): real-interest-rate/Fisher-equation
  variants (4), CPI-indexing variants (4)
- `midterm-var-gdp-001` .. `-008` (8): value-added variants (5), inventory-
  timing variants (3)
- `midterm-var-growth-001` .. `-008` (8): labor-productivity counterfactual
  variants (5), compound real-GDP growth-rate variants (3)
- `midterm-var-loanable-001` .. `-009` (9): government-budget/national-
  saving variants (4), vertical-saving-curve graph variants (4), crowding-
  out vocab (1)
- `midterm-var-financialmarkets-001` .. `-004` (4): stock present-value/
  risk-premium variants
- `midterm-var-capitalflows-001` .. `-006` (6): open-economy loanable-funds
  (S+KI=I) variants

52 IDs total, all unique, all new (no collisions with the existing 288 IDs).

## Final Midterm Review count

**69 questions** (17 existing + 52 new) — "roughly 68," landing one above
the round target because all 11 worked practice problems received full,
multi-directional coverage (at least 3 new variants each) rather than being
cut short to hit an exact number.

### Midterm Review questionType breakdown

| Type | Before | Added | After |
|---|---|---|---|
| Formula | 11 | 27 | **38** |
| Standard | 3 | 15 | **18** |
| Graph | 2 | 7 | **9** |
| Vocab | 1 | 3 | **4** |
| **Total** | **17** | **52** | **69** |

All four counts land within (or, for standard, at the top of) the task's
suggested ranges (35–45 formula, 8–12 graph, 12–18 standard, 3–6 vocab).

## Final total question count

**340 questions** (288 + 52), **17 topics** (unchanged — every new question
maps to an existing topic; no new topics were needed), **13 sources**
(unchanged — no new source was added).

- Vocabulary/definition questions: **42** (39 + 3)
- Formula/quantitative questions: **78** (51 + 27)
- Graph interpretation questions: **46** (39 + 7), still **11** with an
  inline SVG diagram (all 7 new graph questions use a fully-described text
  graph situation rather than a new SVG, consistent with Part E's option to
  use either format; no new diagrams were needed since none of the 7
  required a shape/geometry that couldn't be conveyed clearly in words)

## Concept coverage map

Every one of the source's 11 worked practice problems now has at least 4
questions total (1 original + 3-plus new variants) spanning multiple
task directions per the task's guidance:

- **Compute a value** (the original problems' own direction) — present for
  all 11 problems.
- **Infer a missing input given an outcome** (reverse direction) — added for
  problems 1, 2, 4, 5, 6 (twice), 7, 8, 9, 10, and the S+KI=I identity.
- **Diagnose a mistaken formula/reasoning** — added for problems 1, 2, 3, 4
  (implicitly via the double-counting-magnitude variant), 5, 6, 7 (twice,
  for both the private- and public-saving formulas), 8, 9, 10.
- **Compare two cases** — added for problems 2, 3 (via the wealth-vs-saving
  framing), 4, 7 (spending increase vs. tax cut; vertical vs. sloped
  curve), 9, 11 (boom vs. recession shock).
- **Connect to a graph / choose which curve shifts** — added for problem 7
  (4 new graph variants covering vertical-vs-sloped comparison, a reversed
  saving-increase shift, an investment-demand shift with a fixed vertical
  supply curve, and identifying which curve a deficit-decrease shifts) and
  problem 11 (3 new graph variants covering the S+KI curve shift/
  equilibrium read, a closed-to-open-economy transition, and KI falling to
  zero).
- **Vocabulary/definition** — added for the housing/capital-gains problem
  (defining "capital gain"), the value-added problem (defining "value
  added"), and the saving/loanable-funds problem (defining "crowding out").

## Arithmetic verification method

Two independent passes, both using real JavaScript arithmetic (not
hand-calculation) before any question was authored into the final schema:

1. An initial `node -e` verification pass computed every intended correct
   value and every planned distractor value for each new formula question
   from its scenario's raw numbers, confirming the arithmetic before the
   question text and choices were written.
2. A second, fully standalone script
   (`verify_arithmetic.mjs`, run separately from the authoring script)
   recomputed all 30 of the new formula questions' key correct-answer
   values directly from each scenario's numbers — reading only the plan's
   scenario descriptions, not the already-authored question objects — and
   confirmed every recomputed value matches the `answerIndex: 0` choice
   string in the final `data/questions.json` entry. All 30 checks matched.

No arithmetic errors were found in either pass.

## Graph/diagram verification

None of the 7 new graph questions include an inline SVG diagram (all are
fully self-contained text descriptions of the curve/shift/equilibrium
situation, which Part E of the task explicitly allows as an alternative to
an SVG). Each was checked by hand for internal consistency between its
described shift direction, its stated curve (saving-supply vs. investment-
demand vs. the open-economy S+KI curve), and its stated equilibrium
real-interest-rate/quantity outcome, cross-checked against the same
shift-direction logic already established and audited in the two existing
graph questions (`graph-examprep-verticalsaving-001` and
`graph-examprep-foreignshock-001`).

## `needsReview` count

**0** — no new question required the flag. Every question's underlying
economics and (where applicable) arithmetic were independently verified
before authoring.

## Validation result

```
$ node scripts/validate-data.mjs
Checked 340 questions, 17 topics, 13 sources.
Vocabulary/definition questions: 42.
Formula/quantitative practice questions: 78.
Graph interpretation questions: 46 (11 with an inline diagram).
All checks passed with no errors or warnings.
```

No errors, no warnings (including no near-duplicate-question-text warnings
despite several questions sharing an underlying concept with an existing
question — each was independently checked for fresh scenario/wording before
authoring, and the validator's normalized-text duplicate check confirms
none read as near-identical).

## Skipped material

None of the source document's 11 worked practice problems were skipped. The
topic-outline section (the document's first ~90 lines) was again not mined
directly into questions, for the same reason as the prior update: it is a
bulleted list of topics with no gradeable content of its own, and its topics
are already covered elsewhere in the bank (confirmed again during this
update's planning pass).
