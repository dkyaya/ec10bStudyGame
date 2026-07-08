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

The question bank (138 questions as of the 2026-07-07 Class 5 update) was generated from:
- `HarvardS10b_Class1.pptx`, `HarvardS10b_Class2.pptx`, `HarvardS10b_Class3.pptx`, `HarvardS10b_Class4.pptx`, `HarvardS10b_Class5.pptx` — lecture slides
- `DS1_solutions.pdf`, `DS2_solutions.pdf` — discussion-section worked solutions
- `Problem Set1_Solutions.pdf` — problem-set worked solutions

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

All eight files were extracted programmatically: the `.pptx` files with `python-pptx`
(slide text, tables, and speaker notes), and the `.pdf` files with `pdftotext -layout`.
Every extraction completed with no OCR failures or corrupted pages. One partial exception
was found during the 2026-07-06 audit: see "Known extraction gaps" below.

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

**All 138 questions currently have `needsReview: false`**, including all 34 questions
added from `class5` in the 2026-07-07 update (see below). Every Class 5 question is
grounded in extractable slide bullet text or speaker notes; none rely on the chart- or
photo-only slides in that deck, so none needed the flag. The 104 pre-Class-5 questions'
status was re-confirmed during the 2026-07-06 question-bank quality audit (see below):
every question's concept, numbers, and correct answer were checked directly against the
extracted source text, and every check passed or was fixed in place. The one extraction
gap found (see "Known extraction gaps" above) does not affect any specific question's
verifiability. If a future update introduces a source with illegible tables, low-quality
scans, or truncated slides, mark any question derived from that unclear content with
`needsReview: true` and add a note here describing what a human should confirm before
treating it as verified. See `docs/question-authoring-guide.md` for the mechanics of
setting that flag.

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
