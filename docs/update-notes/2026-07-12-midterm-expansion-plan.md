# Midterm Review Expansion Plan — 2026-07-12

Plan for roughly quadrupling the Midterm Review question set, per the
academic-integrity-gated expansion workflow described in the task.

## Files in `private-materials/` considered

| File | Status |
|---|---|
| `HarvardS10b_Class1.pptx` | Already represented (`class1`) |
| `HarvardS10b_Class2.pptx` | Already represented (`class2`) |
| `HarvardS10b_Class3.pptx` | Already represented (`class3`) |
| `HarvardS10b_Class4.pptx` | Already represented (`class4`) |
| `HarvardS10b_Class5.pptx` | Already represented (`class5`) |
| `HarvardS10b_Class6_7.pptx` | Already represented (`class6`) |
| `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` | Already represented (`guest_lecture_ecb`) |
| `DS1_solutions.pdf` | Already represented (`ds1`) |
| `DS2_solutions.pdf` | Already represented (`ds2`) |
| `DS3.pdf` / `DS3_solutions.pdf` | Already represented (`ds3`) |
| `Problem Set1_Solutions.pdf` | Already represented (`ps1_solutions`) |
| `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` | Already represented (`quiz2`) |
| `MidtermStudyMaterials_Summer2026.doc` | Already represented (`midterm_review`) |
| `README.local.md` | Not a source file — local workflow documentation only |
| `.DS_Store` | System file, not content |

**No new sheet/exam-prep file was found.** Every file currently present in
`private-materials/` is already represented by an existing entry in
`data/sources.json` (13 sources, matching the 13 content files). The most
recently modified content file, `MidtermStudyMaterials_Summer2026.doc`
(`midterm_review`), was already fully incorporated in the prior update
(2026-07-12, commit `307509c`) and audited for wording fidelity
(commit `cc9c8c7`). This update therefore **expands the existing
`midterm_review` question set** rather than adding a new source.

## Academic-integrity assessment

No file in `private-materials/` shows any sign of being an unreleased, live,
or currently-administered exam. `midterm_review` (the only exam-prep source)
was already determined to be legitimate, instructor-released study material
in the prior plan (`docs/update-notes/2026-07-12-exam-materials-plan.md`):
it is explicitly titled a study outline and practice-problem set with
"Suggested Solutions," addressed directly to students, and its metadata
attributes it to the course's own instructor. That determination still
holds; nothing has changed about the file since. No new file was found that
requires a fresh determination.

## Source already represented

- `midterm_review` = `MidtermStudyMaterials_Summer2026.doc` — no changes to
  its `data/sources.json` entry are needed; its coverage summary already
  reflects the full document (topic outline + 11 worked practice problems).

No new source ID is being added (no `midterm_sheet`/`exam_review_sheet`/
`practice_sheet`). `src/scoring.js` already centralizes the Midterm Review
filter in a `MIDTERM_REVIEW_SOURCE_IDS` Set (currently just
`"midterm_review"`), added in the prior update specifically so a future
second exam-prep source could be added without touching filter logic in
multiple places. That structure is reused as-is; since no second source
exists yet, the Set is left unchanged.

## Target question counts

- Current Midterm Review count: **17** (11 formula, 2 graph, 3 standard,
  1 vocab).
- Target: roughly quadruple, to about **68**.
- Plan: add **52** new questions, all sourced from `midterm_review`'s 11
  worked practice problems (never from the topic-outline section, which has
  no gradeable content of its own — consistent with how the source was
  handled in the prior update). This lands the set at **69** total, which is
  "roughly 68" and reflects genuine multi-directional coverage of the 11
  problems rather than a hard stop at a round number.
- Target type mix for the added 52: 27 formula, 15 standard, 7 graph,
  3 vocab. Combined with the existing 17, final Midterm Review type mix:
  **38 formula, 18 standard, 9 graph, 4 vocab** — within the task's
  suggested ranges (35–45 formula, 8–12 graph, 12–18 standard, 3–6 vocab).

## Concept coverage plan (by worked practice problem)

| # | Practice problem | Topic(s) | New variants planned |
|---|---|---|---|
| 1 | Closed-economy S = I | `saving-investment` | 3 (reverse-solve for S given I+deficit; surplus case; diagnose "add the deficit" mistake) |
| 2 | Real loan repayment (Fisher + compounding) | `gdp-cpi-inflation` | 4 (new compute scenario; reverse-solve for inflation; compare two savers; diagnose "add inflation" mistake) |
| 3 | Housing prices and the savings rate | `saving-investment` | 3 (compare active saving vs. capital gains; diagnose a classmate's claim; vocab on "capital gain") |
| 4 | Value-added GDP (4-firm chain) | `gdp-accounting` | 5 (5-firm compute; reverse-solve a missing firm's value added; diagnose double-counting magnitude; compare two chains of different length; vocab on "value added") |
| 5 | CPI-indexing the minimum wage | `gdp-cpi-inflation` | 4 (new compute scenario; reverse-solve the CPI; compare indexed vs. fixed nominal amounts; diagnose an inverted ratio) |
| 6 | Labor-productivity counterfactual growth | `growth-accounting-compound-growth` | 5 (new single-rate multiple; Rule-of-72 doubling-time variant; new dual-rate comparison; diagnose additive-vs-compound reasoning; reverse-solve the slower rate given the gap) |
| 7 | National/private/public saving + vertical saving-supply curve | `saving-investment` / `loanable-funds` | 12 (new compute; reverse-solve net taxes; tax-cut variant; diagnose two formula mistakes; compare a spending increase vs. an equal tax cut; vertical-vs-sloped-curve comparison; reverse (saving increase) shift; investment-demand-shift variant; identify-the-shift for a shrinking deficit; vocab on "crowding out") |
| 8 | Inventory sold off in a later year | `gdp-accounting` | 3 (partial sell-off variant; reverse-solve the required inventory-investment offset; diagnose "sold = GDP" reasoning) |
| 9 | Two-period stock present value with risk premium | `financial-markets` | 4 (new compute scenario; reverse-solve the implied risk premium; compare two stocks with different premiums; diagnose a risk-free-only discounting mistake) |
| 10 | Compound real-GDP growth rate | `growth-accounting-compound-growth` | 3 (new compute scenario; reverse-solve the starting GDP; diagnose simple-average-vs-compound reasoning) |
| 11 | Foreign-income-shock open-economy loanable funds | `capital-flows` | 6 (S+KI=I compute; reverse-direction recession shock; compare boom vs. recession shocks; graph description of the shift/equilibrium; closed→open economy transition; KI falling to zero) |

Every new question is a fresh scenario (new entities, new numbers, new
sentence structure) testing the same underlying skill as one of the 11
worked problems — never a "mad-libs" number swap on the original problem's
own sentence architecture, and never reusing the original problem's exact
numbers, company/country names, or answer-choice wording/order.

## Content excluded, and why

- The topic-outline section of `MidtermStudyMaterials_Summer2026.doc` is
  still not mined into questions (same rationale as the prior update: it's a
  bulleted list with no gradeable content, and its topics are already
  covered elsewhere in the bank).
- No practice problem was skipped. All 11 have at least 3 new variants.
- No `needsReview` flags were needed — every new question's economics and
  arithmetic were independently verified before authoring (see the results
  doc for the verification method).

See `docs/update-notes/2026-07-12-midterm-expansion-results.md` for the
actual question list, final counts, and verification results.
