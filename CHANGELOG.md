# Changelog

## 2026-07-11 11:21 — New Question Quality Audit

### Added
- `class6-stocks-001`: a new question covering Class 6's stocks/dividends/capital-
  gains content, which had no dedicated question in the prior update. This is the
  only net addition from this audit — no question was removed.
- `docs/update-notes/2026-07-11-new-question-quality-audit-plan.md` and
  `-results.md`: the audit scope/plan and the detailed results, including a
  per-question fix table.
- Two new rules in `docs/question-authoring-guide.md`: the no-verbatim rule now
  explicitly covers answer-choice wording/structure (not just numbers), and a new
  rule that every question must be self-contained (no "the scenario above" /
  cross-question references), since the app displays one question at a time.

### Changed
- Reclassified 6 questions from `questionType: "standard"` to `"vocab"`
  (`ecb-target-001`, `ecb-coldprogression-001`, `ecb-debtdeflation-001`,
  `ecb-secondround-001`, `class6-reserveratio-001`, `class6-100pctreserve-001`) —
  each is a pure term-to-definition question that matches the vocab rule better than
  its prior `standard` label. Vocabulary questions: 38 (was 32).
- Relabeled difficulty on 2 questions from `medium` to `easy`
  (`class6-shadowbanking-001`, `class6-riskpremium-001`) for consistency with
  structurally identical sibling questions already labeled `easy`.
- Added `class1` as a co-source (`sourceIds`/`sourceLabel`) on `formula-loanable-002`,
  since solving its loanable-funds equilibrium as linear equations is a technique
  taught in `class1`, not just the loanable-funds concept taught in `class5`.
- Renamed a scenario country name in `formula-growth-003` ("Poorland" → "Farland")
  to fully avoid overlapping with one of `ds2`'s own two example country names.

### Fixed
- **Verbatim-wording violations (7 questions rewritten).** A source-fidelity re-read
  found several `ds3-*`/`quiz2-*` questions whose stems and/or all four answer
  choices were near-verbatim (in one case, 100% verbatim) reuses of the original
  DS3/Quiz 2 source text: `ds3-moneydemand-slope-001`, `ds3-fed-openmarket-001`,
  `quiz2-costofinvestment-001`, `quiz2-lowerrealrate-capitalflows-001`,
  `quiz2-ricardianequivalence-001`, and — most notably — `quiz2-capitalinflows-def-001`
  (the question specifically meant to reinforce the user's missed "capital inflows"
  concept, which was a straight copy of the original quiz question). All seven were
  rewritten with fresh scenarios/phrasing while preserving the exact tested concept
  and correct answer.
- **Source-grounding gap.** `formula-supplydemand-002` tested price ceilings and
  shortages, citing `class1` — but re-extracting `HarvardS10b_Class1.pptx` directly
  confirmed no mention of "ceiling," "floor," "shortage," or "price control"
  anywhere in that deck. Rewrote the question to test a grounded supply-shift
  re-equilibration instead, using the same linear-equation technique class1 does
  teach.
- **Ambiguous distractor.** `ds3-fedresponse-liquidity-001`'s distractor "raise the
  required reserve ratio" was actually also a valid way to achieve the question's
  stated goal (per DS3's own solutions), making the question have two defensibly-
  correct answers. Changed the distractor to "lower the required reserve ratio"
  (unambiguously wrong). The same question also referenced "the scenario above,"
  which breaks when displayed standalone outside its original sequence; rewritten to
  restate its own scenario inline.

### Notes
- **Scope**: this audit covered exactly the 95 questions added by the same-day "New
  Midterm Materials and Formula Practice Mode" update (`class6-*`, `ecb-*`, `ds3-*`,
  `quiz2-*`, `formula-*`, or any question whose `sourceIds` includes `class6`,
  `guest_lecture_ecb`, `ds3`, or `quiz2`). The pre-existing 138-question bank was not
  re-audited.
- **Arithmetic**: independently recomputed all 40 in-scope formula-type questions'
  calculations (43 discrete checks) in a fresh script separate from the original
  authoring-time verification — **zero arithmetic errors found**. The prior update's
  math was correct; this audit's fixes were about wording fidelity, grounding, and
  labeling, not calculation mistakes.
- 76 of the 95 audited questions needed no changes at all — they were checked
  against source text and/or independently recomputed and found to be accurate,
  well-grounded, and appropriately labeled. This audit reports **verified and
  corrected**, not "found to be broken" — most of the batch held up well.
- `needsReview` count: **0** — every issue found was directly fixable (a rewrite, a
  reclassification, or a small correction), so no in-scope question needed the flag.
- Validation: `node scripts/validate-data.mjs` reports 234 questions, 17 topics, 12
  sources, 38 vocab questions, 40 formula questions, **0 errors, 0 warnings**.
- QA: reloaded the app via a headless Chrome session — console shows the app's own
  validation message ("234 questions passed all checks (38 vocab)") and no errors;
  confirmed Formula Practice (40 questions) and Vocabulary/Definitions (38
  questions) mode cards render with the updated counts. Independently re-simulated
  the answer-choice-shuffling logic across all 234 questions (3 shuffles each, 702
  total) with zero correctness mismatches, and confirmed zero duplicate question IDs.
- `localStorage` schema (`econ10bStudyGame:v1`) is unchanged; all fixed questions
  kept their existing IDs (only `class6-stocks-001` is a new ID), so no student
  progress is orphaned.
- No files from `private-materials/` were staged or committed; the app remains a
  static, no-build, no-backend site — GitHub Pages compatibility is unaffected.

## 2026-07-11 11:01 — New Midterm Materials and Formula Practice Mode

### Added
- Four new sources in `data/sources.json`: `class6` (`HarvardS10b_Class6_7.pptx` —
  money, banking, financial markets, and the 2007-9 crisis), `guest_lecture_ecb`
  (`Guest Lecture Slides - Price Stability and Monetary Policy.pptx`), `ds3` (a
  paired source combining `DS3.pdf` and `DS3_solutions.pdf`), and `quiz2` (`Quiz 2_
  Principles of Economics_ Macroeconomics.pdf`, used only for paraphrased practice —
  see Notes).
- Three new topics in `data/topics.json`: `money-banking`, `financial-markets`, and
  `monetary-policy`.
- 95 new questions in `data/questions.json`: 62 new source-ingestion questions from
  the four new sources above, plus 33 dedicated formula/quantitative word problems
  (Part G of this update) grounded in existing sources with entirely fresh numbers.
  Final bank: **233 questions** (up from 138), spanning **17 topics** (up from 14)
  and **12 sources** (up from 8).
- A new `questionType: "formula"` value and a new **Formula Practice** study mode
  (`src/app.js`, `src/render.js`, `src/scoring.js`): pulls every question tagged
  `"formula"` into a shuffled calculation/word-problem session, shows its count on a
  home-screen mode card (hidden if no formula questions exist), and displays a small
  green "Formula" badge in the quiz metadata row. Formula questions also appear
  normally in every other mode (Full Bank, Shuffle Mixed Practice, New/Unseen, Review
  Missed, Needs Review, and topic-specific practice/missed-review) — Formula Practice
  is a filtered view, not a separate bucket. **40 formula questions** total (was 0).
- `docs/update-notes/2026-07-11-new-materials-plan.md` and
  `docs/update-notes/2026-07-11-new-materials-results.md`: the planning note and
  source-to-question audit table for this update.
- New "Writing formula/quantitative practice questions" section in
  `docs/question-authoring-guide.md`, and new Formula Practice / badge / explanation
  checks in `docs/qa-checklist.md`.

### Changed
- `VALID_QUESTION_TYPES` in `src/data.js` and `scripts/validate-data.mjs` now accepts
  `"standard"`, `"vocab"`, or `"formula"` (previously just `"standard"`/`"vocab"`).
- `data/sources.json`'s `ds3` entry documents that it pairs two local files
  (`DS3.pdf` + `DS3_solutions.pdf`) in its `filename` and `reliabilityNotes` fields,
  per the task's paired-source handling — every `ds3-*` question was checked against
  both files together (prompt from `DS3.pdf`, verified answer from
  `DS3_solutions.pdf`).
- `docs/source-notes.md`: added detailed sections for all four new sources, a Canvas
  Quiz 2 interpretation note, a Discussion Session 3 paired-source note, and an
  updated `needsReview` status summary for the full 233-question bank.
- `README.md`: updated topic/source/question counts, added Formula Practice and
  Vocabulary mode descriptions, and noted the new midterm-prep coverage.
- Vocabulary questions: 32 total (up from 21; +11 new, from `class6`, `guest_lecture_ecb`,
  and `quiz2`).

### Fixed
- N/A (no bugs fixed by this change).

### Notes
- **Canvas Quiz 2 interpretation**: the `quiz2` PDF export renders each question's
  "Correct answer"/"Wrong answer" result label *after* that question's choices and
  immediately before the *next* question's number — a misleading layout that reads as
  if the label belongs to the following question. Per the user's own direct
  clarification (not derived from the scrambled labels): overall score was 8/10,
  Question 2 was correct, and Questions 3 and 10 were incorrect. No `quiz2-*`
  question reproduces the original quiz's wording; all are paraphrased practice
  questions, with extra weight on the two missed concepts (debt paydown reducing
  liabilities and raising wealth; capital inflows as purchases of domestic assets by
  foreigners vs. capital outflows as purchases of foreign assets by domestic
  households/firms). See `docs/source-notes.md` for the full note.
- **Discussion Session 3 pairing**: `DS3.pdf` (questions) and `DS3_solutions.pdf`
  (solutions) were combined into one paired source, `ds3`, per the task's paired-
  source handling, rather than two separate source IDs.
- Per the update's source restriction, no new source-ingestion questions were
  generated from `class1`-`class5`, `ds1`, `ds2`, or `ps1_solutions` — those sources
  were reused only as formula grounding for the dedicated Formula Practice batch
  (with fresh numbers, never the sources' own worked-example figures) and to avoid
  duplicate questions.
- `needsReview` count: **0** — no question in this update required the flag; every
  new question is grounded in cleanly extracted source text, independently
  double-checked arithmetic, or (for `quiz2`) the user's own confirmed quiz results.
- Validation: `node scripts/validate-data.mjs` reports 233 questions, 17 topics, 12
  sources, 32 vocab questions, 40 formula questions, **0 errors, 0 warnings**.
- QA: playtested via a headless Chrome session loading the app end-to-end — browser
  console shows the app's own validation message ("233 questions passed all checks")
  and no errors; confirmed the Formula Practice and Vocabulary/Definitions mode cards
  both render on the home screen with correct counts (40 and 32 questions
  respectively) alongside Full Bank, Shuffle Mixed Practice, Review Missed, and
  New/Unseen. Independently re-simulated the app's answer-choice-shuffling logic in
  Python across all 233 questions (3 shuffles each, 699 total) with zero correctness
  mismatches. Independently recomputed every formula question's arithmetic (61 checks
  across all calculation-based questions) against its stated correct answer with zero
  mismatches.
- `localStorage` schema (`econ10bStudyGame:v1`) is unchanged.
- No files from `private-materials/` were staged or committed; the app remains a
  static, no-build, no-backend site with only relative paths, so GitHub Pages
  compatibility is unaffected.

## 2026-07-08 00:00 — Answer Choice Shuffling

### Added
- Added `Utils.shuffleChoicesForSession(question)` in `src/utils.js`: given a question
  object, it returns a **new** object with `choices`, `answerIndex`, and
  `wrongExplanations` rebuilt in a freshly randomized order (via the existing
  Fisher-Yates `Utils.shuffle`), without mutating the input question or any of its
  arrays.

### Changed
- `startSession()` in `src/app.js` now maps every question in a new session through
  `Utils.shuffleChoicesForSession` before storing it on `session.questions`, so each
  quiz session (Full Bank, Shuffle Mixed Practice, Review Missed, New/Unseen, Needs
  Review, Vocabulary/Definitions, topic practice, and Review Missed in Topic) gets its
  own randomized answer-choice order. The shuffle happens once per session start, so
  the order stays stable while moving Previous/Next within that session, and a fresh
  shuffle happens every time a new session is started — including re-entering "Review
  Missed" from the Results screen.

### Fixed
- N/A (no bugs fixed by this change).

### Notes
- `data/questions.json` is never read from or written to differently — the shuffle
  operates purely on in-memory copies created at session start, so the source question
  bank on disk is untouched by playing the game.
- Correctness grading, the "Why the correct answer is right" explanation, and each
  wrong choice's matching wrong explanation all remain accurate after shuffling,
  because `answerIndex` and `wrongExplanations` are permuted using the exact same
  index mapping as `choices`.
- `localStorage` schema (`econ10bStudyGame:v1`) is unchanged. `Storage.recordAttempt`
  still stores a `lastAnswerIndex`, now relative to that session's shuffled order; this
  field was already write-only (never read back for display), so no existing behavior
  or stored progress is affected.
- Ran `node scripts/validate-data.mjs`: 138 questions, 14 topics, 8 sources, all checks
  passed with no errors or warnings.
- Playtested headlessly with a scripted Chromium (Playwright) session driving the real
  app end-to-end: verified choice order differs across fresh sessions, is stable across
  Previous/Next within a session, correct/incorrect grading and explanation-to-choice
  mapping stay accurate after shuffling, Vocabulary mode and a Review-Missed session
  (re-entered from Results) both shuffle and grade correctly, and no console or page
  errors occurred during the run.

## 2026-07-07 21:48 — Class 5 Questions and Vocabulary Mode

### Added
- Added `HarvardS10b_Class5.pptx` ("Class 5: Savings, Investment, Public Savings, and
  Capital Flows") as a new source (`class5`) in `data/sources.json`, and 34 new
  multiple-choice questions generated from it in `data/questions.json`. Question bank
  grows from 104 to 138 questions.
- Added 3 new topics to `data/topics.json` to cover Class 5 cleanly without overloading
  existing topics: `saving-investment` (Saving, Wealth, and Investment — 14 questions),
  `loanable-funds` (Loanable Funds and Government Budgets — 11 questions), and
  `capital-flows` (Capital Flows and Open-Economy Saving — 9 questions). Total topic
  count grows from 11 to 14.
- New Class 5 questions cover: saving vs. wealth, the saving rate, assets/liabilities/
  balance sheets/net worth, the three household saving motives (life-cycle,
  precautionary, bequest), real vs. nominal interest rates, the national/private/public
  saving identities (`S = Y − C − G`, `S_PRIVATE = Y − T − C`, `S_PUBLIC = T − G`),
  government budget surplus/deficit and Ricardian equivalence, investment and capital
  formation, the value of the marginal product of capital, the user cost of capital,
  the loanable funds market and crowding out, technology-driven investment-demand
  shifts, and open-economy capital flows (capital inflows/outflows, net capital
  inflows, the `S + KI = I` and `NX + KI = 0` identities, and the trade-deficit/
  capital-inflow relationship). Mix: 12 vocabulary/definition, 11 conceptual
  application, 8 calculation/identity, and 3 graph/comparative-static questions.
- Added a `"questionType"` field (`"standard"` or `"vocab"`) to the question schema and
  a new **Vocabulary / Definitions** study mode on the home dashboard: it pulls every
  question tagged `questionType: "vocab"` across the whole bank, shuffles them by
  default, shows the available count on its mode card, and only appears once at least
  one vocab question exists. Tagged questions still appear in their normal topic
  practice sessions and in Shuffle Mixed Practice — vocab is a filtered view, not a
  separate question set.
- Added a small "Vocab" badge to the quiz-question metadata row for questions with
  `questionType: "vocab"` (`.meta-vocab-badge` in `styles/main.css`).
- Tagged 9 pre-existing pure definition/term-recognition questions from Classes 1-3
  as `questionType: "vocab"` so they're included in the new mode:
  `class1-surplus-001`, `class1-reservationprice-002`, `class1-surplus-002`,
  `class2-qualitybias-001`, `class3-globalization-001`, `class3-sbtc-001`,
  `class3-mobility-001`, `class3-transitionaid-001`, `class4-humancapital-001`. Total
  vocab questions in the bank: 21.
- Added `Scoring.vocabQuestions()` in `src/scoring.js` and wired a `"vocab"` mode key
  through `src/app.js`'s `onModeSelect` and `src/render.js`'s study-mode card list.
- Updated `scripts/validate-data.mjs` and the in-browser validator in `src/data.js` to
  accept the optional `questionType` field, flag any value other than `"standard"` /
  `"vocab"` / omitted as invalid, and log a vocab-question count in their summary
  output.
- Updated `docs/question-authoring-guide.md` with a new "Writing vocabulary/definition
  questions" section (the `questionType` field, good vs. bad vocab distractor examples,
  and a reminder that vocab questions still need full source grounding and specific
  wrong explanations) and a new `data/sources.json` row plus source-extraction summary
  for `class5` in `docs/source-notes.md`.
- Updated `README.md` to mention the Class 5 topics, the new 138-question / 14-topic
  counts, and the Vocabulary / Definitions mode.

### Changed
- No existing question IDs, topic IDs, source IDs, or `localStorage` schema
  (`econ10bStudyGame:v1`) were renamed or altered — this update is purely additive to
  the existing static, no-build, no-backend GitHub Pages architecture.

### Fixed
- N/A — no defects found in the pre-existing 104-question bank during this update.

### Notes
- **`needsReview` status: all 138 questions have `needsReview: false`**, including all
  34 new Class 5 questions. Class 5's `.pptx` deck (44 slides) extracted cleanly via
  `python-pptx` with no illegible text; roughly half the deck (personal-saving-rate,
  federal-budget, debt-to-GDP, and trade-balance charts) is chart/photo-only content
  with no extractable numeric data and was not used as the basis for any question. The
  two worked numeric examples in the deck (the sample balance sheet and "John's Fishing
  Business") were used only to confirm the calculation method — every calculation
  question uses freshly constructed scenarios and numbers, per the no-verbatim-
  answer-key rule. See the "2026-07-07 Class 5" section of `docs/source-notes.md` for
  the full extraction and reliability writeup.
- `node scripts/validate-data.mjs` passes with **zero errors and zero warnings** on the
  resulting 138-question bank (21 of them tagged `questionType: "vocab"`).
- Verified locally end-to-end with a headless-Chromium playtest: app loads with no
  console/page errors; the Vocabulary / Definitions card appears on the home screen and
  correctly starts a shuffled vocab-only session with the "Vocab" badge showing;
  all 3 new Class 5 topic cards render and "Practice Topic" loads only that topic's
  questions; Shuffle Mixed Practice can draw Class 5 questions; a full topic quiz run
  reaches the Results screen with a working topic breakdown; New/Unseen and Reset
  Progress both work correctly afterward.
- No raw files from `private-materials/` were staged or committed; only
  `data/questions.json`, `data/topics.json`, `data/sources.json`, `src/scoring.js`,
  `src/app.js`, `src/render.js`, `src/data.js`, `scripts/validate-data.mjs`,
  `styles/main.css`, `docs/question-authoring-guide.md`, `docs/source-notes.md`,
  `README.md`, and this changelog changed.

## 2026-07-06 15:23 — Question Bank Quality Audit

### Added
- Added 2 new questions (`class1-marketfailure-001`, `class1-marketfailure-002`) under
  the existing `supply-demand-equilibrium` topic, covering externalities and market
  power. Class 1 slide 37 ("When Markets Fail": taxes, externalities, market power,
  imperfect information, behavioral factors) had no corresponding questions anywhere in
  the original 102-question bank; this was the one real coverage gap found. Question
  bank grows from 102 to 104 questions.

### Changed
- Re-extracted all 7 source files fresh (`python-pptx` for the 4 slide decks,
  `pdftotext -layout` for the 3 solution PDFs) and checked every one of the original 102
  questions' concept, numbers, correct answer, distractors, and explanations directly
  against the source text.
- Rewrote 2 questions that had reused a source's exact numbers instead of a fresh
  scenario, contrary to the no-verbatim-answer-key rule: `ps1-marginal-001` (calling-plan
  minutes/rates matched Problem Set 1's own example exactly — changed from a 7-minute
  call at $0.10/$0.02 per minute to a 10-minute call at $0.08/$0.03 per minute) and
  `class1-graphs-001` (the phone-bill slope example matched Class 1 slide 8's own data
  table exactly — replaced with a new gym-membership scenario testing the identical
  slope calculation).
- Corrected 2 topic misassignments: `class2-income-approach-001` (income approach's ~2/3
  labor-share fact) moved from `gdp-cpi-inflation` to `gdp-accounting`, since it's a
  GDP-accounting-method question, not a CPI/inflation one. `class3-labordemand-002`
  (determinants of labor demand) moved from `productivity-real-wages` to
  `labor-markets`, to sit alongside the other labor-demand/VMP questions it belongs
  with.
- Relabeled 4 questions from `hard` to `medium` difficulty to match the authoring
  guide's rubric (medium = single-step calculation or applied concept; hard =
  multi-step calculation, subtle distinction, or multiple concepts):
  `ds1-compadv-001`, `ds1-compadv-002`, `ds1-gains-001` (each a single opportunity-cost
  ratio or single applied specialization step), and `class4-capital-002` (a single
  two-term comparison).
- Updated `data/sources.json`'s `ds1` entry and `docs/source-notes.md` to document one
  extraction gap found during re-extraction: `DS1_solutions.pdf` Section III parts (d)
  Deflating and (e) Indexing state the method in words, but the grad-student example's
  final worked numbers did not extract as selectable text (likely an image/graphic in
  the source). No question depends on those specific numbers — the deflating/indexing
  formulas are independently and fully documented in Class 2 slides 31-32.
- Added a new rule to `docs/question-authoring-guide.md`: the no-verbatim-answer-key
  rule also applies to a lecture slide's own worked numeric example, not just
  discussion-section/problem-set solutions.
- Updated `README.md`'s question-count reference from 102 to 104.

### Fixed
- No factual errors were found: every question's correct answer and explanation
  matched the source material's stated concept, formula, or worked-example logic. The
  fixes above are the only source-fidelity issues the audit surfaced.

### Notes
- **`needsReview` status unchanged: all 104 questions have `needsReview: false`.** No
  question was found to rely on unclear, unreadable, or ambiguous source content beyond
  the one documented DS1 extraction gap, which does not affect any specific question's
  verifiability. Source-grounding was verified, not assumed — see the "2026-07-06
  Question Bank Quality Audit" section in `docs/source-notes.md` for the full list of
  findings.
- No duplicate or near-duplicate questions were found. Topic balance after the audit
  ranges from 8 to 12 questions per topic across the 11 existing topics (no new topics
  added). Difficulty mix is 29 easy / 70 medium / 5 hard.
- `node scripts/validate-data.mjs` passes with zero errors and zero warnings on the
  resulting 104-question bank.
- No raw files from `private-materials/` were staged or committed; only
  `data/questions.json`, `data/sources.json`, `docs/source-notes.md`,
  `docs/question-authoring-guide.md`, `README.md`, and this changelog changed.

## 2026-07-06 14:08 — Playtest and Bug-Fix Pass

### Added
- Added `scripts/validate-data.mjs`, a dependency-free Node script that validates
  `data/questions.json` / `data/topics.json` / `data/sources.json`: JSON parses,
  required fields present, `answerIndex` in range, `choices`/`wrongExplanations`
  lengths match, correct choice has a `null` wrong-explanation and every incorrect
  choice has a non-empty one, `topic`/`sourceIds` references exist, no duplicate
  question IDs, and near-duplicate question text is flagged as a warning. Exits
  non-zero on error.
- Added `docs/qa-checklist.md`: a manual playtest checklist covering every study mode,
  Reset Progress, mobile-width checks, malformed-localStorage recovery, reload-mid-quiz
  behavior, dark mode, and GitHub Pages verification steps.
- Added a "Testing / QA" section to `README.md` pointing to both.

### Fixed
- Fixed a latent mobile layout bug: `overflow-wrap: anywhere` was only applied to
  `h1`–`h4` and `p`, not to buttons, spans, or badges. An unusually long or
  unbreakable word in a choice, topic name, or label could overflow the viewport
  horizontally on narrow screens. Moved the rule to a universal selector in
  `styles/main.css` so every text-bearing element wraps safely.

### Notes
- Ran a full automated playtest (headless Chromium via Playwright, driving the real
  app against a local static server) covering: first-time/clean-localStorage state,
  Full Bank (answer/prev/next/persisted-answer-state), Shuffle Mixed Practice at 10 /
  20 / All session lengths (confirmed correct length, multiple topics per session, no
  duplicate questions within a session), topic-specific practice across multiple
  topics (label accuracy, progress/badge updates), Review Missed (global and
  per-topic), New/Unseen (correct exclusion and graceful exhaustion), Needs Review
  (correctly hidden with the current all-`needsReview:false` question bank; verified
  the show/hide logic separately without mutating real question data), Focus Next
  (correct 3-attempt/accuracy threshold and top-3 ranking), the Results screen (score,
  topic breakdown, missed-questions-grouped-by-topic, recommendation, and all three
  action buttons), Reset Progress, and a 320–390px mobile viewport. No console or page
  errors were observed in any scenario.
- Also verified: malformed `localStorage` JSON (falls back to a fresh state instead of
  crashing), stale/orphaned `localStorage` entries referencing question IDs no longer
  in the bank (silently ignored, no crash), and reloading mid-quiz (returns cleanly to
  the home screen; only individual question attempts already answered before the
  reload persist, which is the intended no-session-persistence design).
- Investigated an apparent dark-mode contrast issue in an early screenshot; confirmed
  via a settled (non-racing) screenshot that it was the test script's screenshot
  timing racing the existing ~0.2s feedback fade-in animation, not an actual contrast
  bug. No CSS change was needed for dark-mode contrast.
- Re-validated `data/questions.json` / `data/topics.json` / `data/sources.json` with
  the same checks `src/data.js` runs in-browser: 102 questions, 11 topics, 7 sources,
  zero warnings, zero duplicate IDs, zero duplicate question text.

## 2026-07-06 13:44 — Local Source Materials Workflow

### Added
- Added `.gitignore` to protect the local `private-materials/` folder from accidental git
  commits. The rule ensures raw course materials (`.pptx`, `.pdf` files) remain local-only.
- Added `private-materials/README.local.md` to document the local-only source workflow:
  explains why materials are excluded, how to use them for future updates, and best
  practices for keeping the public repo clean.

### Changed
- Updated `docs/source-notes.md` with a new "Local-only source materials" section that
  explains the workflow, lists the current materials used for the first question bank,
  and documents the process for future updates (read local materials, generate new
  questions, commit derived data only, never commit raw course files).
- Updated `README.md` with a "Local course materials" section explaining that the
  `private-materials/` folder is excluded from git, that it's only used for question-bank
  generation, and that the app/GitHub Pages do not require it to run.

### Notes
- The `private-materials/` folder existed locally with the 7 source files but was not
  yet protected by git. Adding `.gitignore` ensures it will never be tracked.
- Public documentation now clearly separates the local-only source workflow from the
  public, committed question data and metadata.

## 2026-07-06 11:33 — Study Dashboard and UI Polish

### Added
- Redesigned home screen into a full study dashboard: a hero area with total
  questions, attempted count, overall accuracy, and current weakest topic, plus a
  single "Continue Studying" button that intelligently picks Review Missed, then
  New/Unseen, then Shuffle Mixed Practice depending on what has (or hasn't) been
  attempted.
- Added a "Choose a Topic" dashboard section: every topic now renders as a card with
  question count, attempted count, accuracy, missed count, a progress bar, and a
  status badge (Not Started, In Progress, Needs Review, Strong, Mastered) driven by
  new rules in `src/scoring.js`. Each card has "Practice Topic" and "Review Missed in
  Topic" actions (the latter disabled until there's something to review).
- Added a "Focus Next" panel that surfaces up to the 3 lowest-accuracy topics (min. 3
  attempts each) with one-click drill buttons, shown only once there's enough data.
- Added a session-length selector (10 / 20 / All) on the Shuffle Mixed Practice mode
  card, so shuffled sessions can pull a random subset across every topic instead of
  always running the full bank.
- Added a visible sticky progress bar on the quiz screen (in addition to the existing
  "Question X of Y" text) and split the explanation panel into clearly labeled "Why
  the correct answer is right" / "Why the other answers are wrong" sections.
- Added a results-screen recommendation panel plus explicit Review Missed / Shuffle
  Mixed Practice / Back to Topic Dashboard action buttons, and missed questions are
  now grouped by topic instead of listed flat.
- New `src/scoring.js` helpers: `topicStatus`, `weakestTopics`,
  `recommendedContinueAction`, `recommendedNextAction`, `missedQuestionsInTopic`,
  `topicQuestions`, and `groupQuestionsByTopic`.

### Changed
- Replaced the study-mode button row and separate "By Topic" chip picker with a card
  grid (Full Bank, Shuffle Mixed Practice, Review Missed, New/Unseen, and a
  conditional Needs Review card), each showing a description, question count, and a
  "Recommended" badge on whichever mode `recommendedContinueAction` currently
  suggests.
- Reworked the color system in `styles/main.css`: warm cream/off-white background,
  deep crimson primary accent, dark navy/charcoal text, and muted gold for
  highlights are now the default (light) palette, with a crimson-on-navy dark-mode
  variant for `prefers-color-scheme: dark` (previously the app defaulted to a
  teal-accented dark theme).
- Polished spacing, card hover states, focus-visible outlines, and button tap targets
  across the home, quiz, and results screens; added subtle transitions for card
  hover, progress bar fills, mode selection, and answer-reveal feedback.
- Quiz answer choices now show a disabled/other state for unselected choices once
  answered, plus ✓/✕ icons on the correct/incorrect choice so color is never the only
  signal.
- Reused the existing static, no-build, no-backend GitHub Pages architecture,
  `localStorage` schema (`econ10bStudyGame:v1`), and question IDs throughout — no
  data files or storage keys were renamed.

### Notes
- All new dashboard/status logic is derived entirely from existing
  `Storage.getQuestionStat` data; no new persisted fields or schema migrations were
  needed.

## 2026-07-06 11:17 — App Icon and PWA Branding

### Added
- Added the uploaded Econ 10b logo (`app-icon.png`, 2048x2048) as the app's official
  icon, preserved at full resolution at `assets/icons/ec10b-logo.png`.
- Generated favicon (16x16, 32x32), Apple touch icon (180x180), standard PWA icons
  (192x192, 512x512), and maskable PWA icons (192x192, 512x512) from the source logo.
  The maskable variants pad the logo to roughly 55% of the canvas so the crimson
  border isn't clipped by circular/squircle home-screen masks, since the source
  artwork's flat edges touch its canvas boundary with no built-in safe margin.
- Added `manifest.webmanifest` at the repo root (standalone display, theme color
  `#A51C30`, background color `#F7F1E6`) so the app can be added to a mobile home
  screen with the correct icon and name.
- Added a small logo mark next to the app title on the home screen
  (`.app-title-row` / `.app-logo` in `styles/main.css`), sized down further on narrow
  viewports.

### Changed
- Updated `index.html` `<head>` with favicon links, the apple-touch-icon link, the
  manifest link, and mobile-bookmarking meta tags (`theme-color`,
  `apple-mobile-web-app-capable`, `apple-mobile-web-app-title`,
  `apple-mobile-web-app-status-bar-style`). All paths are relative.
- Updated `README.md` with an "App Icon / PWA Icon" section covering where the source
  logo and generated icons live, what the manifest enables, and how to clear a cached
  icon on a phone's home screen.

### Notes
- The source logo's corners are opaque white (not transparent) outside its rounded
  square; maskable-icon padding uses the same white so the padding blends seamlessly
  with the logo's own corner fill instead of showing a visible seam.
- Icons were generated with Pillow (Python) since no CLI image tool other than macOS
  `sips` was available; `sips` alone can't add centered padding, so Pillow was used for
  the maskable variants' safe-zone padding.

## 2026-07-06

### Added
- Initial Econ 10b (Harvard S10-b) study game: a static, no-build, no-backend
  multiple-choice quiz app with a redesigned "macro dashboard" interface, distinct from
  the earlier Econ 10a single-file reference design.
- `localStorage`-backed progress tracking: per-question attempt history, latest answer,
  correct/incorrect status, attempt counts, last-attempted timestamp, and derived
  topic-level accuracy. Includes a Reset Progress control.
- Topic-based study modes: Full Bank, Shuffle, Review Missed, By Topic, New/Unseen, and
  a conditional Needs Review mode (hidden unless at least one question has
  `needsReview: true`).
- Home screen with overall progress (attempted, correct, accuracy), total question
  count, and per-topic cards showing question count, attempted count, and accuracy.
- Quiz screen showing topic, subtopic, difficulty, source label, and progress per
  question, with immediate feedback after answering: correct/incorrect marking, the
  correct answer, an explanation for the correct answer, and a specific explanation for
  every incorrect choice. Explanations are hidden until the student answers. Previous/
  Next navigation within a session.
- Results screen with score, percentage, topic-level breakdown, a list of missed
  questions with a one-click "Retry Missed Questions" restart, and a recommendation
  targeting the lowest-accuracy topic.
- First Econ 10b question bank: 102 questions generated conservatively from
  `HarvardS10b_Class1-4.pptx`, `DS1_solutions.pdf`, `DS2_solutions.pdf`, and
  `Problem Set1_Solutions.pdf`, covering all 11 required topics. Every question has a
  correct-answer explanation and a specific, non-generic explanation for each
  incorrect choice.
- `data/topics.json` (11 topics) and `data/sources.json` (7 sources, with coverage
  summaries and reliability notes) as the reference data backing the question bank.
- Lightweight in-browser data validation (`src/data.js`) that runs on page load and
  logs any schema issues (missing fields, bad `answerIndex`, mismatched choice/
  explanation array lengths, unknown topic/source references) to the console only.
- `docs/source-notes.md` documenting which materials were used, what each covers, and
  extraction reliability notes.
- `docs/question-authoring-guide.md` documenting the question schema, how to write
  good distractor explanations, how to mark `needsReview`, and how to add new topics
  and sources.
- Connected the project to https://github.com/dkyaya/ec10bStudyGame and configured a
  static root structure for GitHub Pages (`index.html` at repo root, relative paths
  only, no build step), with deployment instructions in `README.md`.

### Notes
- All 102 initial questions have `needsReview: false` — every source file extracted
  cleanly with no illegible or ambiguous content. See `docs/source-notes.md` for
  details on what was and wasn't used (chart-only/photo-only slides were excluded).
- Calculation-style questions based on discussion-section and problem-set solutions
  use new numbers/scenarios rather than the exact figures in the solution keys, per
  the conservative-generation rule against copying answer keys wholesale.
