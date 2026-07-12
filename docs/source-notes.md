# Source Notes

This document summarizes how the initial Econ 10b question bank was derived from the
uploaded course materials, so future contributors know what has and hasn't been
verified against the source content.

## Local-only source materials

The original course materials (lecture slides, discussion-section solutions, problem-set
solutions) are stored locally in the project's `private-materials/` folder and are
**intentionally excluded from git** because they may contain copyrighted course content.
The public repository keeps only the derived question data (`data/questions.json`),
structured source metadata (`data/sources.json`), and public documentation
(`docs/source-notes.md` and `docs/question-authoring-guide.md`).

### Current local materials

The question bank (233 questions as of the 2026-07-11 update) was generated from:
- `HarvardS10b_Class1.pptx`, `HarvardS10b_Class2.pptx`, `HarvardS10b_Class3.pptx`, `HarvardS10b_Class4.pptx`, `HarvardS10b_Class5.pptx`, `HarvardS10b_Class6_7.pptx` — lecture slides
- `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` — guest lecture slides
- `DS1_solutions.pdf`, `DS2_solutions.pdf`, `DS3.pdf` + `DS3_solutions.pdf` — discussion-section worked solutions
- `Problem Set1_Solutions.pdf` — problem-set worked solutions
- `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` — Canvas quiz export (paraphrased practice only, see below)

These files remain available locally so that future question-bank updates can read them
directly using Claude Code prompts.

### Workflow for future updates

When adding new materials or generating more questions:

1. **Place new materials locally** in `private-materials/` (slides, solution PDFs, etc.)
2. **Use a Claude Code prompt** to read the new materials and generate new questions
3. **Write new questions** to `data/questions.json`, following the schema in `docs/question-authoring-guide.md`
4. **Update `data/sources.json`** with metadata about the new sources
5. **Update `docs/source-notes.md`** with extraction notes and reliability commentary
6. **Commit the JSON and documentation files** — do **not** commit the raw course materials
7. **Push to GitHub** — the app and derived data are public; the local materials stay private

Never commit raw `.pptx`, `.pdf`, or other course files to git. The `.gitignore` file protects `private-materials/` automatically.

## Materials used

| Source ID | File | What it covers |
|---|---|---|
| `class1` | `HarvardS10b_Class1.pptx` | Cost-benefit principle, economic surplus, opportunity cost, marginal analysis, absolute/comparative advantage, PPCs, supply and demand, market equilibrium, shifts, market surplus, linear supply/demand equations, market failure causes. |
| `class2` | `HarvardS10b_Class2.pptx` | GDP measurement (market value, final vs. intermediate goods, value added, expenditure/income approaches), difficulties measuring GDP, real vs. nominal GDP, CPI, price indices, inflation, real interest rates, the Fisher effect, indexing, CPI substitution/quality-adjustment bias. |
| `class3` | `HarvardS10b_Class3.pptx` | Labor demand/VMP, diminishing returns to labor, labor supply/reservation wage, shifts in labor markets, the productivity-wage slowdown (1970s) and divergence (1990s), globalization and wage inequality, skill-biased technological change, economics of superstars, policy responses, GDP-per-capita decomposition. |
| `class4` | `HarvardS10b_Class4.pptx` | Compound growth formula, Rule of 72, historical living standards, cross-country growth divergence, 8 determinants of labor productivity, diminishing returns to capital, institutions, the USSR case study, government growth policies, poverty traps, limits of growth. |
| `class5` | `HarvardS10b_Class5.pptx` | Saving vs. wealth, saving rate, assets/liabilities/balance sheets/net worth, life-cycle/precautionary/bequest saving, real vs. nominal interest rates, national/private/public saving identities, government budget surplus/deficit and Ricardian equivalence, investment and capital formation, value of the marginal product of capital, user cost of capital, the loanable funds market and crowding out, technology-driven investment demand shifts, and open-economy capital flows (capital inflows/outflows, net capital inflows, S + KI = I, NX + KI = 0, and the trade-deficit/capital-inflow relationship). |
| `ds1` | `DS1_solutions.pdf` | Worked solutions: PPCs/gains from trade (Canada/USA honey and maple syrup), GDP calculation via three methods (Microsoft chip example), CPI/inflation/deflating/indexing (grad student example), market equilibrium algebra, demand shifters, marginal analysis (lemonade stand). |
| `ds2` | `DS2_solutions.pdf` | Worked solutions: labor demand/VMP, shifts in labor demand/supply (opticians, pilots), average labor productivity and GDP-per-capita decomposition, cross-country growth catch-up calculations (Richland/Poorland). |
| `ps1_solutions` | `Problem Set1_Solutions.pdf` | Worked solutions: marginal analysis (compost, calling plans), PPCs/comparative advantage (Helen, Tom and Susan), demand shifters and supply/demand shifts, GDP components and edge cases (inventory, existing assets, transfers, multi-year international goods), CPI/inflation, real interest rates. |
| `class6` | `HarvardS10b_Class6_7.pptx` | Financial intermediation, present value, money's definition/functions, M1/M2, fractional-reserve banking and the money multiplier, the quantity equation, banking panics/the Fed, bonds, stocks, risk premium, the efficient market hypothesis, and 2007-9 financial-crisis terms. |
| `guest_lecture_ecb` | `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | Functions/forms of money, the "loans create deposits" view, the ECB's 2% HICP price-stability mandate, costs of inflation/deflation, second-round effects, why banks need reserves, the monetary base, the overnight rate as the true policy control variable, the interest rate corridor, QE/QT, and the digital euro. |
| `ds3` | `DS3.pdf` + `DS3_solutions.pdf` (paired) | Worked solutions: the money demand curve and the opportunity cost of holding money, Fed open-market operations and the required reserve ratio, shifters vs. movements along the money demand curve, and money-demand shift scenarios (credit cards, riskier stocks, an economic boom). |
| `quiz2` | `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | Canvas quiz (paraphrased practice only): open-economy S+KI=I/trade balance, private/public/national saving, debt paydown and wealth, life-cycle saving, USSR institutions, crowding out, cost of investment, capital inflows/outflows, Ricardian equivalence. |
| `midterm_review` | `MidtermStudyMaterials_Summer2026.doc` | Instructor midterm study guide (paraphrased practice only): closed-economy saving/investment identity, real interest rate + compound interest, wealth effects on saving, value-added GDP (multi-firm chain), CPI indexing, labor-productivity counterfactual/piecewise compound growth, national/private/public saving with a vertical saving-supply curve, inventory-GDP timing, stock present value with a risk premium, compound real-GDP growth rate, and an open-economy capital-inflows shock. |

All thirteen files were extracted programmatically: the `.pptx` files with `python-pptx`
(slide text, tables, and speaker notes), the `.pdf` files with `pdftotext -layout`, and
the one legacy `.doc` file with macOS's `textutil` (converted to plain text). Every
extraction completed with no OCR failures or corrupted pages, aside from the known
gaps noted below (one from the original 2026-07-06 audit, one found in Quiz 2 during
the 2026-07-11 update).

### Known extraction gaps

- `ds1` (`DS1_solutions.pdf`), Section III parts (d) *Deflating* and (e) *Indexing*: the
  solution states the method in words ("Deflating a nominal quantity converts it to a
  real quantity") but the specific worked numbers for the grad-student example did not
  extract as selectable text, likely because they were rendered as an image/graphic in
  the source PDF rather than as text. No question in the bank depends on those specific
  unavailable numbers — `ds1-deflating-001` uses a freshly constructed scenario, and the
  underlying deflating formula (divide a nominal quantity by its price index) is fully
  and independently documented in `class2` slides 31-32. Flagged here for transparency
  rather than as a `needsReview` item, since the tested formula is otherwise verified.
- `quiz2` (`Quiz 2_ Principles of Economics_ Macroeconomics.pdf`), Question 2: the
  data table describing an economy's income/spending figures (needed to compute
  private/public/national saving) did not extract as text, likely rendered as an
  image in the Canvas PDF export. No `quiz2-*` question depends on that specific
  unavailable table — `quiz2-privatepublicnational-saving-001` uses a freshly
  constructed numeric scenario testing the identical private/public/national saving
  identities, which are independently and fully documented in `class5`. Flagged here
  for transparency rather than as a `needsReview` item, since the tested formulas are
  otherwise verified. See also the Canvas Quiz 2 interpretation note below.

## How questions were generated

- Every question in `data/questions.json` is paraphrased from, or a new numeric variant
  of, a concept or worked example that actually appears in one of the eight files above.
  No topic, formula, or claim was added that isn't grounded in the materials.
- For calculation-based questions drawn from the discussion-section and problem-set
  solutions (`ds1`, `ds2`, `ps1_solutions`), new numbers and cover stories were used
  instead of the exact figures in the solution key — per the "don't copy answer keys
  wholesale" rule — while preserving the underlying calculation or reasoning step.
- Chart-only or photo-only slides (e.g., FRED/BLS chart embeds, the Piketty inequality
  chart, the Bonsack machine photo, hyperinflation ranking graphics) contain no
  extractable numeric data and were **not** used as the basis for any question.
- A few slides had ambiguous cell-to-row alignment when extracted as plain text (for
  example, Class 1's "Building Factories" table, where the average-cost and
  marginal-cost columns extracted separately from the row labels). Rather than guess at
  the alignment, related questions use freshly constructed tables with unambiguous
  numbers (e.g., the "warehouse" marginal-cost questions in `econ-analysis-basics`),
  so no question in the current bank required a `needsReview` flag.

## `needsReview` status

**All 233 questions currently have `needsReview: false`**, including all 95 questions
added in the 2026-07-11 update (62 new source-ingestion questions from `class6`,
`guest_lecture_ecb`, `ds3`, and `quiz2`, plus 33 formula-practice questions grounded in
existing sources). Every 2026-07-11 question is grounded in extractable slide/PDF text,
independently checked math, or (for `quiz2`) the user's own directly-confirmed quiz
results rather than the misleading PDF export layout — none required the flag. The 138
pre-2026-07-11 questions' status was re-confirmed as part of this update (spot-checked
against the extraction gaps noted above; no new issues found). The two known extraction
gaps (see "Known extraction gaps" above) do not affect any specific question's
verifiability, since every affected question uses a freshly constructed scenario
testing the same, independently-documented formula. If a future update introduces a
source with illegible tables, low-quality scans, or truncated slides, mark any question
derived from that unclear content with `needsReview: true` and add a note here
describing what a human should confirm before treating it as verified. See
`docs/question-authoring-guide.md` for the mechanics of setting that flag.

## 2026-07-06 Question Bank Quality Audit

A full source-grounding audit was performed against all seven local materials
(re-extracted fresh via `python-pptx` and `pdftotext -layout` for this pass). Every
question's concept, numbers, correct answer, distractors, and explanations were checked
against the corresponding slide or solution text. Findings:

- **No factual errors found.** Every question's correct answer and explanation matched
  the source material's stated concept, formula, or worked-example logic.
- **Two questions reused a source's exact numbers** rather than a fresh scenario, contrary
  to the no-verbatim-answer-key rule: `ps1-marginal-001` (calling-plan minutes/rates
  matched Problem Set 1's own example exactly) and `class1-graphs-001` (the phone-bill
  slope example matched Class 1 slide 8's own data table exactly). Both were rewritten
  with new scenarios/numbers that test the identical skill.
- **One topic misassignment**: `class2-income-approach-001` (the income approach's ~2/3
  labor-share fact) was filed under `gdp-cpi-inflation` but is a GDP-accounting-method
  question; moved to `gdp-accounting`. `class3-labordemand-002` (determinants of labor
  demand) was filed under `productivity-real-wages` but belongs with the other labor
  demand/VMP questions; moved to `labor-markets`.
- **Four difficulty mislabels**: `ds1-compadv-001`, `ds1-compadv-002`, and `ds1-gains-001`
  (single opportunity-cost ratio or single applied step) and `class4-capital-002`
  (a single two-term comparison) were labeled `hard` but fit the `medium` rubric
  (single-step calculation / applied concept) better; relabeled.
- **One coverage gap**: Class 1 slide 37 ("When Markets Fail" — taxes, externalities,
  market power, imperfect information, behavioral factors) had no corresponding
  questions anywhere in the bank. Added two new questions,
  `class1-marketfailure-001` (externalities) and `class1-marketfailure-002` (market
  power), under the existing `supply-demand-equilibrium` topic.
- **No duplicates, no wording/distractor-quality problems, no `needsReview` changes**
  were found beyond the fixes above. `node scripts/validate-data.mjs` passes with zero
  errors and zero warnings on the resulting 104-question bank.

## 2026-07-07 Class 5: Savings, Investment, Public Savings, and Capital Flows

Added `HarvardS10b_Class5.pptx` (44 slides) as a new source (`class5`) and generated 34
new multiple-choice questions from it, split across three new topics
(`saving-investment`, `loanable-funds`, `capital-flows` — see
`docs/question-authoring-guide.md` for how topics are added). This update also
introduced the `questionType` field (`"standard"` or `"vocab"`) and a new **Vocabulary /
Definitions** study mode; see `README.md` and `docs/question-authoring-guide.md` for
details.

**Topics extracted and used as question sources:** saving vs. wealth, the saving rate,
assets/liabilities/balance sheets/net worth (slides 3-4), the three household saving
motives — life-cycle, precautionary, bequest (slide 5), the real interest rate (slide 6),
national/private/public saving identities and the government budget surplus/deficit
(slides 8-9, 13-14), Ricardian equivalence (slide 27), investment and capital formation,
the value of the marginal product of capital, and the user cost of capital (slides
16-19), the loanable funds market, crowding out from larger budget deficits, and
technology-driven investment-demand shifts (slides 20-22), and open-economy capital
flows — capital inflows/outflows, net capital inflows, risk and capital flows, the S + KI
= I and NX + KI = 0 identities, and the trade-deficit/capital-inflow relationship
(slides 35-42).

**Chart/image-only content excluded:** roughly half the deck (slides 10-12, 15, 23-26,
28-34, 43-44) consists of FRED/BEA charts (personal saving rate, national saving history,
federal tax revenue and spending, debt-to-GDP by country, U.S. trade balance) and photos
with no extractable numeric data. None of these slides were used as the basis for any
question, consistent with how chart-only slides were handled for Classes 1-4.

**No uncertainty / no `needsReview` items:** all 44 slides' bullet text and speaker notes
extracted cleanly via `python-pptx`, with no illegible or ambiguous text. The two worked
numeric examples in the deck — the sample individual balance sheet (slide 4) and "John's
Fishing Business" investment-decision walkthrough (slides 17-18) — were used only to
confirm the calculation *method*; every calculation question in the new set uses a freshly
constructed scenario and numbers (different amounts, different item/business names) per
the no-verbatim-answer-key rule, not the slides' own figures. As a result, none of the 34
new questions required a `needsReview` flag.

**Verification status:** all 34 new questions are fully verified against the extracted
slide text (not "pending review") — see the `needsReview` status section above.
`node scripts/validate-data.mjs` passes with zero errors and zero warnings on the
resulting 138-question bank, including the new `questionType` field validation.

## 2026-07-11 Midterm-Prep Materials and Formula Practice

Added four new sources — `class6` (`HarvardS10b_Class6_7.pptx`), `guest_lecture_ecb`
(`Guest Lecture Slides - Price Stability and Monetary Policy.pptx`), `ds3` (paired
`DS3.pdf` + `DS3_solutions.pdf`), and `quiz2` (`Quiz 2_ Principles of Economics_
Macroeconomics.pdf`) — and generated 62 new source-ingestion questions from them,
split across three new topics (`money-banking`, `financial-markets`,
`monetary-policy`) plus four existing topics reused for the `quiz2` questions
(`saving-investment`, `loanable-funds`, `capital-flows`, `sources-of-growth`). This
update also added a separate batch of 33 formula/quantitative practice questions
(Part G of the update) grounded in existing sources (`class1`-`class5`, `ds1`, `ds2`,
`ps1_solutions`) with entirely fresh numbers, plus 5 more formula-type questions
naturally generated from `class6` and 2 from `quiz2` — 40 formula questions total —
and introduced the `questionType: "formula"` value and the new **Formula Practice**
study mode. See `docs/update-notes/2026-07-11-new-materials-plan.md` and
`docs/update-notes/2026-07-11-new-materials-results.md` for the full planning note and
source-to-question audit table.

Per the update's source restriction, no new source-ingestion questions were generated
from `class1`-`class5`, `ds1`, `ds2`, or `ps1_solutions` in this update — those sources
were only reused as formula grounding for the dedicated Formula Practice batch (which
uses fresh numbers, not those sources' own worked examples) and consulted to avoid
duplicate questions.

**Topics extracted and used as question sources:**
- `class6` (money-banking questions): the definition and three functions of money,
  M1/M2 monetary aggregates, fractional-reserve banking and the money-creation
  multiplier, the quantity equation and money/inflation in the long run, banking
  panics and the founding of the Fed, financial intermediation, and self-finance.
- `class6` (financial-markets questions): present value, bonds (principal, coupon
  rate, term, credit risk, the inverse bond-price/interest-rate relationship),
  stocks, risk premium, the efficient market hypothesis, diversification, and the
  shared role of bond/stock markets.
- `guest_lecture_ecb` (monetary-policy questions): functions/forms of money and the
  "loans create deposits" endogenous-money view; the ECB's price-stability mandate and
  symmetric 2% HICP target; costs of inflation (redistribution, cold progression,
  price distortion, risk premiums) and deflation (debt-deflation, deflationary
  spirals); medium-term policy orientation and second-round effects/wage-price
  spirals; why banks need reserves; the monetary base and reserve injection; the
  overnight rate as the true policy control variable; the interest rate corridor;
  forward guidance/QE/QT; and the digital euro.
- `ds3` (money-banking questions): the money demand curve's downward slope
  (opportunity cost of holding money), Fed open-market operations and the required
  reserve ratio, shift-versus-movement on the money demand curve, and money-demand
  shift scenarios paraphrased from DS3's credit-card, risky-stock, and economic-boom
  examples.
- `quiz2` (paraphrased practice questions, reusing existing topics): the open-economy
  S + KI = I identity and trade balance, private/public/national saving, how debt
  paydown affects liabilities and wealth, life-cycle saving, USSR institutions and
  growth, crowding out, the cost of investment, capital inflows/outflows, and
  Ricardian equivalence.

**Chart/image-only content excluded:** `class6` slides 22, 25, and 27 (a bond-ratings
title-only slide, a duplicate Efficient Market Hypothesis title-only slide, and a bare
speaker-note web link) have no extractable body content and were not used. `class6`
slide 28 ("Important Terms in the 2007-9 Financial Crisis") lists terms (leverage,
securitization, MBS, CDOs, CDS, shadow banking, counterparty/systemic risk) without
accompanying definitions in this deck, so it was not used to write definition
questions — only terms defined elsewhere in the deck (diversification, financial
intermediation) were used. `guest_lecture_ecb` slide 1 (a cover photo), slide 10 (an
ECB Governing Council photo), and the repeated "Contents" section-divider slides have
no substantive content beyond a repeated agenda list and were not used as a basis for
any question.

**No `needsReview` items:** every 2026-07-11 question is grounded in cleanly
extracted slide/PDF text or independently verified math; see the `needsReview` status
section above and the Canvas Quiz 2 and DS3 pairing notes below for how ambiguous
source formatting was handled without resorting to a `needsReview` flag.

### Canvas Quiz 2 interpretation note

The `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` export from Canvas has a
misleading layout: each question's per-question "Correct answer" / "Wrong answer"
result label is rendered *after* that question's own answer choices and immediately
before the *next* question's number. Read naively top-to-bottom, this makes the label
look like it belongs to the following question rather than the one it actually
grades, and the PDF text extraction does not preserve which specific radio button was
selected — only these (potentially mis-attributed) per-question result labels.
Separately, Question 2's income/spending data table did not extract as text at all
(see "Known extraction gaps" above).

Rather than trust a naive reading of the label positions, this update used the user's
own direct, authoritative account of their results: **overall score was 8 out of 10;
Question 2 was answered correctly; Questions 3 and 10 were answered incorrectly**
(meaning Questions 1, 4, 5, 6, 7, 8, and 9 were also answered correctly, consistent
with the 8/10 total). This is the interpretation recorded in `data/sources.json`'s
`quiz2` entry and used throughout this update — no question or explanation in
`data/questions.json` was derived from the scrambled label positions.

Practically, this meant:
- No `quiz2-*` question reproduces the original quiz's exact wording, choice order, or
  the unreadable Question 2 table — every one is a paraphrased "Quiz 2 style" practice
  question with a fresh scenario (and fresh numbers, where a calculation is involved).
- Extra weight was placed on the two concepts the user's own report showed were
  missed: paying down debt reduces liabilities and increases wealth/net worth
  (`quiz2-debtpaydown-wealth-001`, Question 3's concept), and capital inflows are
  purchases of domestic assets by foreigners while capital outflows are purchases of
  foreign assets by domestic households/firms (`quiz2-capitalinflows-def-001`,
  `quiz2-capitaloutflows-def-001`, `quiz2-capitalinflows-vs-exports-001`, and
  `quiz2-lowerrealrate-capitalflows-001`, all touching Question 10's concept).

### Discussion Session 3 paired-source note

`DS3.pdf` (the question prompts) and `DS3_solutions.pdf` (the worked solutions) are
two separate files in `private-materials/` covering the same four-item discussion
sheet on the market for money. Per the task's paired-source handling, they were
combined into a single source entry, `ds3`, in `data/sources.json`, whose `filename`
field lists both files (`"DS3.pdf, DS3_solutions.pdf"`) and whose `reliabilityNotes`
explicitly documents that this is a two-file paired source that must be read together.

Every `ds3-*` question was written by reading the scenario/prompt from `DS3.pdf` and
verifying the reasoning and correct answer from `DS3_solutions.pdf` — never from only
one of the two files. No `ds3-*` question was generated from a question/solution pair
that couldn't be confidently matched between the two files; all four DS3 question
items matched cleanly (numbering and content lined up 1:1 between the two PDFs), so no
`ds3-*` question required a `needsReview` flag.

## 2026-07-11 New Question Quality Audit

A focused quality audit was performed on exactly the 95 questions added in the
2026-07-11 update above (`class6-*`, `ecb-*`, `ds3-*`, `quiz2-*`, `formula-*` — see
`docs/update-notes/2026-07-11-new-question-quality-audit-plan.md` and
`-results.md` for the full scope and outcome). The pre-existing 138-question bank
was not re-audited. Findings and fixes:

- **Verbatim-wording violations (7 questions rewritten).** Re-reading the extracted
  `DS3.pdf`/`DS3_solutions.pdf` and Quiz 2 PDF text side-by-side with the shipped
  questions turned up several cases where a question's stem and/or all four answer
  choices were near-verbatim (in one case, fully verbatim) reuses of the source's own
  wording, rather than genuine paraphrases:
  - `ds3-moneydemand-slope-001` and `ds3-fed-openmarket-001` reused DS3's own answer-
    choice phrasing and question stem almost word-for-word.
  - `quiz2-costofinvestment-001` and `quiz2-lowerrealrate-capitalflows-001` reused the
    original Canvas quiz's exact four answer-choice pairings, just reformatted from
    fill-in-the-blank to full sentences.
  - `quiz2-ricardianequivalence-001`'s stem was an almost word-for-word copy of the
    original quiz question's descriptive clause.
  - `quiz2-capitalinflows-def-001` — the question specifically meant to reinforce the
    user's missed "capital inflows" concept from Quiz 2 — was a **100% verbatim copy**
    of the original quiz question's stem and all four choices. This was the most
    serious finding in the audit, precisely because it was the question the task most
    wanted paraphrased and reinforced correctly.
  
  All seven were rewritten with fresh scenarios, phrasing, and (where applicable)
  distractor sets while preserving the exact same tested concept and correct answer.
- **Source-grounding gap (1 question rewritten).** `formula-supplydemand-002`
  originally tested a price ceiling causing a shortage, citing `class1` as the
  source. Re-extracting `HarvardS10b_Class1.pptx` directly (all 38 slides) found no
  mention of "ceiling," "floor," "shortage," or "price control" anywhere in the deck,
  and `class1`'s own `coverageSummary` in `data/sources.json` doesn't list price
  controls either. The question was rewritten to test a supply-shift
  re-equilibration instead (still class1-grounded via its "linear supply/demand
  equations" and "causes of shifts in supply and demand" content), using the same
  linear-equation-solving technique.
- **Correctness/ambiguity fix (1 question).** `ds3-fedresponse-liquidity-001`'s
  distractor "raise the required reserve ratio" was actually **also** a valid way to
  decrease the money supply (DS3's own solutions confirm raising the reserve ratio
  decreases the money supply), making the question have two defensibly-correct
  answers. Changed that distractor to "lower the required reserve ratio" (which
  increases the money supply — unambiguously wrong for the stated goal). The same
  question also referenced "the scenario above," which breaks when the app displays
  it standalone (e.g., in Shuffle Mixed Practice) rather than immediately after its
  companion question; rewritten to restate its own scenario inline.
- **`questionType` mislabels (6 questions reclassified `standard` → `vocab`):**
  `ecb-target-001`, `ecb-coldprogression-001`, `ecb-debtdeflation-001`,
  `ecb-secondround-001`, `class6-reserveratio-001`, `class6-100pctreserve-001`. Each
  is a pure "X refers to / is defined as" term-recognition question with no scenario
  application or calculation, matching the vocab rule in
  `docs/question-authoring-guide.md` (and the guide's own example pattern) rather
  than the `standard` type they'd been given.
- **Difficulty mislabels (2 questions, `medium` → `easy`):**
  `class6-shadowbanking-001` (a direct-recall fact, same structure as the `easy`
  sibling `class6-bankingpanics-001`) and `class6-riskpremium-001` (a single-step
  addition, same structure as other `easy`-tier single-operation formula questions).
- **Grounding-citation precision (1 question).** `formula-loanable-002` tests solving
  a linear loanable-funds equilibrium (S(r) = I(r)); the loanable-funds concept is
  taught in `class5`, but representing supply/demand-style relationships as solvable
  linear equations is the technique specifically taught in `class1`. Added `class1`
  to its `sourceIds`/`sourceLabel` alongside `class5`.
- **Minor scenario-naming precaution (1 question).** `formula-growth-003` used the
  country name "Poorland," one of the two exact country names (`Richland`/
  `Poorland`) from `ds2`'s own worked catch-up-growth example. Renamed to "Farland"
  to fully avoid the overlap, consistent with the no-verbatim-scenario convention
  already documented under "Assumptions made" below.
- **Coverage gap (1 question added).** `class6`'s stocks content (dividends, capital
  gains, present value of a stock) had no dedicated question — only indirectly
  touched via the risk-premium and EMH questions. Added `class6-stocks-001` to close
  this gap. This is the only net addition; no question was removed.

**No `needsReview` items were required.** Every issue found during this audit was
directly fixable (a rewrite, a reclassification, or a small correction) rather than
a case of genuinely unverifiable or ambiguous source content, so no in-scope question
needed the flag. All 96 questions currently attributed to `class6`, `guest_lecture_ecb`,
`ds3`, `quiz2`, or a `formula-*` ID (95 from the original update plus the one
`class6-stocks-001` addition) have been read against their source text (or, for
`formula-*`, had their arithmetic independently recomputed) as part of this audit and
are considered verified.

## 2026-07-12 Exam Materials Integration

Added one new source, `midterm_review` (`MidtermStudyMaterials_Summer2026.doc`),
and generated 17 new practice questions from it, split across six existing topics
(`saving-investment`, `gdp-cpi-inflation`, `gdp-accounting`,
`growth-accounting-compound-growth`, `loanable-funds`, `financial-markets`,
`capital-flows`, `money-banking` — no new topics were created). See
`docs/update-notes/2026-07-12-exam-materials-plan.md` and
`-results.md` for the full planning note and per-question audit table.

**Academic-integrity check performed before any question generation.** This file
was read in full (converted to plain text via macOS's `textutil`, since it is a
legacy `.doc` binary format) specifically to confirm it was appropriate to use.
It is an instructor-released study guide, not a live or current exam: it is
explicitly titled "Study Outline for Ec S10b Midterm Exam" and "Practice
Problems for Ec S10b Midterm," includes a "Suggested Solutions to Extra Midterm
Practice Problems" section addressed to students, and its own text frames the
practice problems as illustrative ("only meant to be suggestive of what you
might see on the exam"), not as exam content itself. The file's metadata lists
"Last Saved By: Tanseli Savaser," matching the instructor named on the Class 1
slides. No file was excluded on academic-integrity grounds in this update.

**Topics covered:** the document has two parts — a topic-outline section (used
only to confirm topic coverage/emphasis for this batch, not mined directly into
questions, since it's a bulleted list with no gradeable content of its own and
nearly every topic it names is already covered by the existing Class 1-6/DS1-3/
Quiz 2 sources) and 11 worked practice problems with full suggested solutions
(the source of every new question): the closed-economy saving/investment
identity, a real loan-repayment calculation (Fisher equation + compound
interest), a wealth-effect-on-saving question, a four-firm value-added GDP
calculation, CPI-indexing the minimum wage, a labor-productivity counterfactual-
growth comparison (split into a single-rate and a piecewise dual-rate compounding
question), a multi-part national/private/public saving problem that introduces a
perfectly vertical (interest-rate-insensitive) saving-supply curve, an inventory-
drawdown GDP-timing question, a two-period stock-present-value calculation with a
risk premium, a compound real-GDP growth-rate calculation, and an open-economy
loanable-funds question about a foreign income shock's effect on U.S. capital
inflows.

**Extraction reliability:** the `.doc` file converted cleanly to plain text via
`textutil` with no illegible sections or formatting corruption (confirmed by
reading the full converted output). **A full answer key (the "Suggested
Solutions" section) was available** for every one of the 11 practice problems,
and every solution's arithmetic was independently recomputed (not just read) via
a standalone verification script before any question was written with fresh
numbers.

**One adaptation worth flagging:** the open-economy practice problem's own
suggested solution included a secondary claim about the effect on U.S. net
exports (NX) that rests on a looser, more debatable mix of price and quantity
trade effects than the same problem's much cleaner capital-inflows (KI) claim,
which follows directly from the S + KI = I framework Class 5 teaches. The
adapted question (`graph-examprep-foreignshock-001`) keeps only the clean,
defensible capital-inflows mechanism and omits the debatable NX claim rather
than presenting it as a settled correct answer. The scenario was also changed
to a fictional country (Nortavia) instead of reusing the source's real-country
example, consistent with this bank's no-verbatim-scenario convention.

**No question required a `needsReview` flag.** Every one of the 17 new
questions' underlying concept and arithmetic was independently verified against
the source's own worked solution before being written with a fresh scenario/
numbers, per the no-verbatim-copying rule.

**Raw materials remain local-only.** `MidtermStudyMaterials_Summer2026.doc`, like
every other file in `private-materials/`, is excluded from git via `.gitignore`
and was never staged or committed; only the derived `data/questions.json` entries
and this documentation are part of the public repository.

## 2026-07-12 Midterm Review Quality Audit

A focused quality audit was performed on exactly the 17 questions added from
`midterm_review` in the "2026-07-12 Exam Materials Integration" update above
— see `docs/update-notes/2026-07-12-midterm-review-quality-audit-plan.md` and
`-results.md` for the full scope and outcome. No other question in the bank
was re-audited.

- **Near-verbatim sentence-architecture copying (8 of 17 questions rewritten).**
  Side-by-side comparison against a freshly re-extracted copy of
  `MidtermStudyMaterials_Summer2026.doc` found that 8 questions — despite
  already using fresh numbers, per the no-verbatim-answer-key rule — had
  preserved the source's own worked problem's exact sentence structure and
  clause order, only substituting numbers and light synonyms (a "mad-libs"
  pattern): `formula-examprep-closedeconomy-si-001`,
  `formula-examprep-realrepayment-001`, `formula-examprep-valueadded-001`,
  `formula-examprep-cpiindex-001`, `formula-examprep-nationalsaving-001`,
  `formula-examprep-nationalsaving-002`, `graph-examprep-verticalsaving-001`,
  and `formula-examprep-stockpv-001`. All eight were rewritten with
  restructured sentence architecture, new cover stories/framings (e.g., a
  logging-to-furniture supply chain instead of the source's chip-and-license
  chain; a pension instead of a minimum-wage indexing problem; a food-truck
  loan instead of a student loan), and new numbers, while preserving the
  identical tested concept and correct-answer logic. Every replacement
  number set was independently re-verified via a fresh arithmetic script
  before being written. This finding prompted a new documented rule in
  `docs/question-authoring-guide.md` (see "Avoid 'mad-libs' number
  substitution" under the no-verbatim-wording section) since it's a distinct
  failure mode from both previously-documented verbatim risks (exact numbers,
  and exact answer-choice sets).
- **Two questions updated only for scenario consistency, not source
  fidelity.** `formula-examprep-nationalsaving-002` and
  `graph-examprep-verticalsaving-001` are a deliberate two-question
  continuation (see the plan doc's self-containment check); their dollar
  figures were updated to cascade from Fix 5's new numbers in
  `formula-examprep-nationalsaving-001`, and both were re-confirmed to fully
  restate every number needed to answer standalone (e.g., outside sequential
  Midterm Review play). The diagram SVG in `graph-examprep-verticalsaving-001`
  needed no changes — it uses only abstract `S`/`S'`/`I`/`E`/`E'` labels, no
  embedded dollar figures — and its line-intersection geometry was
  independently re-verified as still accurate.
- **No arithmetic errors, distractor-defensibility issues, explanation-
  fidelity issues, diagram-geometry issues, difficulty/questionType/topic
  mislabels, or duplication issues were found** among the 17 questions —
  these audit dimensions all passed cleanly and required no fixes. The 9
  questions not listed above (`standard-examprep-housingsavings-001`,
  `standard-examprep-valueadded-002`, `formula-examprep-
  productivitycounterfactual-001`, `formula-examprep-
  productivitycounterfactual-002`, `formula-examprep-inventorysale-001`,
  `formula-examprep-realgdpgrowth-001`, `graph-examprep-foreignshock-001`,
  `standard-examprep-usnxki-001`, `vocab-examprep-moneyassets-001`) needed no
  changes at all.
- **Coverage/duplication check:** confirmed all 11 of the source's worked
  practice problems remain represented in the 17-question batch with no
  duplicates; the batch was kept at 17 questions (no additions, no removals).
- **No `needsReview` items required.** Every issue found was directly
  fixable via rewrite; none of the 17 questions involved genuinely
  unverifiable or ambiguous source content. All 17 remain `needsReview:
  false`.

## Assumptions made

- Where a slide names a general relationship without a numeric example (e.g., "which of
  the 8 factors determine labor productivity"), the question tests recall/recognition
  of the listed factor rather than inventing a calculation the slide doesn't support.
- Where discussion-section problems used real country names for illustrative purposes
  (Canada/USA, Richland/Poorland), the practice questions sometimes use renamed
  countries (Northland/Southland, Country X/Y) with new numbers, to keep the practice
  bank distinct from a straight copy of the answer key while testing the identical
  underlying skill (computing opportunity cost, comparative advantage, or catch-up
  growth time).
