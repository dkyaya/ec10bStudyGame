# Midterm Review Quality Audit Results — 2026-07-12

Companion results doc to `docs/update-notes/2026-07-12-midterm-review-quality-audit-plan.md`.
This audit covered exactly the 17 questions in `data/questions.json` whose
`sourceIds` includes `"midterm_review"` — no other question in the 288-question
bank was touched.

## Counts audited

- **17 / 17 midterm-review questions audited** for concept coverage,
  `sourceIds`/`sourceLabel` accuracy, self-containment, correctness,
  distractor defensibility, explanation fidelity, non-verbatim wording, and
  fit for a study game.
- **11 / 11 formula questions** independently re-checked for arithmetic
  (correct answer and every distractor recomputed from scratch via a fresh
  script, not reused from the original authoring pass).
- **2 / 2 graph questions** audited for curve shift/slope/axis/interpretation
  correctness; the one with an inline SVG diagram
  (`graph-examprep-verticalsaving-001`) had its line-intersection geometry
  independently re-derived and its `alt` text, caption, and CSS-variable
  theme adaptation re-checked.
- **17 / 17 questions** checked against the difficulty/questionType/topic/
  subtopic/tags rubric.
- **Coverage/duplication check** across the 17-question batch against all 11
  of the source's worked practice problems.

## Fixes made

**8 of 17 questions rewritten** for near-verbatim sentence-architecture
copying — the central finding of this audit. Despite already using fresh
numbers (per the pre-existing no-verbatim-answer-key rule), these 8 questions
had preserved the source's own worked problem's exact sentence structure and
clause order, a "mad-libs" pattern distinct from copying exact numbers or
exact answer-choice sets:

1. `formula-examprep-closedeconomy-si-001` — rewritten scenario (households/
   firms saving + a government budget deficit), new numbers ($2.4B saved,
   $350M deficit → $2.05B investment), restructured sentences.
2. `formula-examprep-realrepayment-001` — rewritten scenario (food-truck loan
   instead of a student loan), new numbers ($15,000, 8%/3%, 5 years →
   $19,144), restructured sentences.
3. `formula-examprep-valueadded-001` — rewritten scenario (logger →
   manufacturer → wholesaler → retailer chain instead of the source's
   chip-and-license chain), new numbers (total value added = $180,000).
4. `formula-examprep-cpiindex-001` — rewritten scenario (pension indexing
   instead of minimum-wage indexing), new numbers ($1,200, CPI 110→176 →
   $1,920); `tags` updated from "minimum wage" to "pension" to match.
5. `formula-examprep-nationalsaving-001` — rewritten from a bare Y/C/G/T
   variable list (which had reused the source's own phrase "Taxes minus
   transfers (T)") to narrative prose; new numbers (Y=$7,500B, C=$5,200B,
   G=$1,100B, T=$1,350B → private $950B, public $250B, national $1,200B).
6. `formula-examprep-nationalsaving-002` — cascading number update to match
   Fix 5's new scenario (G rises $1,100B→$1,400B → national saving falls to
   $900B); restates all figures needed to stand alone.
7. `graph-examprep-verticalsaving-001` — cascading number update to match
   Fix 5/6's new scenario (national saving $1,200B→$900B). Diagram SVG
   required **no changes**, since it uses only abstract `S`/`S'`/`I`/`E`/`E'`
   labels with no embedded dollar figures; its geometry was re-verified as
   accurate independent of the dollar-figure update.
8. `formula-examprep-stockpv-001` — rewritten scenario (a collector buying a
   private company's share, 3-year horizon, instead of the source's
   2-year stock example), new numbers ($500, 3% safe rate, 7-point risk
   premium → $665.50).

**No fixes were needed** for the other 9 questions
(`standard-examprep-housingsavings-001`, `standard-examprep-valueadded-002`,
`formula-examprep-productivitycounterfactual-001`,
`formula-examprep-productivitycounterfactual-002`,
`formula-examprep-inventorysale-001`, `formula-examprep-realgdpgrowth-001`,
`graph-examprep-foreignshock-001`, `standard-examprep-usnxki-001`,
`vocab-examprep-moneyassets-001`) — all were already correctly worded,
correctly computed, and correctly labeled.

**No arithmetic errors** were found in any question's original numbers — the
issue in the 8 fixed questions was exclusively wording/structural fidelity to
the source, never calculation correctness. **No distractor-defensibility,
explanation-fidelity, diagram-geometry, difficulty/questionType/topic
mislabeling, or duplication issues** were found anywhere in the 17-question
batch.

A new rule — "Avoid 'mad-libs' number substitution" — was added to
`docs/question-authoring-guide.md` documenting this failure mode for future
question authors, since it's distinct from the previously-documented
verbatim-numbers and verbatim-answer-choice-set risks.

## Questions added / removed

None. The batch remains exactly 17 questions; all 8 fixes were rewrites of
existing question content (question, choices, explanations, and one `tags`
update), preserving every original question ID, `topic`, `difficulty`,
`questionType`, `sourceIds`, and `sourceLabel`.

## Final counts

- Total questions: **288** (unchanged)
- Midterm Review questions: **17** (unchanged)
- Vocabulary/definition questions: **39**
- Formula/quantitative questions: **51**
- Graph interpretation questions: **39** (11 with an inline diagram)
- Topics: **17**
- Sources: **13**
- `needsReview: true` count: **0** (unchanged — every issue found was
  resolvable via rewrite; no question required the flag)

## Validation result

```
$ node scripts/validate-data.mjs
Checked 288 questions, 17 topics, 13 sources.
Vocabulary/definition questions: 39.
Formula/quantitative practice questions: 51.
Graph interpretation questions: 39 (11 with an inline diagram).
All checks passed with no errors or warnings.
```

See `docs/update-notes/2026-07-12-midterm-review-quality-audit-plan.md` for
the audit's scope, method, and advance risk flags, and
`docs/source-notes.md`'s "2026-07-12 Midterm Review Quality Audit" section
for the full narrative writeup.
