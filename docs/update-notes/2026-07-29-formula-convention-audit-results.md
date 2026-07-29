# 2026-07-29 Formula Convention Audit — Results

## Summary

A focused audit compared every formula in the active question bank against
the exact formula conventions stated in the course's own sources —
not just whether each question's own arithmetic was internally
consistent — per the task that triggered this audit (the user found an
Okun's Law explanation using `(Y* - Y)/Y*` where the course slides use
`(Y - Y*)/Y*`). All **52 formula questions** and **18 secondary
formula-bearing non-formula questions** were audited. The audit confirmed
the user's concern: a cluster of three Okun's-Law questions
(`cycles-formula-008/009/010`) used a different sign convention than the
rest of their own topic. All three were fixed. Four additional
explanation-quality bugs (unrelated to sign convention, but caught by the
same "recompute every distractor's derivation" pass) were also fixed. No
question was added or removed; the bank remains at **209 total questions**,
**52 formula questions**, **0 `needsReview`**.

## Formula questions audited

**52 / 52** — the full active formula question bank, independently
recomputed in Python from each question's *current* stored text (not the
original authoring notes), checking the formula's exact text against its
cited source, the correct answer, and every distractor's claimed
derivation.

### questionType/topic breakdown

| Topic | Formula questions |
|---|---|
| `unemployment` | 7 |
| `business-cycles-output-gaps` | 10 |
| `keynesian-cross-model` | 13 |
| `fiscal-policy` | 4 |
| `monetary-policy-postmidterm` | 9 |
| `aggregate-demand-supply` | 5 |
| `financial-crisis-2008` | 3 |
| `money-market` | 1 |

## Non-formula formula-bearing questions audited

**18** secondary-scope questions (`standard`/`graph`/`vocab` questions
whose text states or implies a formula), identified via a keyword sweep
narrowed to actual equation-like patterns: `cycles-vocab-002`,
`cycles-standard-001`, `cycles-standard-005`, `keynes-vocab-001`,
`keynes-vocab-003`, `keynes-standard-002`, `keynes-standard-003`,
`keynes-standard-005`, `keynes-graph-002`, `fiscal-vocab-003`,
`fiscal-standard-001`, `monpolicy-vocab-001`, `monpolicy-vocab-002`,
`monpolicy-standard-001`, `monpolicy-graph-001`, `monpolicy-graph-002`,
`adas-vocab-002`, `keynes-graph-003`. **All 18 verified correct on first
check** — every formula reference in this set already matched its cited
source's convention (output gap sign, `r = i - π`, MPRF, multiplier
`1/(1-mpc)`, PAE `= C+IP+G+NX`, consumption function, net tax). No changes
needed.

## Source formula inventory summary

Confirmed by direct extraction of `class8`, `class9`, `class10`,
`final_study_guide`, and `problemset4` (see the plan note for the full
table and slide/page citations). Highlights: Class 8's output gap
`(Y-Y*)/Y* x 100` (negative = recessionary); Class 8's Okun's Law
`output gap = -2 x (u-u*)`; Class 9's Fisher equation `r = i - π`; the MPRF
`r = r* + g(π-π*)` (identical in Class 9 and Class 10); Class 9's Taylor
rule `r = r* + 0.5(π-π*) - 0.5[(Y*-Y)/Y*]`; Class 10's SRAS
`Y = h(P-P^e) + Y_full`; Class 8's multiplier `1/(1-mpc)`, PAE
`= C+IP+G+NX`, consumption function `C = C0+mpc(Y-T)`, net tax, and
deficit `= G-T`; and the final study guide's leverage ratio
`= liabilities/equity`. No active source states a money-multiplier/
reserve-ratio formula, a rule-of-70/72 growth formula, or a named tax-
multiplier formula.

## Formula-convention issues found

**One convention bug, affecting 3 questions.** `cycles-formula-008`,
`cycles-formula-009`, and `cycles-formula-010` stated Okun's Law as
`(Y* - Y)/Y* = 2(u - u*)` — copied from the final study guide's own worked-
solution phrasing — while the rest of the same topic (`cycles-formula-001`
through `-007`, plus `cycles-vocab-002`, `cycles-standard-001`, and
`cycles-standard-005`) used Class 8's `(Y-Y*)/Y* = -2(u-u*)` form. Both
forms are algebraically identical (multiply both sides by -1), so each
question's own arithmetic was internally self-consistent — exactly the
trap the task warned about: internal consistency is not the same as
correct course convention. This is very likely the exact issue the user
originally flagged.

## Okun's Law / output-gap issues found

Covered above — the entire finding was Okun's-Law/output-gap-related. See
`docs/source-notes.md`'s new standing note ("Okun's Law / output gap sign
convention") for the full resolution and reasoning, including why Class 9's
Taylor rule (`monpolicy-formula-005/006/007`, using `(Y*-Y)/Y*` with a
leading minus sign) is a *separate, correctly-sourced* case and was left
unchanged — it precisely quotes its own cited source (Class 9) and is
algebraically equivalent to, not in conflict with, Class 8's output-gap
convention.

## Fixes made

- **`cycles-formula-008`, `-009`, `-010`**: rewrote the stated formula from
  `(Y*-Y)/Y* = 2(u-u*)` to `(Y-Y*)/Y* = -2(u-u*)`, matching Class 8 and the
  rest of the topic. Recomputed and rewrote `correctExplanation` and every
  `wrongExplanations` entry to show the new sign-consistent derivation and
  explicitly state the resulting gap's sign and meaning (negative =
  recessionary). The underlying numeric answers were unchanged (both forms
  are algebraically identical) — `11,520`, `6.0%`, and `4,800` remain
  correct. `cycles-formula-010`'s demonstrated "student's wrong work" was
  rewritten to the new sign convention while preserving the exact same
  pedagogical error (missing Okun's Law's factor of 2) and the same
  right/wrong numbers (4,800 correct vs. 4,900 the shown mistake).
  `sourceIds` updated: `cycles-formula-008`/`-009` now cite `class8`
  alongside `problemset4`; `cycles-formula-010` now cites `class8`
  alongside `final_study_guide`.
- **`keynes-formula-011`**: the `$320 million` distractor's explanation
  contained a factually wrong claim ("the tax multiplier (-3) is larger in
  magnitude than the spending multiplier (4)" — 3 is smaller than 4, not
  larger) and garbled sentence structure. Rewrote with the correct
  magnitude comparison and a clean derivation (`320/3 = 106.7`). Also added
  a one-line derivation of the tax multiplier `-mpc/(1-mpc)` from Class 8's
  own PAE/consumption-function primitives in `correctExplanation`, since no
  active source names "the tax multiplier" as a standalone formula.
- **`keynes-formula-013`**: the `-0.83%` distractor's shown intermediate
  algebra (`2,350 - 5,600 = -6000r`) didn't actually equal the stated
  result (`-3,250 ≠ -50`) even though the final numeric answer given was
  correct. Rewrote the shown work as `8,000 - 2,350 - 5,600 = -6000r`,
  which correctly evaluates to `50 = -6000r`.
- **`adas-formula-002`**: three distractor explanations (`7%`, `5%`, `11%`)
  used vague language ("or a similar arithmetic slip") or described a
  mistake that didn't actually produce the stated number (the `5%`
  explanation's described mechanism evaluates to `6%`, not `5%`).
  Independently found and verified the exact mistake each distractor
  requires: `7%` from using `r*` as the rearrangement's base instead of
  `π*`; `5%` from computing `π* + g×r` instead of `π* + (r-r*)/g`; `11%`
  from dividing `r` itself by `g` instead of the gap `(r-r*)`. Rewrote all
  three explanations with these exact, verified derivations.

## Arithmetic fixes

None of the fixes changed a correct answer or a distractor's numeric
value — every fix was to the stated formula, the shown derivation steps,
or an explanation's wording. All fixes were independently re-verified in
Python after editing (see "Distractor fixes" below).

## Distractor fixes

Covered above (`keynes-formula-011`, `keynes-formula-013`,
`adas-formula-002`, and the three `cycles-formula-*` rewrites). Every
edited distractor's new explanation was independently recomputed in Python
and confirmed to produce the exact displayed number:

```
008 correct Y: 11520.0   / dist 12480, 10800, 11760 all confirmed
009 correct u: 0.06      / dist 0.075 confirmed
010 correct Y: 4800.0    / student's shown wrong Y: 4900.0 confirmed
002 (adas) correct pi: 0.09 / dist 0.07, 0.05, 0.11 all confirmed
013 (keynes) dist -0.83%: 8000-2350-5600 = 50 -> r = -0.008333... confirmed
```

## Explanation fixes

Covered above — 4 questions (`keynes-formula-011`, `keynes-formula-013`,
`adas-formula-002`, plus the 3 `cycles-formula-*` rewrites already counted
under formula-convention fixes) had explanation text rewritten for
precision, correctness, or sign-convention clarity. All `correctExplanation`
entries continue to show the formula, substitution, result, and
interpretation; all `wrongExplanations` entries now name a specific,
independently-verified mistake.

## Questions added/removed

**None.** All fixes were made in place. The bank remains at exactly 209
questions.

## Questions marked `needsReview`

**None.** No genuine source ambiguity was found that couldn't be resolved
by aligning to the most direct/primary cited source (Class 8 for the
output-gap/Okun's-Law convention) — the study guide's differently-signed
phrasing is algebraically identical, not a factual disagreement, so no
question required flagging rather than fixing.

## Final counts

- Final total question count: **209**
- Final formula question count: **52**
- Final `needsReview` count: **0**
- Final vocab count: **49**
- Final graph count: **24** (12 with an inline diagram)
- Final standard count: **84**
- Final topic count: **9**
- Final source count: **10**

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

Additional manual checks (all passed): no duplicate IDs; no invalid
topic/source ID references; no stale pre-midterm topic/source IDs; no
`answerIndex`/explanation mismatches; no malformed diagrams; no unsupported
`questionType` values; no Midterm Review references anywhere in the app or
data; no raw `private-materials/` files staged for commit.

## QA / playtest result

Verified in a locally-served copy of the app (Chrome, via `python3 -m
http.server`): app loads with zero console errors (only the expected
`[Econ 10b question bank validation] 209 questions passed all checks (49
vocab)` info log, repeated identically across every page load/reload); no
Midterm Review card or reference appears anywhere. Formula Practice (52
questions) works; the specific corrected Okun's-Law questions
(`cycles-formula-008` "Thistledown" and `cycles-formula-009` "Pemberly")
rendered with the new `(Y-Y*)/Y* = -2(u-u*)` convention, graded correctly
after answer-choice shuffling, and displayed explanations matching the
shuffled choice positions. `keynes-formula-011` ("Draymoor") rendered with
the corrected `$320 million` distractor explanation and graded correctly.
`adas-formula-002` rendered with the corrected distractor set. A
non-Okun's-Law formula question (`monpolicy-formula-003`) was also spot-
checked end to end and graded correctly with matching explanations.
Vocabulary mode, Graph Practice (including an inline SVG diagram),
Shuffle Mixed Practice, and topic-level progress tracking all confirmed
working. Reset Progress confirmed working (cleared `questionStats` back to
`{}` while preserving the `econ10bStudyGame:v1` schema key; UI correctly
showed 0 attempted / 209 New-Unseen after reload). The app remains fully
static — no build step, no backend, GitHub Pages-compatible.
