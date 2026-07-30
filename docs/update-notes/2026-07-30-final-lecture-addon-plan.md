# 2026-07-30 Final Lecture Question Add-On — Plan

## Context

The user uploaded one new file to `private-materials/` today: the slides for
the last lecture of Econ S10-b. This is the final lecture add-on for the
final-exam question bank — a targeted batch, not a rebuild of the existing
209-question bank. This note documents source identification, extraction
findings, proposed topics/source entries, and proposed question counts,
written **before** any question authoring, per the project's plan-then-build
convention.

## All files currently in `private-materials/`

| File | mtime | Status |
|---|---|---|
| `HarvardS10b_Class1.pptx` | 2026-07-06 | pre-midterm lecture slides, not active |
| `HarvardS10b_Class2.pptx` | 2026-07-06 | pre-midterm lecture slides, not active |
| `HarvardS10b_Class3.pptx` | 2026-07-06 | pre-midterm lecture slides, not active |
| `HarvardS10b_Class4.pptx` | 2026-07-06 | pre-midterm lecture slides, not active |
| `Problem Set1_Solutions.pdf` | 2026-07-06 | pre-midterm problem-set solutions, not active |
| `DS1_solutions.pdf` | 2026-07-06 | pre-midterm discussion-section solutions, not active |
| `DS2_solutions.pdf` | 2026-07-06 | pre-midterm discussion-section solutions, not active |
| `HarvardS10b_Class5.pptx` | 2026-07-07 | pre-midterm lecture slides, not active |
| `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | 2026-07-10 | pre-midterm-era guest lecture, not active (previously excluded on pedagogical-conflict grounds) |
| `DS3.pdf` | 2026-07-10 | pre-midterm discussion-section problem set, not active |
| `DS3_solutions.pdf` | 2026-07-10 | pre-midterm discussion-section solutions, not active |
| `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | 2026-07-10 | pre-midterm quiz, not active |
| `HarvardS10b_Class6_7.pptx` | 2026-07-10 | pre-midterm lecture slides, not active |
| `MidtermStudyMaterials_Summer2026.doc` | 2026-07-12 | superseded midterm study guide, not active |
| `Economic Crisis.pdf` | 2026-07-14 | **already active** (`financial_crisis_reading`) |
| `HarvardS10b_Class8.pptx` | 2026-07-21 | **already active** (`class8`) |
| `HarvardS10b_Class9_Preliminary.pdf` | 2026-07-21 | **already active** (`class9`) |
| `HarvardS10b_Class10.pptx` | 2026-07-27 | **already active** (`class10`) |
| `Final Study Guide and Practice Questions.pdf` | 2026-07-27 | **already active** (`final_study_guide`) |
| `HaltomUnconventialMP_2012.pdf` | 2026-07-27 | **already active** (`haltom_unconventional_mp`) |
| `MuchAdoAboutMultipliers.pdf` | 2026-07-27 | **already active** (`much_ado_multipliers`) |
| `RomerGreatDepressionLessons.pdf` | 2026-07-27 | **already active** (`romer_great_depression`) |
| `RomerHow the Fiscal Stimulus Helped, and Could Have Done More - NYTimes.com.pdf` | 2026-07-27 | **already active** (`romer_fiscal_stimulus_nyt`) |
| `ProblemSet4_EconS10b.pdf` | 2026-07-27 | **already active** (`problemset4`) |
| `HarvardS10b_Class11.pptx` | **2026-07-30 (today)** | **new — selected as this batch's source** |
| `README.local.md`, `.DS_Store` | n/a | not course content |

Only one new file was uploaded since the 2026-07-27 batch, and its filename,
today's timestamp, and its own title slide ("Class 11") and second slide
("The Last Class of Ec S10b!") make it unambiguous: `HarvardS10b_Class11.pptx`
is the final lecture the 2026-07-27 plan note flagged as still pending.

## Selected source

| Proposed ID | Filename | Title | Type |
|---|---|---|---|
| `class11` | `HarvardS10b_Class11.pptx` | Class 11: The Global Economy, Exchange Rates, and Open Economy Macroeconomic Issues | lecture-slides |

No other file needed to be treated as a primary source for this batch. No
older source needed to be pulled back in either — this deck is
self-contained enough (including its own worked numeric examples and case
studies) that no cross-source grounding was necessary beyond citing `class11`
alone throughout.

## Content overview

41 slides, extracted cleanly via `python-pptx` (bullet text + speaker notes).
The deck covers four linked clusters:

1. **The FOREX market** (slides 3-7): the market for foreign exchange as an
   ordinary supply-and-demand market for a currency; who demands and who
   supplies dollars; explicitly distinguishing the FOREX market's "supply of
   dollars" from the Fed-controlled money supply; how monetary policy
   transmits to the exchange rate (tighter policy → higher real interest
   rate → higher demand for/lower supply of dollars → appreciation); and why
   this exchange-rate channel makes "standard" monetary policy *more*
   effective in an open economy with flexible rates than in a closed one.
2. **Real exchange rates, the law of one price, and PPP** (slides 8-13): the
   real exchange rate as the relative price of a domestic basket to a
   foreign basket in a common currency; a fully worked numeric example
   (U.S. vs. Japanese computer prices); the law of one price and the
   arbitrage mechanism that enforces it; purchasing power parity
   (`1 = P × e / Pf`) and its long-run prediction that high-inflation
   countries' currencies depreciate; and PPP's well-known short-run
   weaknesses (non-standardized and non-traded goods).
3. **Fixed vs. floating exchange rates and optimum currency areas** (slides
   14-27): the narrow "optimum currency area" gains-vs-losses framework
   (monetary efficiency gains vs. monetary autonomy losses, both plotted
   against economic integration with a partner country); worked examples
   (the UK/Sweden 1992 exit from the European Exchange Rate Mechanism vs.
   France's different choice in 1993; Argentina's peso peg; the Eurozone);
   and the broader view of fixed-rate costs and benefits (predictability,
   imported monetary discipline or indiscipline, insulation from
   speculation, Dutch disease, political integration, currency crises,
   constraints on the lender-of-last-resort function).
4. **The policy trilemma and capital controls** (slides 28-41): the
   "impossible trinity" (exchange-rate stability, monetary policy autonomy,
   and free capital movement — at most two at once); what capital controls
   are and the standard arguments for free capital movement; and a detailed
   worked case study of Malaysia's 1998 capital-controls response to the
   Asian financial crisis, plus their stated costs and benefits.

**Formula/quantitative content:** the deck teaches three distinct
quantitative relationships with worked or near-worked structure: (1) the
real-exchange-rate/relative-price calculation (slide 10's fully worked
computer example: `Pf$ = Pf / e`, then compare `P` to `Pf$`); (2) purchasing
power parity, `1 = P × e / Pf`; and (3) international interest rate parity,
`R = RFOR + (Ee − E) / E`, used alongside `%ΔE = Inflation − InflationFOR`
and, under a fixed-rate commitment, the reduced form `R = RFor` and
`Inflation = InflationFor`. This is a formula-bearing lecture; formula
questions are warranted (see the convention note below).

**Graph/diagram content:** the deck is also graph-heavy, with three distinct
diagram types taught: (1) the dollar-market FOREX supply-and-demand diagram
(quantity of dollars vs. the exchange rate); (2) the optimum-currency-area
"gains vs. losses" crossing diagram (both plotted against economic
integration); (3) the UK/Sweden `r`-vs.-output diagram showing the choice
between `rFor` and `rLow`; and (4) the policy-trilemma triangle (three goals
at the corners, three regimes on the connecting edges). Graph questions with
original inline SVGs are warranted.

**Policy/theory content:** the OCA framework, the broad costs/benefits list,
and the trilemma/capital-controls material are policy-mechanism-heavy and
well suited to mechanism, policy-interpretation, common-confusion, and
compare-cases question styles.

**Overall assessment:** dense, and it clearly introduces a genuinely new
exam-relevant area (open-economy/international macro) not covered by any
active source. Per the task's own sizing guidance, this supports a batch in
the ~40-question range, not the smaller "short deck" range.

## A note on formula-convention consistency within this one source

The deck uses **two different sign/definition conventions for the exchange
rate within the same 41 slides**, and getting this wrong would repeat
exactly the kind of silent-convention-mixing error the 2026-07-29 audit
flagged for Okun's Law. Specifically:

- Slides 3-13 (the FOREX-market and real-exchange-rate sections) define
  lowercase `e` as **foreign currency per U.S. dollar** (e.g., yen per
  dollar). A rise in `e` is explicitly stated to mean "the dollar
  appreciates" (slide 4). The real-exchange-rate formula `Pf$ = Pf / e` and
  PPP's `1 = P × e / Pf` both use this convention.
- Slides 21-25 (the international/policy-trilemma section) switch to
  uppercase `E`, and slide 21's own speaker notes state explicitly: **"E up
  means depr[eciation] of domestic currency here."** That is the opposite
  direction from lowercase `e` — `E` here is **domestic currency per unit of
  foreign currency** (a rise means the domestic currency is worth *less*).
  This convention is used consistently in the interest-parity formula
  (`R = RFOR + (Ee − E)/E`), the fixed-rate goal (`E = E*, %ΔE = 0`), and
  the restated PPP condition (`%ΔE = Inflation − InflationFOR`).

Both conventions are internally consistent and explicitly stated by the
deck itself (the second is confirmed by its own speaker notes, not
inferred) — this is not an error in the source, just two different
notations used in two different sections, likely because the international
section is framed generically ("the domestic country" pegging to "the
foreign country") rather than specifically about the U.S. dollar. To avoid
silently mixing them: **exchange-rates-topic formula questions use the
lowercase `e` (foreign-currency-per-dollar) convention from slides 3-13;
the one open-economy-policy-topic formula question uses the uppercase `E`
(domestic-currency-per-foreign-currency) convention from slide 21, and its
`correctExplanation` states that convention explicitly.** This is documented
in `docs/source-notes.md` as a standing formula-convention note.

## Extraction issues / skipped material

Extraction was clean throughout (bullet text and speaker notes captured for
essentially every content slide). Three slides are chart/photo-only with no
usable extractable data and were **not used as grounding for any
question**:

- Slide 13, "Inflation and Currency Depreciation in South America,
  1995-2004" — a scatter chart with only a "45º line" label extracted, no
  usable data points.
- Slide 15, "Fixed versus Floating" — an apparently tabular/graphic
  comparison slide with no extractable body text beyond the title.
- Slide 35, "Percentage of Developing Countries with Capital Controls" — a
  bar/line chart with no extractable axis or series data.

None of these charts' underlying claims are needed as sole grounding for any
question in this batch — the surrounding bullet text (PPP's long-run
prediction on slide 12; the narrow-vs-broad cost/benefit framework on
slides 14-31; the capital-controls arguments and Malaysia case on slides
34-40) fully grounds every question instead. No `needsReview` flag is
needed for this batch.

## Proposed topics

| Topic ID | Status | Coverage |
|---|---|---|
| `exchange-rates` | **new** | The FOREX market, nominal vs. real exchange rates, the law of one price, purchasing power parity, and the exchange-rate channel of monetary policy transmission |
| `open-economy-policy` | **new** | Fixed vs. floating exchange rate regimes, optimum currency areas, the policy trilemma, capital controls, and the historical currency-crisis case studies (UK/Sweden 1992, France 1993, Argentina, Malaysia 1998) |

Two topics rather than one: the FOREX/PPP material is a self-contained
market-mechanics-and-formula cluster naturally paired with `formula` and
`graph` questions, while the fixed/floating-regime and policy-trilemma
material is a self-contained policy-mechanism-and-case-study cluster
naturally paired with `standard`/`vocab` questions and its own distinct
diagrams (the OCA crossing chart, the trilemma triangle, the UK/Sweden `r`
diagram). Each topic supports well over the "avoid overly narrow, 1-2
question" floor on its own.

## Proposed ID prefixes

- `xrate-` for the `exchange-rates` topic (`xrate-vocab-001`,
  `xrate-standard-001`, `xrate-formula-001`, `xrate-graph-001`, ...)
- `openecon-` for the `open-economy-policy` topic (`openecon-vocab-001`,
  `openecon-standard-001`, `openecon-formula-001`, `openecon-graph-001`,
  ...)

Both are new prefixes, consistent in style with the existing
`cycles`/`fincrisis`/`fiscal`/`infldyn`/`keynes`/`moneymkt`/`monpolicy`/
`unemployment`/`adas` prefixes, and cannot collide with any existing
question ID.

## Proposed question count and type mix (target ~41)

| Topic | vocab | standard | formula | graph | Total |
|---|---|---|---|---|---|
| `exchange-rates` | 5 | 9 | 5 | 2 | 21 |
| `open-economy-policy` | 4 | 12 | 1 | 3 | 20 |
| **Total** | **9** | **21** | **6** | **5** | **41** |

This lands within the task's "45-60 only if dense" ceiling but below it —
41 is chosen deliberately over the top of that range: every planned
question maps to distinct, clearly-taught content (no slide or sub-concept
needs to be quizzed more than 2-3 times to reach this count), so a larger
number would start trading toward padding rather than genuine coverage.

Formula questions (6, not more): the deck supports exactly three
quantitative relationships (listed above) with real worked-example
structure; 6 questions (5 applying the `e`/PPP relationships with fresh
numbers in various compute/reverse-compute/error-diagnosis forms, 1 applying
the interest-parity/fixed-rate relationship) exercises all three without
manufacturing extra "mad-libs" variants beyond what the material supports.

Graph questions (5): one SVG diagram type per major visual concept the deck
actually teaches (FOREX supply/demand — 2 questions isolating the demand-
side and supply-side shift separately; the OCA gains/losses crossing chart;
the policy-trilemma triangle; the UK/Sweden `r`-vs.-output diagram) — no
diagram type is invented that the deck doesn't itself present.

## Proposed difficulty mix

Target ~6 easy (14.6%), ~20 medium (48.8%), ~15 hard (36.6%) — within the
task's 10-20% / 45-55% / 30-40% bands, leaning toward the harder end since
this is final-exam prep and the source material (case-study comparisons,
the trilemma's cross-cutting logic, interest-parity reasoning) supports
genuine application/interpretation difficulty rather than simple recall.
Easy questions are concentrated in basic vocabulary/definitional items
(FOREX market definition, appreciation/depreciation direction, policy
trilemma statement, capital controls definition); every formula and most
graph questions are medium or hard, since they require multi-step
computation or diagram-reading rather than single-fact recall.

## Concepts intentionally skipped

- The three chart-only slides listed above (South America inflation
  scatter, the "Fixed versus Floating" comparison table, developing-country
  capital-controls percentage chart) — no question depends on reading their
  pixels.
- The bare "Soft vs. hard fixed rates" bullet phrase on slide 14 is not
  quizzed on its own — the deck names the distinction but doesn't define or
  elaborate what makes a peg "soft" vs. "hard" anywhere in the extracted
  text, so testing that specific sub-distinction would require guessing at
  content the deck doesn't actually spell out.
- Slide-level minutiae from the Malaysia case study (exact peso/ringgit
  repatriation-levy percentages by month) are used for scenario color in at
  most one question, not turned into their own standalone formula/recall
  items, since they're policy-implementation detail rather than a tested
  economic relationship.
