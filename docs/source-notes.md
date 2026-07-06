# Source Notes

This document summarizes how the initial Econ 10b question bank was derived from the
uploaded course materials, so future contributors know what has and hasn't been
verified against the source content.

## Materials used

| Source ID | File | What it covers |
|---|---|---|
| `class1` | `HarvardS10b_Class1.pptx` | Cost-benefit principle, economic surplus, opportunity cost, marginal analysis, absolute/comparative advantage, PPCs, supply and demand, market equilibrium, shifts, market surplus, linear supply/demand equations, market failure causes. |
| `class2` | `HarvardS10b_Class2.pptx` | GDP measurement (market value, final vs. intermediate goods, value added, expenditure/income approaches), difficulties measuring GDP, real vs. nominal GDP, CPI, price indices, inflation, real interest rates, the Fisher effect, indexing, CPI substitution/quality-adjustment bias. |
| `class3` | `HarvardS10b_Class3.pptx` | Labor demand/VMP, diminishing returns to labor, labor supply/reservation wage, shifts in labor markets, the productivity-wage slowdown (1970s) and divergence (1990s), globalization and wage inequality, skill-biased technological change, economics of superstars, policy responses, GDP-per-capita decomposition. |
| `class4` | `HarvardS10b_Class4.pptx` | Compound growth formula, Rule of 72, historical living standards, cross-country growth divergence, 8 determinants of labor productivity, diminishing returns to capital, institutions, the USSR case study, government growth policies, poverty traps, limits of growth. |
| `ds1` | `DS1_solutions.pdf` | Worked solutions: PPCs/gains from trade (Canada/USA honey and maple syrup), GDP calculation via three methods (Microsoft chip example), CPI/inflation/deflating/indexing (grad student example), market equilibrium algebra, demand shifters, marginal analysis (lemonade stand). |
| `ds2` | `DS2_solutions.pdf` | Worked solutions: labor demand/VMP, shifts in labor demand/supply (opticians, pilots), average labor productivity and GDP-per-capita decomposition, cross-country growth catch-up calculations (Richland/Poorland). |
| `ps1_solutions` | `Problem Set1_Solutions.pdf` | Worked solutions: marginal analysis (compost, calling plans), PPCs/comparative advantage (Helen, Tom and Susan), demand shifters and supply/demand shifts, GDP components and edge cases (inventory, existing assets, transfers, multi-year international goods), CPI/inflation, real interest rates. |

All seven files were extracted programmatically: the `.pptx` files with `python-pptx`
(slide text, tables, and speaker notes), and the `.pdf` files with `pdftotext -layout`.
Every extraction completed cleanly with no OCR failures or corrupted pages.

## How questions were generated

- Every question in `data/questions.json` is paraphrased from, or a new numeric variant
  of, a concept or worked example that actually appears in one of the seven files above.
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

**All 102 questions currently have `needsReview: false`.** None of the source content
used was unclear, unreadable, or partially unreadable — every table and text block that
questions are based on extracted completely and unambiguously. If a future update
introduces a source with illegible tables, low-quality scans, or truncated slides, mark
any question derived from that unclear content with `needsReview: true` and add a note
here describing what a human should confirm before treating it as verified. See
`docs/question-authoring-guide.md` for the mechanics of setting that flag.

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
