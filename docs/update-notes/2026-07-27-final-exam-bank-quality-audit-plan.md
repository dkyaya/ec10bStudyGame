# 2026-07-27 Final Exam Question Bank — Quality Audit Plan

## Scope

This audit covers **exactly the 104 questions added in the 2026-07-27 "Final
Exam Question Bank" batch** (see `CHANGELOG.md`'s matching entry and
`docs/update-notes/2026-07-27-final-exam-bank-results.md`). The authoritative
ID list was recovered from the batch's original build script
(`build_questions.py`, preserved in this session's scratchpad) and
cross-checked against `data/questions.json` — all 104 IDs are present with no
mismatches. No older post-midterm question (`class8`/`class9`-only IDs from
the 2026-07-21 batch) is in scope, and none will be modified except for a
tiny, unavoidable shared-rendering fix if one is discovered.

### Exact question IDs in scope (104)

**`aggregate-demand-supply` (24):** `adas-standard-001` through `-009`,
`adas-vocab-001` through `-005`, `adas-formula-001` through `-005`,
`adas-graph-001` through `-005`.

**`inflation-dynamics` (16):** `infldyn-standard-001` through `-009`,
`infldyn-vocab-001` through `-005`, `infldyn-graph-001`, `infldyn-graph-002`.

**`financial-crisis-2008` (26):** `fincrisis-standard-001` through `-013`,
`fincrisis-vocab-001` through `-009`, `fincrisis-formula-001` through `-003`,
`fincrisis-graph-001`.

**`fiscal-policy` add-ons (10):** `fiscal-standard-010` through `-015`,
`fiscal-vocab-006`, `fiscal-vocab-007`, `fiscal-formula-003`,
`fiscal-formula-004`.

**`monetary-policy-postmidterm` add-ons (8):** `monpolicy-standard-009`
through `-011`, `monpolicy-vocab-004`, `monpolicy-vocab-005`,
`monpolicy-formula-008`, `monpolicy-formula-009`, `monpolicy-graph-004`.

**`keynesian-cross-model` add-ons (6):** `keynes-formula-009` through `-013`,
`keynes-graph-003`.

**`unemployment` add-ons (4):** `unemployment-formula-004` through `-007`.

**`business-cycles-output-gaps` add-ons (4):** `cycles-standard-007`,
`cycles-formula-008` through `-010`.

**`money-market` add-ons (6):** `moneymkt-standard-007`, `moneymkt-standard-008`,
`moneymkt-formula-001`, `moneymkt-graph-005` through `-007`.

## Source files used for this audit

Re-extracted/re-consulted directly from `private-materials/` (not committed):
`HarvardS10b_Class10.pptx`, `Final Study Guide and Practice Questions.pdf`,
`Economic Crisis.pdf`, `HaltomUnconventialMP_2012.pdf`,
`MuchAdoAboutMultipliers.pdf`, `RomerGreatDepressionLessons.pdf`,
`RomerHow the Fiscal Stimulus Helped...NYTimes.pdf`,
`ProblemSet4_EconS10b.pdf` — the same extracted text used to author the
batch (preserved from the prior session) was re-read against the *current*
`data/questions.json` text, not against authoring-time notes, per the task's
instruction to recompute/re-verify independently.

## Count of questions in audit scope

**104** (out of 209 total in the bank).

## questionType breakdown in scope

| Type | Count |
|---|---|
| `standard` | 43 |
| `vocab` | 23 |
| `formula` | 25 |
| `graph` | 13 |

## Difficulty breakdown in scope

| Difficulty | Count |
|---|---|
| `easy` | 16 |
| `medium` | 55 |
| `hard` | 33 |

## Topic breakdown in scope

| Topic | In-scope count |
|---|---|
| `financial-crisis-2008` | 26 |
| `aggregate-demand-supply` | 24 |
| `inflation-dynamics` | 16 |
| `fiscal-policy` | 10 |
| `monetary-policy-postmidterm` | 8 |
| `keynesian-cross-model` | 6 |
| `money-market` | 6 |
| `unemployment` | 4 |
| `business-cycles-output-gaps` | 4 |

## Specific checks to perform

1. **Source-fidelity pass** (Part B): for every in-scope question, re-read
   the cited source's actual extracted text and confirm the concept, the
   correct answer, and every distractor's stated mistake are all accurate —
   not just plausible-sounding economics.
2. **Independent formula re-derivation** (Part C): for all 25 formula
   questions, parse the *current* question stem's own numbers and re-derive
   the answer from scratch with a fresh script, then compare to the stored
   `answerIndex` and distractors — not reusing the original authoring
   script's assertions as proof.
3. **Graph/diagram logic and SVG-coordinate check** (Part D): for all 13
   graph questions (3 with an inline SVG), verify curve names/slopes/shift
   directions/equilibrium claims are internally consistent and match the
   cited source's actual mechanism, and recompute the SVG line
   intersections for the 3 diagrammed questions to confirm the picture
   matches the claimed equilibrium points.
4. **Reading-fidelity pass** (Part E): for questions citing
   `haltom_unconventional_mp`, `much_ado_multipliers`,
   `romer_great_depression`, `romer_fiscal_stimulus_nyt`, and
   `financial_crisis_reading`, re-check factual claims and mechanism/
   causal-chain questions against the source text directly.
5. **Study-guide transformation check** (Part F): for all questions citing
   `final_study_guide`, confirm no practice problem/numbers/sentence
   architecture was copied and that the batch's own questions are harder/
   more applied than the guide's practice problems.
6. **Mechanism/policy causal-chain check** (Part G): trace the full shock →
   mechanism → outcome chain for every policy-mechanism question.
7. **Difficulty/hard-but-fair audit** (Part H): re-justify every `hard`
   label against the rubric; check for ambiguous wording or two-defensible-
   answers risk.
8. **questionType audit** (Part I): confirm every `standard`/`vocab`/
   `formula`/`graph` label matches the task actually being tested.
9. **Coverage/duplication audit** (Part J): re-run duplicate/near-duplicate/
   shared-phrase scans limited to the 104-question scope, and check for
   over-concentration on a single source/term/formula within topics.

## High-risk areas (flagged for extra scrutiny)

- **Formula arithmetic** — all 25 formula questions get independently
  recomputed from their stored stem text.
- **Formula sign conventions** — especially the MPRF (`r = r* + g(pi-pi*)`)
  and the SRAS equation (`Y = h(P - P^e) + Y_full`), where a sign flip is
  easy to introduce silently.
- **Okun's Law sign convention** — this batch's three new Okun's Law
  questions use `(Y* - Y)/Y* = 2(u - u*)` (the final study guide's own
  form), which is the *algebraic mirror* of the existing `class8`-based
  bank's `(Y - Y*)/Y* = -2(u - u*)` form — both correct, but worth
  re-confirming the new batch is internally consistent with itself.
- **Fisher equation / real vs. nominal rate interpretation** — `r = i - pi`
  appears in `monpolicy-formula-008`/`009`; confirm the direction of the
  substitution and that "real" vs. "nominal" is never swapped.
- **AD-AS graph logic** — curve identity (AD vs. AS), shift direction, and
  short-run vs. long-run equilibrium claims across all `aggregate-demand-
  supply` graph/standard questions.
- **Inflation-shock and disinflation graph logic** — specifically
  `adas-graph-002` (inflation shock) and `infldyn-graph-001` (Volcker
  disinflation), where AS-shifts-left-from-a-cost-shock and AD-shifts-left-
  from-tightening must not be confused with each other.
- **Money-market graph logic** — `moneymkt-graph-005/006/007` (OMO purchase,
  price-level shock, OMO sale) — confirm MS vs. MD shift assignment and
  interest-rate direction in each.
- **Fiscal multiplier interpretation** — crowding out vs. crowding in vs.
  Ricardian-equivalence-style concerns must stay distinct in
  `fiscal-standard-012/013` and `fiscal-vocab-007`.
- **Policy lags and central-bank credibility** — inside vs. outside lag
  direction (`infldyn-standard-006`, `infldyn-vocab-003`) and the
  credibility → anchored-expectations → smaller-required-response chain
  (`infldyn-standard-004`).
- **Great Inflation / Volcker / Great Moderation mechanisms** — confirm
  these three distinct historical episodes are not conflated with each
  other across `infldyn-standard-001/002/003` and `infldyn-graph-001/002`.
- **Financial-crisis reading fidelity** — leverage/balance-sheet mechanics,
  tranche seniority direction, and the too-big-to-fail/CDS mechanism in the
  `financial-crisis-2008` topic's 26 questions.
- **Reading-question factual accuracy** — spot-check every reading-sourced
  vocab/standard question's claim against the actual extracted text.
- **Hard-but-fair ambiguity** — re-review all 33 `hard`-labeled in-scope
  questions for vague wording or a second defensible choice.
- **Final study guide copying or near-copying** — re-diff every
  `final_study_guide`-citing question against the guide's 10 practice
  problems' actual wording and numbers.
- **Problem-set-without-solutions verification** — all `problemset4`-
  grounded formula/graph questions (`keynes-formula-009` through `-013`,
  `keynes-graph-003`, `unemployment-formula-004/006`,
  `cycles-formula-008/009`, `moneymkt-graph-005/007`) get independently
  recomputed, since no answer key exists to cross-check against.

## Fix policy

Fix issues directly in `data/questions.json` where a confident correction is
possible. Where a question cannot be confidently verified after re-checking
the source, either revise it, remove it (only if unfixable), or mark
`needsReview: true` with a documented reason in `docs/source-notes.md`, per
the task's fix policy. The final question count should stay at or near 209
unless a clear reason exists to remove a question outright.
