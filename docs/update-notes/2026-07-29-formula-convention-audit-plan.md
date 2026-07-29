# 2026-07-29 Formula Convention Audit — Plan

## Trigger

The user found an Okun's Law question where an explanation stated the
output-gap formula as `(Y* - Y)/Y*`, while the course slides apparently use
`(Y - Y*)/Y*`. Since a sign flip changes whether a recessionary gap reads as
positive or negative, this audit checks **every formula in the active
question bank against the exact formula convention in its cited course
source** — not just whether each question's own arithmetic is internally
consistent, since a question can be self-consistent and still use the wrong
convention for the course.

## Scope

**Primary scope:** all 52 questions with `questionType: "formula"`.

**Secondary scope:** any `standard`, `graph`, or `vocab` question whose text
states or implies a formula/equation/quantitative identity. A keyword sweep
over all 157 non-formula questions, narrowed to actual equation-like
patterns (parenthesized `Y*`/`u`/`i`/`π` differences, `1/(1-...)` forms, `r =
i - π`, explicit formula names), found **18 in-scope secondary
candidates**:

`cycles-vocab-002`, `cycles-standard-001`, `cycles-standard-005`,
`keynes-vocab-001`, `keynes-vocab-003`, `keynes-standard-002`,
`keynes-standard-003`, `keynes-standard-005`, `keynes-graph-002`,
`fiscal-vocab-003`, `fiscal-standard-001`, `monpolicy-vocab-001`,
`monpolicy-vocab-002`, `monpolicy-standard-001`, `monpolicy-graph-001`,
`monpolicy-graph-002`, `adas-vocab-002`, `keynes-graph-003`.

## Active sources checked for formula content

Extracted with `python-pptx`/`pypdf` (private-materials, not committed) and
grepped for every formula/equation keyword in the task brief (Okun, output
gap, multiplier, Fisher, money multiplier, Keynesian cross, MPRF, Taylor
rule, growth rate, leverage, etc.):

| Source ID | File | Formula content found |
|---|---|---|
| `class8` | `HarvardS10b_Class8.pptx` | Unemployment rate, participation rate, labor force; output gap; Okun's Law; PAE; consumption function; multiplier; crude fiscal multiplier; net tax; deficit |
| `class9` | `HarvardS10b_Class9_Preliminary.pdf` | `r = i - π`; MPRF `r = r* + g(π-π*)`; Taylor rule `r = r* + 0.5(π-π*) - 0.5[(Y*-Y)/Y*]` |
| `class10` | `HarvardS10b_Class10.pptx` | MPRF (identical to class9); SRAS `Y = h(P-P^e) + Y_full`; output-gap/inflation-direction table |
| `final_study_guide` | `Final Study Guide and Practice Questions.pdf` | Okun's Law `(Y*-Y)/Y* = 2(u-u*)` (own worked solution); leverage ratio `= liabilities/equity`; various worked practice problems |
| `problemset4` | `ProblemSet4_EconS10b.pdf` | Okun's Law table (no formula/solutions given); Keynesian-cross scenarios; MPRF exercise; no explicit formula for money multiplier, growth rates, or tax multiplier |

No active source states a money-multiplier/reserve-ratio formula, a rule-of-
70/72 growth formula, a CPI-index formula, or a named "tax multiplier"
formula — confirmed by keyword search across all five extracted texts.

## Formula inventory table

| Formula | Course-source version | Source ID | Location | Sign convention | Denominator | Variables | Units | Ambiguity |
|---|---|---|---|---|---|---|---|---|
| Output gap | `(Y-Y*)/Y* x 100` | `class8` | Slide 25 | Negative = recessionary (`Y*>Y`); positive = expansionary (`Y*<Y`) | `Y*` (potential output) | `Y`=actual output, `Y*`=potential output | Percent (x100 applied) | None within class8/class10 |
| Okun's Law | `output gap = -2 x (u - u*)`, i.e. `(Y-Y*)/Y* = -2(u-u*)` | `class8` | Slide 29 | Matches output-gap sign above | Same as output gap | `u`=actual unemployment rate, `u*`=natural rate | Decimal or percent (consistent within a calc) | **Yes — see below** |
| Okun's Law (alt. phrasing) | `(Y*-Y)/Y* = 2(u-u*)` | `final_study_guide` | Practice problem 1b, worked solution | Positive = recessionary (opposite labeling, same underlying relationship) | Same, algebraically equivalent | Same | Decimal | Algebraically identical to class8's form; flagged as the audit's core finding |
| Taylor rule | `r = r* + 0.5(π-π*) - 0.5[(Y*-Y)/Y*]` | `class9` | Page 27 | `(Y*-Y)/Y*` with a **leading minus** — equivalent to `+(Y-Y*)/Y*` | `Y*` | `r*`=target real rate, `π`=actual inflation, `π*`=target inflation | Percent (x100 on the bracket term) | Different-looking from class8's output gap but not contradictory — see source-notes.md |
| MPRF | `r = r* + g(π - π*)` | `class9`, `class10` | class9 p.27; class10 slide 8 | N/A (no subtraction ordering issue) | N/A | `g`=responsiveness coefficient | Decimal for π terms | None — identical across both sources |
| Fisher / real interest rate | `r = i - π` | `class9` | Page 19 | N/A | N/A | `i`=nominal rate, `π`=inflation | Decimal or percent (consistent) | None |
| SRAS | `Y = h(P - P^e) + Y_full` | `class10` | Slide 16 notes | N/A | N/A | `h`=slope coefficient, `P^e`=expected price level | Index points | None |
| PAE | `PAE = C + IP + G + NX` | `class8` | Slides 34-35, 38 | N/A | N/A | Standard | Dollars | None |
| Consumption function | `C = C0 + mpc(Y - T)` | `class8` | Slide 36 | N/A | N/A | `C0`=autonomous consumption, `T`=net tax | Dollars, mpc decimal (0-1) | None |
| Income-expenditure multiplier | `1/(1-mpc)` | `class8` | Slide 44 | N/A | `(1-mpc)` | N/A | Decimal mpc | None |
| Crude fiscal multiplier | `1/s` (s = saving fraction) | `class8` | Slide 45 | N/A | `s` | N/A | Decimal | None |
| Net tax | `T = total taxes - transfers - interest payments` | `class8` | Slide 48 | N/A | N/A | N/A | Dollars | None |
| Deficit | `deficit = G - T` | `class8` | Slide 50 | N/A | N/A | N/A | Dollars | None |
| Leverage ratio | `liabilities / equity` | `final_study_guide` | Page 8 worked solution | N/A | `equity` | `equity = assets - liabilities` | Ratio (unitless) | None — confirmed against `financial_crisis_reading`'s balance-sheet discussion |
| Tax multiplier | Not explicitly named in any active source | — | — | — | — | — | — | Derived (not quoted) from class8's PAE/consumption-function primitives in `keynes-formula-011` |
| Money multiplier / reserve ratio | Not present in any active source | — | — | — | — | — | — | N/A — no question in the bank claims this formula |
| Growth rate / Rule of 70/72 | Not present in any active source | — | — | — | — | — | — | N/A |

## Special focus: Okun's Law / output gap

Confirmed via slide-by-slide extraction:

- Class 8 slide 25: `Output gap = [(Y – Y*)/Y*]x100`; "Recessionary gap is a
  negative output gap; Y* > Y"; "Expansionary gap is a positive output gap;
  Y* < Y."
- Class 8 slide 29: "According to Okun's Law: Output gap = -2 x (u – u*)."
- Class 10 slide 15: "Expansionary gap: Y > Y* -> inflation increases";
  "Recessionary gap: Y < Y* -> inflation decreases" — consistent with the
  class8 sign convention.
- `final_study_guide` practice problem 1b's own worked solution: "Okun's
  law: (Y*-Y)/Y* = 2(u – u*)" — algebraically the same relationship, sign-
  flipped presentation.
- `class9` page 27's Taylor rule: `(Y*-Y)/Y*` with a leading minus sign — a
  different named formula (not "the output gap" itself), algebraically
  equivalent to the class8 convention.

All ten `cycles-formula-*` questions plus `cycles-vocab-002`,
`cycles-standard-001`, and `cycles-standard-005` were checked against this.
See the results note for what was found and fixed.

## Plan

1. Audit all 52 formula questions' formula text, sign convention,
   denominator, variable definitions, and units against their cited
   source(s) — not just their own internal arithmetic.
2. Give the Okun's-Law/output-gap cluster (`cycles-formula-001` through
   `-010`, plus the 3 secondary vocab/standard questions above) a dedicated
   pass, per the task's specific concern.
3. Recompute every correct answer and every distractor after any convention
   fix, independently in Python, not by re-trusting the original text.
4. Fix explanation quality issues found along the way (vague wording,
   internally-inconsistent shown work) even where they aren't a convention
   issue per se.
5. Document the standing Okun's-Law/Taylor-rule convention note in
   `docs/source-notes.md`, add a durable authoring rule to
   `docs/question-authoring-guide.md`, and add a formula-convention check to
   `docs/qa-checklist.md`.
6. Run `node scripts/validate-data.mjs` and manual checks; playtest the app.
7. Write the results note, update `CHANGELOG.md`, and commit.
