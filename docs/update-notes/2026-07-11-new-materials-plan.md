# New Materials Plan — 2026-07-11

This note documents what was found in `private-materials/` for the 2026-07-11 update
(midterm-prep materials, Formula Practice mode) before any questions were generated,
per the workflow in `docs/source-notes.md`.

## Files found in `private-materials/`

| File | Status |
|---|---|
| `HarvardS10b_Class1.pptx` | Already represented (`class1`) |
| `HarvardS10b_Class2.pptx` | Already represented (`class2`) |
| `HarvardS10b_Class3.pptx` | Already represented (`class3`) |
| `HarvardS10b_Class4.pptx` | Already represented (`class4`) |
| `HarvardS10b_Class5.pptx` | Already represented (`class5`) |
| `HarvardS10b_Class6_7.pptx` | **New** |
| `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | **New** |
| `DS1_solutions.pdf` | Already represented (`ds1`) |
| `DS2_solutions.pdf` | Already represented (`ds2`) |
| `DS3.pdf` | **New** (paired with `DS3_solutions.pdf`) |
| `DS3_solutions.pdf` | **New** (paired with `DS3.pdf`) |
| `Problem Set1_Solutions.pdf` | Already represented (`ps1_solutions`) |
| `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | **New** |
| `README.local.md` | Not a source file — local documentation only, not used for questions |
| `.DS_Store` | System file, not a source, ignored |

Per the task's source restriction, no new source-ingestion questions were generated
from `class1`–`class5`, `ds1`, `ds2`, or `ps1_solutions` in this update. Those five
already-represented classes and three already-represented PDFs were re-consulted only
to avoid duplicate questions and to reuse existing topic IDs, never as the grounding
for a new question's content.

## New sources identified and proposed IDs

| Proposed ID | File(s) | Type |
|---|---|---|
| `class6` | `HarvardS10b_Class6_7.pptx` | lecture-slides (covers Classes 6–7 combined, one deck) |
| `guest_lecture_ecb` | `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | guest-lecture-slides |
| `ds3` | `DS3.pdf` + `DS3_solutions.pdf` (paired) | discussion-questions-and-solutions |
| `quiz2` | `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | canvas-quiz-export |

### `class6` — Classes 6-7: Money, Banking, Financial Markets, and the Crisis of 2007-9

28 slides. Covers: financial intermediation and the allocation of saving; present
value; the definition and three functions of money; M1/M2 monetary aggregates;
fractional-reserve banking and the deposit/money-creation multiplier; the quantity
equation (M·V = P·Y) and money/inflation in the long run; banking panics and the
founding of the Fed; bonds (principal, coupon rate, term, credit risk, the inverse
bond-price/interest-rate relationship); stocks, risk premium, and the efficient
market hypothesis; and a term-list introduction to the 2007-9 financial crisis
(leverage, securitization, shadow banking — terms only, no worked definitions in this
deck, see "Special handling" below).

Proposed topic coverage: split across a new `money-banking` topic (money,
fractional-reserve banking, money creation, the quantity equation, banking panics) and
a new `financial-markets` topic (present value, bonds, stocks, risk premium, EMH,
financial intermediation, diversification).

Target: ~20 questions (≈12 `money-banking`, ≈8 `financial-markets`).

### `guest_lecture_ecb` — Price Stability and the Monetary Policy of the ECB

43 slides with extensive speaker notes (a guest lecture, not the core Econ 10b deck).
Covers: functions/forms of money and the modern "loans create deposits" endogenous
money view; the ECB's price-stability mandate and its symmetric 2% HICP target (and
why 2% rather than 0%); the real costs of inflation (redistribution, cold progression,
price distortion, risk premiums) and deflation (debt-deflation, bank failures,
deflationary spirals); medium-term policy orientation and second-round
effects/wage-price spirals; why commercial banks need central bank reserves; the
monetary base and how reserves are injected; the interbank money market and the
overnight rate as the true policy control variable (not the monetary base); the
pre-2007 interest rate corridor and the post-2008 floor/ample-reserves system; forward
guidance and QE/QT; and the rationale, design, and financial-stability safeguards of
the digital euro.

Proposed topic coverage: new `monetary-policy` topic (all of the above; kept distinct
from `money-banking` since this deck is specifically about the ECB's own framework).

Target: ~22 questions.

### `ds3` — Discussion Session 3: The Market for Money (paired questions + solutions)

Two files, four question items (one with three sub-parts). Covers: why the money
demand curve slopes downward (opportunity cost of holding non-interest-bearing money);
how Fed open-market operations (buying vs. selling bonds) and the required reserve
ratio change the money supply; what does and does not shift the money demand curve
(a change in the nominal interest rate is a movement along the curve, not a shift);
and how credit-card availability, perceived stock riskiness, and an economic boom each
shift money demand, affect the nominal interest rate, and require a Fed money-supply
response to hold the rate constant.

Proposed topic coverage: `money-banking` (same new topic as `class6`, since both cover
the market for money).

Target: ~8 questions (short discussion sheet — four base items, each testing a
distinct concept; deliberately not padded past what the material supports).

### `quiz2` — Canvas Quiz 2 (paraphrased "Quiz 2 style" practice only)

10-question Canvas quiz already taken by the user (score 8/10). Per the task's Canvas
Quiz 2 interpretation note (see `docs/source-notes.md` and the "Special handling"
section below), this is used only to generate paraphrased practice questions on the
same concepts — never to reproduce the quiz's own wording, table, or answer key.

Concepts: the open-economy saving/investment identity and trade balance; private/
public/national saving from an income-and-spending scenario; how paying down debt
affects a household's liabilities and wealth; the definition of life-cycle saving; the
institutional factors behind the USSR's growth failure; crowding out; the two
determinants of the cost of investment; how a lower domestic real interest rate
affects capital inflows/outflows/net capital inflows; Ricardian equivalence; and the
definition of capital inflows from a single country's point of view.

Proposed topic coverage: reuse existing topics — `saving-investment`,
`loanable-funds`, `capital-flows`, `sources-of-growth` — no new topic needed, since
this quiz is a mixed review of material already covered by those topics.

Target: ~12 questions, with extra weight on the two concepts the user missed
(Q3: debt paydown → liabilities/wealth; Q10: capital inflows = purchases of domestic
assets by foreigners).

## Files excluded and why

- `README.local.md` — local workflow documentation, not course content.
- `.DS_Store` — macOS system file, not content.

No file was fully excluded from question generation; all four new source files above
were used. Some individual slides/sections within `class6` and `guest_lecture_ecb`
were excluded — see "Special handling" below and the per-source notes that will be
added to `docs/source-notes.md`.

## Files requiring special handling

- **`DS3.pdf` + `DS3_solutions.pdf`** — split question/solution pair. Combined into a
  single paired source `ds3` per Part C of the task. Every `ds3-*` question is checked
  against both files together: the scenario from `DS3.pdf`, the reasoning/correct
  answer from `DS3_solutions.pdf`.
- **`Quiz 2_ ... .pdf`** — Canvas's PDF export places each question's "Correct
  answer"/"Wrong answer" result label *after* that question's choices and immediately
  before the *next* question's number, which reads as if the label belongs to the
  following question. This is a misleading artifact of the Canvas export layout. Per
  the user's direct clarification, the actual results were: overall score 8/10,
  Question 2 correct, Questions 3 and 10 incorrect (all other questions correct). This
  interpretation is used instead of any naive reading of the label positions. See the
  Canvas Quiz 2 interpretation note in `docs/source-notes.md`.
- **`HarvardS10b_Class6_7.pptx` slide 28** — lists 2007-9 financial-crisis terms
  (leverage, securitization, MBS, CDOs, CDS, shadow banking, counterparty/systemic
  risk) without accompanying definitions in this deck. Only terms with a clear
  definition elsewhere in the deck (e.g., diversification on slide 23, financial
  intermediation on slide 4) were used as question content; the undefined term list
  itself was not used to write definition questions, per the conservative-generation
  rule.

## New topics proposed

- `money-banking` — "Money, Banking, and the Money Market" (money's definition and
  functions, fractional-reserve banking, the money multiplier, the quantity equation,
  banking panics/the Fed's founding, money demand and Fed control of the money
  supply). Fed by `class6` and `ds3`.
- `financial-markets` — "Bonds, Stocks, and Financial Markets" (present value, bonds,
  stocks, risk premium, the efficient market hypothesis, financial intermediation,
  diversification). Fed by `class6`.
- `monetary-policy` — "Central Banks and Monetary Policy" (the ECB's price-stability
  mandate, costs of inflation/deflation, second-round effects, reserves and the
  overnight rate, QE/QT, the digital euro). Fed by `guest_lecture_ecb`.

No new topic for Quiz 2 — its content maps cleanly onto four existing topics
(`saving-investment`, `loanable-funds`, `capital-flows`, `sources-of-growth`), and the
task guidance prefers reusing concept topics over adding a generic review topic when a
source's own content already fits established topics.

## Target question counts (new source-ingestion questions)

| Source | Target count |
|---|---|
| `class6` | ~20 |
| `guest_lecture_ecb` | ~22 |
| `ds3` | ~8 |
| `quiz2` | ~12 |
| **Total** | **~62** |

Plus a separate Formula Practice batch (Part G of the task) of ~25-40 formula/
quantitative word problems grounded in existing sources, not counted above.

See `docs/update-notes/2026-07-11-new-materials-results.md` for the actual counts,
question IDs, and any `needsReview` items once generation is complete.
