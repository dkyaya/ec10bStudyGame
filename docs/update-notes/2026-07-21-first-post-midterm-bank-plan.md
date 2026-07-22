# 2026-07-21 First Post-Midterm Question Bank — Plan

## Context

The 2026-07-21 empty-bank reset (see
`2026-07-21-post-midterm-empty-reset-plan.md`) wiped the old 377-question
pre-midterm/midterm bank and left `data/questions.json` / `data/topics.json`
/ `data/sources.json` all at `[]`, waiting for new Canvas materials. This
plan covers the first batch generated now that new materials are present.

## Part A — Files found in `private-materials/`

All 17 non-`.DS_Store`/non-`README.local.md` files present, with modified
times:

| File | Modified | Status |
|---|---|---|
| `HarvardS10b_Class1.pptx` | 2026-07-06 | Old — already used (source `class1`, wiped) |
| `HarvardS10b_Class2.pptx` | 2026-07-06 | Old — already used (source `class2`, wiped) |
| `HarvardS10b_Class3.pptx` | 2026-07-06 | Old — already used (source `class3`, wiped) |
| `HarvardS10b_Class4.pptx` | 2026-07-06 | Old — already used (source `class4`, wiped) |
| `DS1_solutions.pdf` | 2026-07-06 | Old — already used (source `ds1`, wiped) |
| `Problem Set1_Solutions.pdf` | 2026-07-06 | Old — already used (source `ps1_solutions`, wiped) |
| `DS2_solutions.pdf` | 2026-07-06 | Old — already used (source `ds2`, wiped) |
| `HarvardS10b_Class5.pptx` | 2026-07-07 | Old — already used (source `class5`, wiped) |
| `HarvardS10b_Class6_7.pptx` | 2026-07-10 | Old — already used (source `class6`, wiped) |
| `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | 2026-07-10 | Old — already used (source `guest_lecture_ecb`, wiped) |
| `DS3.pdf` / `DS3_solutions.pdf` | 2026-07-10 | Old — already used (source `ds3`, wiped) |
| `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | 2026-07-10 | Old — already used (source `quiz2`, wiped) |
| `MidtermStudyMaterials_Summer2026.doc` | 2026-07-12 | Old — already used (source `midterm_review`, wiped) |
| `Economic Crisis.pdf` | 2026-07-14 | Old — already used (source `financial_crisis_2008`, wiped) |
| **`HarvardS10b_Class8.pptx`** | **2026-07-21 20:54** | **New — selected as active post-midterm source `class8`** |
| **`HarvardS10b_Class9_Preliminary.pdf`** | **2026-07-21 20:54** | **New — selected as active post-midterm source `class9`** |

Decision method: every file except the last two was already recorded, by
filename, as a used source in the pre-reset `data/sources.json` (recovered
from git history at commit `dfa609b^`). Their filesystem modified times
(2026-07-06 through 2026-07-14) all predate the 2026-07-21 17:14 reset
commit, confirming they were untouched since the old bank was built from
them — none is part of the new unit. `HarvardS10b_Class8.pptx` and
`HarvardS10b_Class9_Preliminary.pdf` are the only files with a modified
time *after* the reset (same day, 20:54), and their content (verified by
extraction below) is a direct continuation of the course numbering (Class
8, Class 9) covering topics never taught pre-midterm (unemployment,
business cycles, the Keynesian model, fiscal policy, the Fed, and monetary
policy) — confirming they are the newly uploaded post-midterm unit. No
ambiguous file required guessing: the modified-time boundary and the
content both point the same direction.

## Selected active post-midterm sources

| Proposed ID | Filename | Title | Type |
|---|---|---|---|
| `class8` | `HarvardS10b_Class8.pptx` | Class 8: Unemployment, Recessions, the Keynesian Model, and Fiscal Policy | lecture-slides |
| `class9` | `HarvardS10b_Class9_Preliminary.pdf` | Class 9: Central Banks, the Federal Reserve, and Monetary Policy | lecture-slides |

## Excluded (old pre-midterm/midterm) sources

All 14 files listed above with a pre-2026-07-21 modified time. None is part
of the new post-midterm unit and none is reused as a source for any new
question, per the user's explicit instruction. `docs/source-notes.md`
already documents them under its "no longer active" section from the
reset; this batch does not reactivate them.

## Rough topic coverage per source

**`class8` (56 slides, all bullet text + speaker notes extracted cleanly
via `python-pptx`):**
- Unemployment measurement: labor force, unemployment rate, participation
  rate (BLS definitions), plus three years of real BLS employment-status
  data tables (June 2026 / June 2020 / June 2019).
- Costs of unemployment (economic, psychological, social) and duration
  (unemployment spell, long-term unemployment).
- Types of unemployment: frictional, cyclical, structural; a minimum-wage
  labor-market diagram illustrating structural unemployment from a wage
  floor.
- Business cycles: recession/expansion/depression definitions.
- Potential vs. actual output (`Y*`), the output gap formula
  `(Y - Y*)/Y* x 100`, recessionary vs. expansionary gaps.
- Natural rate of unemployment (`u*`), cyclical unemployment (`u - u*`),
  and Okun's Law (`output gap = -2 x (u - u*)`) with a real four-year data
  table (1995/2000/2005/2010).
- Sticky-price rationale for why output gaps persist in the short run.
- The Keynesian model: PAE components (`C + IP + G + NX`), the consumption
  function (`C = C0 + mpc(Y - T)`), a fully worked short-run-equilibrium
  numeric example (`Y = PAE`), the Keynesian-cross graph, the
  income-expenditure multiplier (`1/(1-mpc)`), and a narrative "crude
  fiscal multiplier" example.
- Fiscal policy: stabilization-policy definitions (expansionary/
  contractionary, monetary vs. fiscal), taxes/transfers and disposable
  income, supply-side effects on potential output, deficit spending and
  its tradeoffs, flexibility limits (legislative lag, political
  constraints), automatic stabilizers, and the real 2008-09
  Economic Stimulus Act / ARRA history.

Mixed theory + formula-heavy (output gap, Okun's Law, consumption function,
multiplier are all directly quantitative; unemployment types, business
cycles, and fiscal-policy tradeoffs are conceptual). Strong graph potential
(minimum-wage labor market floor; Keynesian cross).

**`class9` (46-page PDF export; `pdftotext -layout`; roughly half the deck
is diagram/photo-only with little or no extractable text — see Extraction
issues below):**
- The Federal Reserve: structure (12 districts, Board of Governors, FOMC),
  founding/objective, responsibilities.
- Money supply and the Fed's tools: open-market operations (buy → MS up;
  sell → MS down), discount window lending, the reserve requirement,
  interest on reserves, quantitative easing (as an asset-purchase tool).
- Money demand: opportunity cost of holding money, determinants (income,
  price level, technology), the downward-sloping money demand curve and its
  shifters.
- Equilibrium in the money market: disequilibrium adjustment via bond
  prices (bond prices inversely related to interest rates), the vertical
  money-supply curve, and how the Fed shifts `MS` to hit a target `i`.
- The federal funds rate: definition, how OMOs move it, its role as a
  benchmark/target rate.
- Real vs. nominal interest rate control: `r = i - π`, and why the Fed has
  more control over `r` in the short run (inflation moves slowly).
- Monetary policy transmission: a fully worked Keynesian numeric example
  with `r` in the consumption/investment functions
  (`C = 1000 + 0.75(Y-T) - 500r`, `IP = 300 - 600r`,
  `PAE = 1470 - 1100r + 0.75Y`), plus three additional channels (bank
  lending, asset price, exchange rate).
- Inflation and the stock market (anticipated Fed tightening lowers equity
  prices).
- Policy reaction functions: the general form
  `r = r* + g(π - π*)` and the Taylor rule
  `r = r* + 0.5(π-π*) - 0.5[(Y*-Y)/Y*]`.
- The 2008-09 financial crisis policy response: TARP (a fiscal/Treasury
  action, included here only as the narrative bridge to "what could the
  Fed still do"), the fed funds rate falling near zero, and unconventional
  monetary policy (quantitative easing to narrow "risk" and "maturity"
  spreads, expanded discount lending) — the zero lower bound problem.

Primarily theory/mechanism-heavy with two genuinely formula-driven pockets
(the `r = i - π` / policy-reaction-function slides, and the worked
Keynesian-`r` numeric example). Strong graph potential (money supply/demand
shift diagrams; the Fed-controls-`i`-via-`MS`-shift diagram).

## Extraction issues

- **`class9`'s agenda lists "1. Fiscal policy" as its first topic, but no
  slide in the deck has any extractable fiscal-policy text** — the
  agenda-adjacent pages between the title slide and "The Federal Reserve"
  section contain no bullet content (confirmed by a per-page text-line
  count: pages 1-2 are the title/agenda, page 3 begins "The Federal
  Reserve" directly, with no intervening fiscal-policy page). This is
  consistent with the file's own `_Preliminary` filename — the deck is a
  work-in-progress continuation of `class8`, which already teaches fiscal
  policy in full (stabilization policy, taxes/transfers, supply-side
  effects, deficits, automatic stabilizers, the 2008-09 stimulus acts).
  **Decision: no fiscal-policy question is grounded in `class9`; all
  fiscal-policy questions cite `class8` only, which does carry that
  content.**
- **`class9` is roughly half diagram/photo-only slides with little or no
  extractable text** (a per-page line-count check found 15 of 46 pages
  with 0-2 lines of text): the `MS`/`MD` shift diagrams (axis labels only,
  e.g. "Nominal interest rate (i)" / "Money (M)"), the bond-price/
  interest-rate summary tables (these *did* extract as clean text and were
  used), a Fed-leaders composite photo, an FOMC-minutes screenshot, an
  "Expanding the Fed's Balance Sheet" chart, and a Covid-19 policy-response
  chart. None of these image-only slides was used as the source of any
  factual claim; every graph/diagram question below is grounded in the
  deck's own surrounding bullet text (e.g., "Supply of money is vertical,"
  "Fed increases the money supply to MS' ... interest rates decrease to
  i'"), not in reading unreadable chart pixels, per the no-image-guessing
  rule.
- **`class8` slides 6-8's real BLS data tables** (June 2026/2020/2019
  employment figures) extracted as clean text and are accurate enough to
  ground a direct unemployment-rate/participation-rate calculation
  question — but per the no-verbatim/no-mad-libs rule, formula questions
  use fresh invented figures rather than these exact real-world numbers.
- **`class8` slides 3-4, 10, 12-13, 17-19, 21-23, 30, 32, 40, 46, 54** are
  photo/diagram-only title cards or chart images (crisis-timeline photos,
  a generic business-cycle wave graphic, a FRED output-gap/NROU chart, a
  Keynesian-cross plot with no extractable axis data beyond what's already
  covered in the adjacent bullet slides, an appendix multiplier slide, and
  a bare "Monetary Policy (Next class)" divider). None was used as a
  standalone source of new content; where a diagram concept (e.g., the
  minimum-wage labor market floor on slide 16, or the Keynesian-cross
  45-degree-line logic on slides 41-42) is also described in bullet text,
  that bullet text is the actual grounding for the corresponding question.
- No content in either file was ambiguous enough to require a
  `needsReview: true` flag in this batch — see `docs/source-notes.md` for
  the full reliability write-up.

## Proposed topics

Six topics, split cleanly along the two decks' natural sections, avoiding
anything narrow enough to only support 1-2 questions:

| Topic ID | Name | Grounded in |
|---|---|---|
| `unemployment` | Unemployment: Measurement, Costs, and Types | `class8` |
| `business-cycles-output-gaps` | Business Cycles, Output Gaps, and Okun's Law | `class8` |
| `keynesian-cross-model` | The Keynesian Cross Model of Short-Run Output | `class8` |
| `fiscal-policy` | Fiscal Policy and Stabilization | `class8` |
| `money-market` | The Fed, Money Supply, and Money Demand | `class9` |
| `monetary-policy-postmidterm` | Monetary Policy Transmission and the Financial Crisis Response | `class9` |

None of the pre-reset topics (e.g., `money-banking`, `loanable-funds`) are
reused — `money-market` and `monetary-policy-postmidterm` are new IDs
scoped specifically to the Class 9 material, not a revival of the old
`money-banking` topic.

## Proposed question counts by topic (target ~100-108 total)

| Topic | standard | vocab | formula | graph | Total |
|---|---|---|---|---|---|
| `unemployment` | 6 | 6 | 3 | 1 | 16 |
| `business-cycles-output-gaps` | 6 | 4 | 7 | 1 | 18 |
| `keynesian-cross-model` | 6 | 4 | 8 | 2 | 20 |
| `fiscal-policy` | 9 | 5 | 2 | 0 | 16 |
| `money-market` | 6 | 4 | 2 | 4 | 16 |
| `monetary-policy-postmidterm` | 8 | 3 | 5 | 3 | 19 |
| **Total** | **41** | **26** | **27** | **11** | **105** |

`fiscal-policy` gets 0 graph questions — the deck's fiscal-policy content
(stabilization policy, taxes/transfers, deficits, automatic stabilizers) is
entirely non-graphical narrative/policy content in this source; forcing a
curve-shift question onto it would violate the type-quota-honesty rule.

## Proposed difficulty mix

Target ~15-20% easy / 45-55% medium / 30-40% hard per the post-midterm
difficulty standard. For 105 questions: **~18 easy (17%), ~55 medium
(52%), ~32 hard (31%)** — final counts confirmed against the actual
authored batch in the matching results note.

## Proposed questionType mix

`standard` 41 / `vocab` 26 / `formula` 27 / `graph` 11 — vocab and formula
both kept expansive (occupying just over half the batch combined) per the
"keep vocab/formula coverage expansive" instruction, while `standard`
carries most of the mechanism/scenario/policy-interpretation reasoning and
`graph` is reserved for the two decks' three genuinely graphical mechanisms
(minimum-wage labor market floor, the Keynesian cross, and the Fed's
money-market `MS` shift).
