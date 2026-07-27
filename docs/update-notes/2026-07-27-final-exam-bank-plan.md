# 2026-07-27 Final Exam Question Bank — Plan

## Context

The final exam is in about one week. The user uploaded a new batch of materials
to `private-materials/` on 2026-07-27: slides for the next lecture (Class 10),
the final exam study outline/practice set, and four side readings from the
latter half of the course. This note documents which files were selected as
active sources for this batch, which were excluded and why, proposed source
IDs/topics/question counts, and known extraction issues — written **before**
any question authoring, per the project's plan-then-build convention.

**This is the first final-exam-prep batch, not the final complete source
set.** The user has stated that one more lecture (after Class 10) is still to
come; its slides had not been uploaded as of this batch. Topic and source
counts below will grow again once that material arrives.

## All files currently in `private-materials/`

| File | mtime | Category |
|---|---|---|
| `HarvardS10b_Class1.pptx` | 2026-07-06 | pre-midterm lecture slides |
| `HarvardS10b_Class2.pptx` | 2026-07-06 | pre-midterm lecture slides |
| `HarvardS10b_Class3.pptx` | 2026-07-06 | pre-midterm lecture slides |
| `HarvardS10b_Class4.pptx` | 2026-07-06 | pre-midterm lecture slides |
| `Problem Set1_Solutions.pdf` | 2026-07-06 | pre-midterm problem-set solutions |
| `DS1_solutions.pdf` | 2026-07-06 | pre-midterm discussion-section solutions |
| `DS2_solutions.pdf` | 2026-07-06 | pre-midterm discussion-section solutions |
| `HarvardS10b_Class5.pptx` | 2026-07-07 | pre-midterm lecture slides |
| `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | 2026-07-10 | pre-midterm-era guest lecture (ECB) |
| `DS3.pdf` | 2026-07-10 | pre-midterm discussion-section problem set |
| `DS3_solutions.pdf` | 2026-07-10 | pre-midterm discussion-section solutions |
| `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | 2026-07-10 | pre-midterm quiz |
| `HarvardS10b_Class6_7.pptx` | 2026-07-10 | pre-midterm lecture slides |
| `MidtermStudyMaterials_Summer2026.doc` | 2026-07-12 | old midterm study guide |
| `Economic Crisis.pdf` | 2026-07-14 | 2008 financial-crisis lecture/reading deck |
| `HarvardS10b_Class8.pptx` | 2026-07-21 | **already active** — post-midterm lecture slides (`class8`) |
| `HarvardS10b_Class9_Preliminary.pdf` | 2026-07-21 | **already active** — post-midterm lecture slides (`class9`) |
| `HarvardS10b_Class10.pptx` | 2026-07-27 | **new** — post-midterm lecture slides |
| `Final Study Guide and Practice Questions.pdf` | 2026-07-27 | **new** — final exam study guide |
| `HaltomUnconventialMP_2012.pdf` | 2026-07-27 | **new** — side reading |
| `MuchAdoAboutMultipliers.pdf` | 2026-07-27 | **new** — side reading |
| `RomerGreatDepressionLessons.pdf` | 2026-07-27 | **new** — side reading |
| `RomerHow the Fiscal Stimulus Helped, and Could Have Done More - NYTimes.com.pdf` | 2026-07-27 | **new** — side reading |
| `ProblemSet4_EconS10b.pdf` | 2026-07-27 | **new** — problem set (no solutions uploaded) |
| `README.local.md`, `.DS_Store` | n/a | not course content |

## Selected active sources for this batch

| Proposed ID | Filename | Type | Theory/formula/graph mix |
|---|---|---|---|
| `class10` | `HarvardS10b_Class10.pptx` | lecture-slides | Mixed: policy mechanism + one formula (MPRF, SRAS) + graph-heavy (AD/AS shifts) |
| `final_study_guide` | `Final Study Guide and Practice Questions.pdf` | study-guide | Mixed — used for coverage mapping only, not copied |
| `financial_crisis_reading` | `Economic Crisis.pdf` | side-reading | Theory-heavy (crisis mechanics), one formula thread (leverage/balance sheets) |
| `haltom_unconventional_mp` | `HaltomUnconventialMP_2012.pdf` | side-reading | Theory-heavy (unconventional monetary policy) |
| `much_ado_multipliers` | `MuchAdoAboutMultipliers.pdf` | side-reading | Theory-heavy (fiscal multiplier debate) |
| `romer_great_depression` | `RomerGreatDepressionLessons.pdf` | side-reading | Theory-heavy (fiscal/monetary/credit policy lessons) |
| `romer_fiscal_stimulus_nyt` | `RomerHow the Fiscal Stimulus Helped...NYTimes.pdf` | side-reading | Theory-heavy (ARRA effectiveness op-ed) |
| `problemset4` | `ProblemSet4_EconS10b.pdf` | problem-set | Formula- and graph-heavy (Okun's Law, Keynesian cross, money market, MPRF, AD-AS, exchange rates) — no solutions were uploaded, so every question built from it uses independently-verified, freshly-invented numbers, never the problem set's own figures |

### Why `Economic Crisis.pdf` is included despite an older upload date

This file's filesystem date (2026-07-14) predates today's final-exam upload
batch, and per the prior 2026-07-21 plan note it was one of the pre-midterm-era
files "already used to build the wiped pre-midterm/midterm bank." Per the
task's own exclusion rule, old pre-midterm sources are only reused "if a
current uploaded final-exam source explicitly reuses that content and it is
clearly still final-exam relevant." That exception applies squarely here: the
newly-uploaded `final_study_guide`'s outline devotes its entire opening
section to "Financial markets, housing, and the sub-prime crisis of 2007-8 …
balance sheet problems and the credit crisis … the role played by
securitization, leverage, etc." — content that is **not** covered by `class8`
or `class9` at all (those decks only cover the crisis's monetary/fiscal
*policy response*, not the crisis mechanics themselves) and has no other
active source. Using `Economic Crisis.pdf` here fills an explicit, otherwise
uncovered study-guide requirement rather than restoring old content for its
own sake. A fresh source ID (`financial_crisis_reading`, not the old wiped
`financial_crisis_2008` ID referenced as a technique example in
`docs/question-authoring-guide.md`) is used to keep this batch's provenance
clean.

## Excluded sources and why

| File | Reason excluded |
|---|---|
| `HarvardS10b_Class1-6_7.pptx` (5 files) | Pre-midterm lecture slides; no final-exam-relevant content beyond what's already assumed-background per the study guide ("comfortable discussing GDP, inflation, savings, investment, capital inflows... from BEFORE the midterm") — not itself a topic to quiz. |
| `Problem Set1_Solutions.pdf`, `DS1_solutions.pdf`, `DS2_solutions.pdf`, `DS3.pdf`, `DS3_solutions.pdf`, `Quiz 2_...pdf` | Pre-midterm discussion-section/problem-set/quiz materials; already used (and wiped) pre-midterm; not cited or required by the final study guide. |
| `MidtermStudyMaterials_Summer2026.doc` | The old midterm study guide — explicitly superseded and out of scope; midterm-specific, not final-exam material. |
| `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | Uploaded 2026-07-10 (pre-midterm-era, previously used and wiped). Excluded on content grounds too: it teaches the ECB's institutional framework and an **endogenous-money** view ("loans create deposits first; banks acquire required reserves later... traditional theory [of reserves constraining lending] is a persistent academic myth") that runs counter to the **exogenous-money / reserves-and-multiplier** model `class9` actually teaches the class (open-market operations, the reserve requirement, the Fed directly setting the money supply). Teaching the competing framework risks contradicting the professor's own tested model. The deck is also dominated by 2026-current-events ECB content (the Digital Euro, the 2026 Middle East war shock, ECB scenario projections) that has no corresponding item anywhere in the final study guide's outline. Not reused. |

## Proposed topics

| Topic ID | Status | Notes |
|---|---|---|
| `unemployment` | existing, reused | `problemset4`'s Okun's-Law table item adds a few fresh questions |
| `business-cycles-output-gaps` | existing, reused | `problemset4`'s Okun's-Law reverse-calc items |
| `keynesian-cross-model` | existing, reused | `problemset4`'s fresh Keynesian-cross scenarios |
| `fiscal-policy` | existing, reused | extended with the fiscal-multiplier-size debate (`much_ado_multipliers`, `romer_fiscal_stimulus_nyt`) |
| `money-market` | existing, reused | `problemset4`'s money-market shift scenarios |
| `monetary-policy-postmidterm` | existing, reused | extended with unconventional monetary policy depth (`haltom_unconventional_mp`) and the exchange-rate channel |
| `aggregate-demand-supply` | **new** | the AD-AS model itself: curve derivations, shocks, short/long-run equilibrium, policy responses (`class10`, `problemset4`) |
| `inflation-dynamics` | **new** | inflation inertia/expectations, the Great Inflation, Volcker, central-bank credibility, the Great Moderation, policy lags (`class10`) |
| `financial-crisis-2008` | **new** | crisis mechanics (securitization, leverage, TARP, too-big-to-fail), unconventional monetary policy at the ZLB, and Great-Depression-vs-2008 policy lessons (`financial_crisis_reading`, `haltom_unconventional_mp`, `romer_great_depression`, `romer_fiscal_stimulus_nyt`) |

No topic is being created for exchange rates/open-economy macro as a
standalone topic yet — `problemset4` only touches it in one item (Q10, value
of the dollar), and the pending final lecture is expected to be the primary
source for that material. The handful of exchange-rate-channel questions this
batch does support are folded into the existing `monetary-policy-postmidterm`
topic (which already documents an "exchange rate channel" in `class9`'s
coverage), not spun into a new topic that a single problem-set item can't
support on its own.

## Extraction issues

- `class10` (56-line-per-slide pptx, extracted via python-pptx): clean bullet
  text and speaker notes throughout; slides 25–28 ("Oil Price Growth and
  Shocks," "The Volcker Recession," two more) and slide 29 ("The Changing
  Volatility of Real GDP") and slide 32 ("Inflation Targeting") are
  chart/photo-only with no extractable body text — their underlying
  narrative (the Great Inflation/Volcker/Great Moderation story) is fully
  covered by the surrounding slides' bullet text (24, 30, 31), so no
  question depends on reading these charts' pixels. No `needsReview` flag
  needed.
- `final_study_guide` (pdftotext -layout): clean extraction throughout,
  including all 10 practice problems and their suggested solutions. Used only
  for coverage mapping and independent-verification cross-checks; no practice
  problem is copied, and every formula question in this batch uses
  independently invented numbers.
- `financial_crisis_reading` (pdftotext -layout): mostly clean bullet-point
  text; the two "Basic Mortgage-Backed Security" and "Collateralized Mortgage
  Obligation" payoff-waterfall bar charts extracted as garbled OCR-like
  fragments (stray characters, no usable axis data) — not used as a source of
  any factual claim; the accompanying bullet text (tranche seniority: D takes
  the biggest hit, A has the most seniority) fully grounds the corresponding
  questions instead.
- `haltom_unconventional_mp` (pdftotext -layout): clean extraction, a
  standard Fed Economic Brief with numbered footnotes; Figure 1 (Fed balance
  sheet growth chart) has no extractable data beyond its axis labels/date
  range, so no question relies on reading that chart.
- `much_ado_multipliers`, `romer_fiscal_stimulus_nyt`: short, clean text
  extractions (Economist/NYT web-page print versions), no extraction issues.
- `romer_great_depression`: long (1219-line) speech transcript, clean
  extraction throughout. Per the "prioritize core arguments over exhaustive
  coverage" rule for long readings, questions focus on the three headline
  policy lessons (fiscal policy "works when tried," monetary policy "takes a
  regime shift," and credit-policy debt-reduction) rather than exhaustively
  covering every historical anecdote in the transcript.
- `problemset4` (pdftotext -layout): clean extraction; three sub-parts
  instruct students to "take a photo of this graph to upload... independently"
  for hand-drawn diagrams, meaning no diagram exists in the extracted text for
  those items — this batch's graph questions describe the relevant AD-AS/
  money-market shift fully in their own stem instead of assuming a specific
  hand-drawn diagram from the source.

No content in this batch required a `needsReview: true` flag; all
diagram-only or chart-only slides/figures were skipped as grounding rather
than guessed at.

## Proposed question counts (target ~104 new, bringing the total to ~209)

| Topic | Planned new questions | Type mix (approx.) |
|---|---|---|
| `aggregate-demand-supply` | 24 | 9 standard, 5 vocab, 5 formula, 5 graph |
| `inflation-dynamics` | 16 | 9 standard, 5 vocab, 0 formula, 2 graph |
| `financial-crisis-2008` | 26 | 13 standard, 9 vocab, 3 formula, 1 graph |
| `fiscal-policy` (add-on) | 10 | 6 standard, 2 vocab, 2 formula |
| `monetary-policy-postmidterm` (add-on) | 8 | 3 standard, 2 vocab, 2 formula, 1 graph |
| `keynesian-cross-model` (add-on) | 6 | 0 standard, 0 vocab, 5 formula, 1 graph |
| `unemployment` (add-on) | 4 | 0 standard, 0 vocab, 4 formula |
| `business-cycles-output-gaps` (add-on) | 4 | 1 standard, 0 vocab, 3 formula |
| `money-market` (add-on) | 6 | 2 standard, 0 vocab, 1 formula, 3 graph |
| **Total** | **~104** | |

## Proposed difficulty mix

Target 15–25% easy, 45–55% medium, 25–35% hard across the new batch, with the
new batch's questions generally harder than the study guide's own practice
problems (multi-step AD-AS reasoning, reverse calculations, error-diagnosis
questions, and cross-source synthesis — e.g., connecting `romer_great_depression`'s
"regime shift" argument to `haltom_unconventional_mp`'s forward-guidance
mechanics) rather than single-step recall. Easy questions are concentrated in
the reading-heavy `financial-crisis-2008` topic (basic factual recall: what is
securitization, what is TARP, what is a CDS) since easy factual recall is
specifically appropriate for readings per the task's own guidance.

## Note on the pending final lecture

One more lecture (after Class 10) has not yet been uploaded. This plan and the
resulting bank are scoped only to the materials uploaded as of 2026-07-27.
When the final lecture's slides are uploaded, a follow-up batch should add its
own source entry, extend or add topics as appropriate (exchange rates/
open-economy macro is the most likely candidate given `problemset4`'s Q10 and
the study guide's brief international-macro mention), and add questions
following this same process.
