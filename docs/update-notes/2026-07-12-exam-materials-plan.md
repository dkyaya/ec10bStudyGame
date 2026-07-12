# Exam Materials Plan — 2026-07-12

Plan for incorporating a newly added midterm-prep document from
`private-materials/` into the Econ 10b study game, per the academic-integrity-
gated workflow described in the task.

## Files found in `private-materials/`

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
| `MidtermStudyMaterials_Summer2026.doc` | **New** |
| `README.local.md` | Not a source file — local workflow documentation only |
| `.DS_Store` | System file, not content |

Exactly **one** new file was found: `MidtermStudyMaterials_Summer2026.doc`.

## Academic-integrity assessment

This file was opened and read in full (converted to plain text via macOS's
`textutil`, since it is a legacy `.doc` binary format) before any question
generation began, specifically to check for the concern flagged in this task.

**Determination: legitimate, instructor-released study material. Safe to use.**

Evidence:

- The document is explicitly titled **"Study Outline for Ec S10b Midterm Exam"**
  and **"Practice Problems for Ec S10b Midterm"**, followed by a section
  explicitly titled **"Suggested Solutions to Extra Midterm Practice Problems."**
  A live/current exam would not ship with a "suggested solutions" section
  addressed to students.
- The document's own text explicitly frames itself as a study aid, not a graded
  instrument: *"Note: The exam will include a mix of short answer questions,
  True and False questions..., and analytical...questions... The questions
  provided here are only meant to be suggestive of what you might see on the
  exam. They are more important as a check on your conceptual understanding of
  the material."*
- The file's embedded document metadata lists **"Last Saved By: Tanseli
  Savaser"** — the same instructor named as "Professor Tanseli Savaser" on
  Class 1's own slides — consistent with this being instructor-authored course
  material for this specific class, not a leaked or misappropriated file.
- The document's outline section repeatedly directs students to office hours,
  posted notes, and class slides for further study, and explicitly disclaims
  that it does *not* cover everything on the exam — standard framing for a
  released study guide, not exam content itself.
- Nothing in the file's content, filename, or metadata suggests it is an
  unreleased, live, or currently-administered exam. No answer key was found
  attached to an otherwise-unreleased/live instrument — the "Suggested
  Solutions" are for the *practice* problems explicitly labeled as practice,
  not for a live exam's own questions.

No file was excluded on academic-integrity grounds. No file requires stopping to
report a concern.

## Document structure and what will (and won't) be mined for questions

The document has two parts:

1. **A topic outline** (~90 lines): a bulleted list of exam-relevant topics
   (GDP measurement, CPI/inflation, labor productivity and inequality, economic
   growth, saving/investment, loanable funds, government budgets, open-economy
   capital flows, financial markets, money and money creation). This section
   contains no gradeable content of its own (no numbers, no distinct claims to
   test) — it is used only to **confirm topic coverage and emphasis** for the
   new question batch (Part E balancing), not mined line-by-line into
   questions. Nearly every topic it lists is already well-represented elsewhere
   in the bank from the underlying lecture/discussion-section sources; directly
   quizzing the outline itself would just be shallow "read the syllabus"
   trivia, not exam-style practice.
2. **11 practice problems with full worked solutions** (~115 lines): this is
   the substantive, gradeable content, and is the source for all new questions
   in this update. Several problems are multi-part (e.g., a saving/investment
   problem with four sub-calculations plus a graph), so a subset are split into
   more than one question where they genuinely test distinct skills — never
   split just to inflate the count.

## Proposed source ID and question count

- Proposed source ID: **`midterm_review`**
- Type: `midterm-study-guide-and-practice-problems`
- Target question count: **~17** — this document is denser than the 10-question
  Canvas Quiz 2 (which generated ~12 questions) but is a single moderate-length
  document (9 pages, 2,415 words, 11 core problems), not a full past exam or a
  large problem-set solutions file; 17 questions reflects that density without
  padding, extracting 1-3 genuinely distinct sub-questions per problem where
  the problem has multiple gradeable parts.

## Proposed topics (all existing — no new topics needed)

| Practice problem | Topic(s) | Notes |
|---|---|---|
| P1: closed-economy S/I identity | `saving-investment` | |
| P2: real loan repayment (Fisher + compounding) | `gdp-cpi-inflation` | |
| P3: housing prices and the savings rate (T/F → MC) | `saving-investment` | |
| P4: value-added GDP (4-firm chain) | `gdp-accounting` | split into a calculation question + a conceptual "why do the methods agree" question |
| P5: CPI-indexing the minimum wage | `gdp-cpi-inflation` | |
| P6: labor-productivity counterfactual growth | `growth-accounting-compound-growth` | split into a single-rate and a piecewise dual-rate compounding question — genuinely distinct calculation techniques |
| P7: national/private/public saving + a budget increase with a **vertical** saving-supply curve | `saving-investment` (calculations) + `loanable-funds` (graph) | the vertical-S variant is a new diagram pattern not yet in the bank |
| P8: inventory sold off in a later year | `gdp-accounting` | |
| P9: stock present value with a risk premium (2-period) | `financial-markets` | |
| P10: compound real-GDP growth rate | `growth-accounting-compound-growth` | |
| P11: a foreign-income shock's effect on the U.S. open-economy loanable-funds market | `capital-flows` | adapted to a fictional country and narrowed to the clean, defensible capital-inflows mechanism (see "Files/content excluded or adapted" below) |

Plus two small vocab/standard additions grounded in outline items not otherwise
directly tested elsewhere: the sign of NX and KI for the actual U.S. economy
(`capital-flows`), and money's status as a zero-nominal-interest asset compared
to loans/bonds/stocks (`money-banking`).

## Content excluded or adapted, and why

- **The topic-outline section** is not mined directly into questions (see
  above) — used only for coverage confirmation.
- **Problem 11's "NX" claim.** The source's own suggested solution asserts that
  rising Chinese consumption and export prices would *lower* U.S. NX, but the
  reasoning given for that specific claim is a looser, more debatable mix of
  effects (price and quantity effects on imports pulling in different
  directions) than the problem's *capital-inflows* claim, which follows
  cleanly from the S + KI = I framework Class 5 teaches. The adapted question
  keeps only the clean, defensible capital-inflows mechanism (a foreign
  income/consumption increase reduces the foreign saving available to flow
  abroad, reducing KI into the U.S.) and drops the NX claim rather than
  presenting a debatable causal chain as a settled correct answer. The country
  is also renamed to a fictional one rather than reusing "China," consistent
  with this bank's established no-verbatim-scenario convention.
- **No content was skipped for being unclear or unreadable** — the `.doc` file
  converted cleanly to plain text via `textutil` with no illegible sections,
  and every practice problem's solution was present and internally consistent
  (independently re-verified arithmetically before use — see the results note).

## Midterm Review mode — design decision

Rather than adding a new schema field (`examTag`/`reviewSet`), Midterm Review
mode will filter directly on the existing, already-validated `sourceIds` field:
any question whose `sourceIds` includes `midterm_review`. Since exactly one new
source is being added in this update and no existing question needs to be
retroactively tagged, this is simpler and avoids schema growth for no benefit —
`sourceIds` already unambiguously identifies which questions belong to this
review set. If a future update adds a second exam-prep source that should
*share* a single "exam review" filter with this one, a dedicated field can be
added then; introducing it now for a single source would be premature.

See `docs/update-notes/2026-07-12-exam-materials-results.md` for the actual
question list, counts, and any `needsReview` items once question authoring is
complete.
