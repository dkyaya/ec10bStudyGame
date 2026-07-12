# Midterm Review Quality Audit Plan — 2026-07-12

Companion follow-up to the same-day `2026-07-12-exam-materials-plan.md` /
`-results.md` update, which added the `midterm_review` source and 17 questions
derived from it, plus a Midterm Review study mode. This audit is a focused
quality pass over exactly those 17 questions — it does not touch any other
question in the 288-question bank, except for a tiny shared rendering/
validation fix if one turns out to be necessary.

## Exact question IDs being audited (17)

`formula-examprep-closedeconomy-si-001`, `formula-examprep-realrepayment-001`,
`standard-examprep-housingsavings-001`, `formula-examprep-valueadded-001`,
`standard-examprep-valueadded-002`, `formula-examprep-cpiindex-001`,
`formula-examprep-productivitycounterfactual-001`,
`formula-examprep-productivitycounterfactual-002`,
`formula-examprep-nationalsaving-001`, `formula-examprep-nationalsaving-002`,
`graph-examprep-verticalsaving-001`, `formula-examprep-inventorysale-001`,
`formula-examprep-stockpv-001`, `formula-examprep-realgdpgrowth-001`,
`graph-examprep-foreignshock-001`, `standard-examprep-usnxki-001`,
`vocab-examprep-moneyassets-001`.

This is exactly the set of questions in `data/questions.json` whose
`sourceIds` includes `"midterm_review"` — confirmed programmatically before
writing this plan (17 found, matching the expected count).

## Breakdown by `questionType` (before audit)

| Type | Count | IDs |
|---|---|---|
| `formula` | 11 | `formula-examprep-closedeconomy-si-001`, `formula-examprep-realrepayment-001`, `formula-examprep-valueadded-001`, `formula-examprep-cpiindex-001`, `formula-examprep-productivitycounterfactual-001`, `formula-examprep-productivitycounterfactual-002`, `formula-examprep-nationalsaving-001`, `formula-examprep-nationalsaving-002`, `formula-examprep-inventorysale-001`, `formula-examprep-stockpv-001`, `formula-examprep-realgdpgrowth-001` |
| `graph` | 2 | `graph-examprep-verticalsaving-001` (has an inline diagram), `graph-examprep-foreignshock-001` (text-described) |
| `standard` | 3 | `standard-examprep-housingsavings-001`, `standard-examprep-valueadded-002`, `standard-examprep-usnxki-001` |
| `vocab` | 1 | `vocab-examprep-moneyassets-001` |

`needsReview: true` count before audit: **0**.

## Source file being used

`private-materials/MidtermStudyMaterials_Summer2026.doc` — the file already
referenced by the `midterm_review` entry in `data/sources.json`. Re-converted
fresh to plain text via macOS's `textutil` for this audit (not reused from any
cached extraction), producing 260 lines identical in length to the extraction
used during the original authoring pass, confirming the file is unchanged.

## Specific audit checks to perform

Per question:

1. **Concept coverage** — is the tested concept actually present in the
   source's outline or (more importantly, since the outline itself wasn't
   mined directly) one of its 11 worked practice problems?
2. **`sourceIds` / `sourceLabel` accuracy** — both should point to
   `midterm_review` / "Instructor Midterm Study Guide and Practice Problems."
3. **Self-containment** — can the question be answered from its own stem alone,
   with no dependency on a previous question in the set? (Two of these
   questions are deliberately part of a continuing scenario —
   `formula-examprep-nationalsaving-002` and `graph-examprep-verticalsaving-001`
   — so this gets specific attention: do they actually restate the prior
   numbers needed, or do they silently assume the reader just answered the
   earlier question?)
4. **Correctness** — is the marked correct answer actually correct?
5. **Distractor defensibility** — is any wrong choice actually also
   defensible under a different but plausible reading?
6. **Explanation fidelity** — does `correctExplanation` match the source's own
   reasoning/method (not just arrive at the same number by a different, unengaged
   method)?
7. **No near-verbatim wording** — are the question stem and all four choices
   meaningfully reworded from the source's own sentences, numbers, and answer
   structure, not just cosmetically touched up? This gets the closest scrutiny
   of any check in this audit (see "High-risk areas" below).
8. **Fit for a study game** — does the question read as a self-contained
   practice item, not merely a lightly-touched copy of an exam problem?

## Formula arithmetic audit (11 questions)

For each: independently recompute the correct answer and every numeric
distractor from scratch (fresh script, not reusing the original authoring
pass's verification script or its cached output), confirm the
`correctExplanation` shows the formula, the substitution, the result, and an
interpretation, and confirm each `wrongExplanations` entry names a specific,
plausible mistake rather than an arbitrary wrong number.

## Graph audit (2 questions)

For `graph-examprep-verticalsaving-001` (has a diagram): recompute the SVG's
line-intersection coordinates independently, check axis/curve labels, check
that the dashed shifted curve is positioned in the claimed direction, check
equilibrium markers sit exactly on the computed intersections, check `alt`
text accuracy, caption conciseness, and CSS-variable usage for theme
adaptation. For `graph-examprep-foreignshock-001` (text-described, no
diagram): verify the shift-and-equilibrium reasoning is internally consistent
and matches the S + KI = I framework as taught in the (already-existing)
`class5` source, since this question deliberately adapts only the defensible
part of the original practice problem's own solution.

## High-risk areas flagged in advance

- **Near-verbatim wording risk is the top concern for this audit.** The
  previous two audits in this project (2026-07-11's midterm-materials audit
  and this same day's exam-materials update) both flag verbatim copying as a
  recurring risk category for source-derived questions, and this exam-prep
  batch was authored using the source's own worked numeric examples as a
  starting point before substituting fresh numbers — every stem and choice set
  will be re-compared side-by-side against the source's exact sentences.
- **The one adapted claim** (`graph-examprep-foreignshock-001`, which
  deliberately drops the source's own secondary NX claim as too debatable and
  keeps only the capital-inflows mechanism) will be re-examined to confirm the
  surviving claim is fully self-consistent on its own, without the dropped
  claim leaving any loose thread in the explanation.
- **Answer-choice structure copied from the source** — several source
  problems (the productivity counterfactual, the value-added chain) have a
  distinctive numeric/structural shape; this audit checks whether the four
  choices in the corresponding questions merely swap in new numbers using the
  *exact same* distractor-generation logic as the source's own solution notes,
  versus independently-designed distractors.
- **Continuation questions' self-containment** — `formula-examprep-
  nationalsaving-002` and `graph-examprep-verticalsaving-001` explicitly say
  "continuing the same economy" / "continuing the previous question" in their
  stems; this audit confirms each one restates every number actually needed to
  answer it, so a student encountering it standalone (e.g., in Shuffle Mixed
  Practice, not sequentially in Midterm Review) isn't stuck.
- **Formula arithmetic**, especially the two multi-step questions
  (`formula-examprep-realrepayment-001`, which chains the Fisher equation with
  compounding, and `formula-examprep-productivitycounterfactual-002`, a
  piecewise dual-rate compound-growth comparison) — these have the most
  opportunities for a subtle computational slip.
- **Graph reasoning** for the vertical saving-supply curve
  (`graph-examprep-verticalsaving-001`) — this is a nonstandard diagram
  pattern (not the usual upward-sloping saving curve), so the "why does r
  still change even though S is vertical" reasoning gets particular scrutiny.

## Fix policy

Fix issues directly in `data/questions.json`, preserving existing question IDs.
If a question cannot be verified confidently after investigation, either
revise it, mark it `needsReview: true` with a documented reason in
`docs/source-notes.md`, or remove it only if it can't be fixed or usefully
flagged (a replacement would only be added back if removing it left a clear,
important coverage gap). This audit will not touch the 271 pre-existing
questions, `src/`, `styles/`, or `scripts/validate-data.mjs` beyond a tiny
shared fix if one turns out to be strictly necessary.

See `docs/update-notes/2026-07-12-midterm-review-quality-audit-results.md` for
the outcome of this audit once complete.
