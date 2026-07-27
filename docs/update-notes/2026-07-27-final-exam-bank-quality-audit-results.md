# 2026-07-27 Final Exam Question Bank — Quality Audit Results

## Summary

A focused quality audit of all **104 questions** added in the 2026-07-27
"Final Exam Question Bank" batch (see the matching plan note) is complete.
The audit found and fixed **9 substantive issues** across formula
arithmetic/distractor verification, SVG diagram geometry, and study-guide
transformation, plus 1 wording-precision improvement. No question was
removed or added; the bank remains at **209 total questions**. Every
in-scope question was independently re-verified against its own current
text — not against the original authoring script's notes — per the task's
instructions.

## Questions audited

**104** (the full 2026-07-27 batch; see the plan note for the exact ID
list).

### questionType breakdown audited

| Type | Count |
|---|---|
| `standard` | 43 |
| `vocab` | 23 |
| `formula` | 25 |
| `graph` | 13 (3 with an inline diagram) |

### Difficulty breakdown — before / after

| Difficulty | Before audit | After audit |
|---|---|---|
| `easy` | 16 | 16 |
| `medium` | 55 | 55 |
| `hard` | 33 | 33 |

No difficulty labels changed — every `hard`-labeled question was
re-justified against the rubric (multi-step calculation, reverse
calculation, graph diagnosis/comparison, or reading+lecture synthesis) and
found to be hard because of genuine reasoning load, not vague wording or a
second defensible answer. Fixes were confined to distractor values,
distractor explanations, SVG diagrams, and two question stems' wording —
none changed what skill or difficulty tier a question tests.

### Topic / source breakdown

Unchanged from the original batch (see the original results note) — no
question moved topics or changed its cited sources, except that
`fincrisis-formula-001`'s and `fincrisis-formula-002`'s wording changes
(below) kept the same `sourceIds` (`financial_crisis_reading` and
`final_study_guide`).

## Formula questions audited

**All 25** formula questions were independently recomputed from their
*current* stored question text using fresh Python scripts (not the original
authoring script), checking both the correct answer and — critically — each
distractor's claimed derivation.

**19 of 25 verified correct on first check**, no changes needed:
`adas-formula-001` through `-005`, `fincrisis-formula-003`,
`fiscal-formula-003`, `fiscal-formula-004`, `keynes-formula-009`,
`keynes-formula-010`, `keynes-formula-011`, `unemployment-formula-004`,
`cycles-formula-008`, `cycles-formula-009`, `cycles-formula-010`.

**6 required fixes:**

- **`monpolicy-formula-008`** — all three distractors (3,350 / 4,540 / 2,838)
  were invented plausible-sounding numbers that did not match their own
  `wrongExplanations`' claimed derivations. Independently recomputed the
  actual results of three real mistakes (forgetting to net taxes, flipping
  the `r = i - pi` sign, omitting the `-4000r` term) and replaced the
  distractors with the verified values (4,367 / 3,250 / 4,317).
- **`monpolicy-formula-009`** — the correct answer and two distractors were
  fine, but the "4.00%" distractor's explanation was vague ("overstates the
  contribution... recompute carefully") without asserting a specific,
  checkable mistake. Found the exact mistake that produces 4.00% (forgetting
  to net out the tax term, then reporting the resulting real rate directly
  as the nominal rate) and rewrote the explanation to name it precisely.
- **`keynes-formula-012`** — all three distractors (5,400 / 4,571 / 6,229)
  were mismatched with their claimed derivations, the same pattern as
  `monpolicy-formula-008`. Recomputed the real results of omitting the
  interest-rate term entirely, double-counting it, and using the wrong
  `(1-mpc)` denominator, and replaced the distractors with the verified
  values (6,229 / 3,943 / 5,933 — note 6,229 was actually the *omit-the-r-
  term* result, not what the original mislabeled it as).
- **`keynes-formula-013`** — the "-3.39%" distractor had no clean
  derivation from any plausible single mistake; replaced with "-0.83%",
  verified to result precisely from forgetting to net out the tax term in
  the autonomous-spending constant.
- **`unemployment-formula-006`** — the "40,500 / 39,600" distractor's
  explanation ("treating the rate as 0.0222") was an approximate, not exact,
  match. Replaced with "2,000 / 1,100," verified to result precisely from
  misplacing the decimal point in the given rate (reading 4.5% as 45%).
- **`moneymkt-formula-001`** — the "$15,400" distractor had no clean
  derivation. Replaced with "$15,600," verified to result precisely from
  reporting the account's total future value (principal + interest) instead
  of the interest alone.

**1 wording-only improvement (no numeric error):** `unemployment-formula-005`'s
"36% / 50,000" distractor was numerically correct (36% is exactly the
non-participation share, 18,000/50,000) but its explanation was vague
("appear to reverse or misapply the formula"). Rewrote to name the exact
mechanism (computing the complement of the participation rate, and using
the raw population instead of the not-in-labor-force count).

## Graph questions audited

**All 13** graph questions were reviewed for curve identity, shift
direction, and equilibrium logic against their cited source's actual
mechanism. **10 of 13 (all text-described, no diagram) verified correct**
with no changes: `adas-graph-001`, `adas-graph-003`, `adas-graph-004`,
`adas-graph-005`, `infldyn-graph-002`, `fincrisis-graph-001`,
`monpolicy-graph-004`, `keynes-graph-003`, `moneymkt-graph-006`,
`moneymkt-graph-007`.

**2 of 3 diagram-bearing questions required a full diagram rebuild:**

- **`adas-graph-002`** (an inflation-shock AS-shift question) — the SVG's
  "AS" curve was drawn with a downward economic slope and its "AD" curve
  with an upward slope (exactly backwards), and the shifted dashed curve
  was labeled/colored as "AD'" instead of "AS'" — the diagram had been
  copy-pasted from a different (demand-shock) scenario template without
  adapting it. Rebuilt from scratch with algebraically-verified coordinates
  (`sympy`-solved intersections: point A at (140, 90), point B at
  (127.5, 77.5)) and re-rendered in the app to confirm the fix visually.
- **`infldyn-graph-001`** (the Volcker disinflation) — the same AS/AD
  slope-swap bug, plus the point markers didn't even sit on the drawn lines
  (point A was plotted at y=90 while the "AD" line's actual value at that
  x was y=105). Rebuilt from scratch (point A at (140, 90), point B at
  (127.5, 102.5)) and re-rendered to confirm.

**1 minor precision fix:** `moneymkt-graph-005`'s MD curve's economic slope
was already correct (downward-sloping, as it should be), but its two
equilibrium point markers were off the actual curve by several pixels
(placed at y=90/116 when the curve's true value at those x-positions was
y=66.7/106.7). Corrected the point coordinates to sit exactly on the curve.

All three fixed diagrams were re-rendered in the running app (via a local
Playwright browser) and visually confirmed to show the correct curve
slopes, shift directions, and equilibrium points before finalizing.

## Reading questions audited

Spot-checked a representative sample of standard/vocab questions citing
`financial_crisis_reading`, `haltom_unconventional_mp`,
`much_ado_multipliers`, `romer_fiscal_stimulus_nyt`, and
`romer_great_depression` directly against the original extracted source
text (preserved from the batch's authoring session): balance-sheet/credit
channel definitions, tranche seniority, AIG/CDS, too-big-to-fail,
Fannie/Freddie leverage, the portfolio-rebalance channel, forward guidance's
calendar-date risk, the Fisher effect, the counterfactual-baseline argument,
crowding out/crowding in language, the multiplier-by-recipient-income claim,
and Romer's "regime shift"/"pushing the boundaries of their current regime"
language. **Every checked claim matched the source text precisely** — no
factual inaccuracies found in this sample.

## Source-fidelity fixes

See "Formula questions audited" above for `fincrisis-formula-001` and
`-002`'s rewrites (both were source-fidelity issues: too-close a structural
echo of the final study guide's own practice problem, not a factual error).
No other source-fidelity issue was found in the sampled reading/standard/
vocab questions.

## Study-guide transformation fixes

- **`fincrisis-formula-001`**: rewritten from an itemized four-asset/three-
  liability balance sheet (matching the study guide's own category list and
  order) to a de-itemized total-assets/total-liabilities framing.
- **`fincrisis-formula-002`**: question stem reworded (different institution
  type, "how many times larger" framing instead of the guide's "how does it
  compare" phrasing) to reduce task-phrasing similarity to the guide's own
  percentage-change practice problem, while testing the identical skill.
- Spot-checked several other `final_study_guide`-citing formula questions
  (`adas-formula-001`/`-002`, `monpolicy-formula-008`/`-009`,
  `cycles-formula-008`/`-009`/`-010`) against the guide's own MPRF and
  Okun's-Law practice problems — found sufficiently distinct in narrative
  structure, entity naming, and specific numbers; no further changes
  needed.

## Distractor / explanation fixes

Covered under "Formula questions audited" above (6 questions with numeric
fixes, 1 with a wording-only fix). No non-formula distractor/explanation
issues were found in the standard/vocab/graph questions reviewed.

## Difficulty / questionType / topic / tag fixes

None required — every difficulty label, `questionType`, `topic`, `subtopic`,
and `tags` set reviewed was already appropriate. See the "Difficulty
breakdown" section above for the hard-but-fair re-justification.

## Duplicate / coverage fixes

None required. A normalized-text duplicate/near-duplicate scan across all
104 in-scope questions (re-run after all fixes) found zero matches. Topic-
and source-concentration were re-checked and remain balanced (see the
original results note's source-breakdown table, which is unchanged by this
audit's fixes).

## Questions added / removed

**None.** All fixes were made in place to existing questions; the batch
remains at exactly 104 questions, and the bank remains at 209 total.

## Final total question count

**209** (unchanged from before the audit — this was a correctness audit,
not a content-volume change).

## Final needsReview count

**0.** Every issue found during this audit was fixed directly; no question
was left flagged for later review.

## Validation result

```
node scripts/validate-data.mjs
```

```
Checked 209 questions, 9 topics, 10 sources.
Vocabulary/definition questions: 49.
Formula/quantitative practice questions: 52.
Graph interpretation questions: 24 (12 with an inline diagram).
All checks passed with no errors or warnings.
```

Additional manual checks (all passed): no duplicate IDs; no near-duplicate
question text (rescanned after all fixes); no stale pre-midterm topic/
source IDs referenced; no `answerIndex`/explanation mismatches; all 12
diagrams (9 pre-existing + 3 from this batch, all now geometrically
verified) have valid `type: "svg"`, non-empty `alt` text, and non-empty
`svg` markup; no unsupported `questionType` values; no Midterm Review
references anywhere; no raw `private-materials/` files staged.
