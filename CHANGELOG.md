# Changelog

## 2026-07-14 22:10 — 2008 Financial Crisis Quality Audit

### Added
- `docs/update-notes/2026-07-14-crisis2008-quality-audit-plan.md` and
  `-results.md`: a focused quality audit of exactly the 37 `crisis2008-*`
  questions added earlier the same day, covering source-fidelity, mechanism/
  causal-chain correctness, distractor defensibility, difficulty/
  `questionType`/topic/tag accuracy, and duplication/coverage.
- New "Reworking the *correct choice*, not just the citation" rule in
  `docs/question-authoring-guide.md`, documenting the near-verbatim-wording
  failure mode this audit found (distinct from the previously-documented
  "mad-libs" *numeric* substitution pattern, since this deck has no numbers
  to substitute).
- New "Correct-choice-vs.-source wording check" bullet in
  `docs/qa-checklist.md`'s fair-game/theory-heavy-source section.

### Changed
- `data/questions.json`: reworded the correct answer choice on 13 of the 37
  `crisis2008-*` questions (`crisis2008-origins-002`,
  `crisis2008-origination-001`, `crisis2008-securitization-001`,
  `crisis2008-securitization-002`, `crisis2008-ratingagencies-001`,
  `crisis2008-fanniefreddie-002`, `crisis2008-toobigtofail-001`,
  `crisis2008-cds-002`, `crisis2008-regulation-001`,
  `crisis2008-debtoverhang-001`, `crisis2008-debtoverhang-002`,
  `crisis2008-transmission-002`, `crisis2008-transmission-003`) to remove
  near-verbatim reuse of the source deck's own sentences while preserving
  the exact tested claim.
- `data/questions.json`: reclassified `crisis2008-tarp-001` and
  `crisis2008-transmission-001` from `difficulty: "easy"` to `"medium"`,
  since both require distinguishing/synthesizing two adjacent concepts
  rather than single-term recall.
- `data/questions.json`: removed a `"moral hazard"` tag from
  `crisis2008-origination-001` (kept `"principal-agent problem"`), since
  the question and its explanations only ever use the deck's own
  principal-agent framing for this mechanism — the tag risked implying the
  two deck-specific terms are interchangeable.
- `docs/source-notes.md`: added a new "2026-07-14 2008 Financial Crisis
  Quality Audit" narrative section summarizing the above findings.

### Fixed
- No correctness, concept-coverage, distractor-defensibility, explanation-
  fidelity, mechanism/causal-chain, duplication, or `sourceIds`/
  `sourceLabel`/topic errors were found in any of the 37 `crisis2008-*`
  questions — every fix made was a wording, difficulty, or tag refinement,
  not a factual correction.

### Notes
- **37 / 37 `crisis2008-*` questions verified/corrected** against
  `Economic Crisis.pdf`; all 37 remain `needsReview: false` — no unresolved
  `needsReview` items from this audit.
- `questionType` breakdown (unchanged): 34 `standard`, 3 `vocab`, 0
  `formula`, 0 `graph`.
- Difficulty breakdown after audit: 3 easy, 21 medium, 13 hard (was 5/19/13
  before).
- Final counts: **377 total questions** (unchanged), 37 `crisis2008-*`
  questions (unchanged), 45 vocab, 78 formula, 46 graph, 18 topics, 14
  sources (all unchanged).
- Validation: `node scripts/validate-data.mjs` passes with no errors or
  warnings.

## 2026-07-14 21:21 — New Fair-Game Slides Questions: The 2008 Financial Crisis

### Added
- New source `financial_crisis_2008` (`Economic Crisis.pdf`, a 24-slide
  supplementary lecture deck on the 2008 financial crisis) in
  `data/sources.json`, added after a re-scan of `private-materials/` found
  this one new, unrepresented file (a first scan earlier in the day found
  zero new files and stopped without making changes — see
  `docs/update-notes/2026-07-14-new-fair-game-slides-plan.md`).
- New topic `financial-crisis-2008` ("The 2008 Financial Crisis") in
  `data/topics.json`, covering securitization/CDO tranching, moral hazard
  and principal-agent problems, leverage and too-big-to-fail, credit
  default swaps, regulatory gaps, the Fed's crisis-era response, debt
  overhang, and the balance-sheet/credit-channel transmission mechanism —
  none of which were covered by the existing `financial-markets`,
  `money-banking`, or `monetary-policy` topics.
- **37 new questions** (IDs `crisis2008-*`, all `sourceIds:
  ["financial_crisis_2008"]`), skewed toward challenging mechanism,
  contrast, policy-interpretation, common-confusion, scenario-transfer,
  and ranking questions per the task's "hard but fair" framing for
  theory-heavy, underprepared-for material.
- `docs/update-notes/2026-07-14-new-fair-game-slides-plan.md` and
  `-results.md`: the file-comparison audit (both the initial "no new
  files" pass and the follow-up pass after the new file was added),
  academic-integrity check, source/topic rationale, and full question-
  batch breakdown.
- New "Writing questions from theory-heavy, non-quantitative sources"
  section in `docs/question-authoring-guide.md`.
- New "Checks for new fair-game/theory-heavy source additions" section in
  `docs/qa-checklist.md`.

### Changed
- `README.md`: topic count 17 -> 18, vocab count 42 -> 45, question-bank
  count/date reference updated to 377 questions / 2026-07-14.
- `docs/source-notes.md`: added the new source to "Current local
  materials" and the "Materials used" table, and added a new dated
  narrative section with the full reliability/extraction-gap notes.

### Fixed
- None — this was a pure addition; no existing question, source, or topic
  was modified.

### Notes
- **Difficulty breakdown (new batch):** 5 easy, 19 medium, 13 hard
  (~14% / 51% / 35%).
- **`questionType` breakdown (new batch):** 34 `standard`, 3 `vocab`, 0
  `graph`, 0 `formula` — this deck teaches neither curve-shift/
  equilibrium-diagram reasoning nor calculation-based content, so no
  `graph` or `formula` questions were forced in just to hit a type quota.
- **Final total question count: 377** (340 + 37). Vocabulary/definition:
  **45** (42 + 3). Formula/quantitative: **78** (unchanged). Graph
  interpretation: **46** (unchanged, still 11 with an inline SVG diagram).
  Topics: **18** (17 + 1). Sources: **14** (13 + 1).
- **`needsReview` count: 0.** Two chart-only slides (an MBS payment-stream
  bar chart and a CDO tranche-waterfall bar chart) didn't extract usable
  numeric data, but the same seniority/pass-through concepts they
  illustrate are independently documented in the surrounding bullet text,
  so no question depends on unreadable chart pixels. A final
  hyperlink-only slide was not used as a basis for any question.
- **Source-grounding:** every new question's `correctExplanation` quotes
  or closely paraphrases the specific lecture bullet it's grounded in;
  none copy the deck's exact wording or answer-choice structure verbatim,
  and none were checked to duplicate or near-duplicate any of the
  existing 340 questions (automated normalized-text check, zero
  collisions).
- **Validation:** `node scripts/validate-data.mjs` reports "Checked 377
  questions, 18 topics, 14 sources... All checks passed with no errors or
  warnings."
- **QA/playtest:** verified live in a headless-Chromium session against a
  local static server — zero console errors on load; the new topic card
  appears on the home dashboard with the correct question count; a quiz
  session on the new topic renders questions with 4 shuffled choices and
  full correct/wrong-answer explanations; Vocabulary/Definitions mode
  shows "Question 1 of 45"; Shuffle Mixed Practice (All) shows "Question 1
  of 377"; Reset Progress returns the dashboard to a clean 0-attempted
  state.
- **No raw private materials were committed.** `Economic Crisis.pdf` and
  every other file in `private-materials/` remain local-only, excluded via
  `.gitignore`; only derived JSON and documentation were staged.

## 2026-07-12 21:57 — Midterm Expansion Quality Audit

### Added
- `docs/update-notes/2026-07-12-midterm-expansion-quality-audit-plan.md`
  and `-results.md`: the audit plan (scope, method, high-risk areas flagged
  in advance) and results doc (fixes made, final counts, validation result)
  for a focused quality audit of the 52 `midterm-var-*` questions added in
  the prior "Midterm Review Expansion" update.
- New "The mad-libs risk applies to an existing app question's own wording"
  section in `docs/question-authoring-guide.md`, documenting that
  sentence-architecture copying can hide in `correctExplanation`/
  `wrongExplanations` even when the question stem is already distinct, and
  that a small shared-phrase script catches this more reliably than
  eyeballing.
- New "Shared-phrase check for multi-variant batches" item in
  `docs/qa-checklist.md`.

### Changed
- Audited all **52 `midterm-var-*` questions** (27 formula, 15 standard, 7
  graph, 3 vocab) — no other question in the 340-question bank was
  touched, including the 17 `*-examprep-*` midterm_review questions from
  the prior update (used only as read-only comparison material).
- **18 of 52 questions revised** for source-transformation issues:
  - **8 full rewrites** (question + explanations, and in one case choices)
    for questions that had copied a sibling `*-examprep-*` question's
    sentence architecture nearly word-for-word despite already using fresh
    numbers: `midterm-var-cpi-001`, `midterm-var-gdp-001`,
    `midterm-var-growth-001`, `midterm-var-growth-003`,
    `midterm-var-growth-006`, `midterm-var-saving-007`,
    `midterm-var-financialmarkets-001`, `midterm-var-capitalflows-002`.
  - **5 second-pass explanation rewrites** where a first fix had corrected
    the question stem but left the `correctExplanation`/
    `wrongExplanations` as near-verbatim copies of a sibling's explanation
    text: `midterm-var-cpi-005`, `midterm-var-saving-001`,
    `midterm-var-loanable-006`, `midterm-var-capitalflows-002` (further
    revised), `midterm-var-saving-009`.
  - **4 lighter question-stem restructurings** for shared opening/closing
    templates: `midterm-var-saving-002`, `midterm-var-saving-003`,
    `midterm-var-gdp-006`, `midterm-var-cpi-005` (stem portion).
  - **2 self-containment fixes**: `midterm-var-gdp-003` (removed a literal
    "the five-firm coffee chain above" self-reference) and
    `midterm-var-loanable-006` (removed a dangling "Continuing the
    vertical-saving-curve economy" opener that implied unestablished prior
    context).
  - **1 difficulty fix**: `midterm-var-saving-001` medium -> hard (a
    reverse-calculation question, per the stated difficulty rubric and for
    consistency with every other reverse-calculation question in the
    batch, which was already labeled hard).
  - **2 topic/subtopic fixes**: `midterm-var-loanable-002` and
    `midterm-var-loanable-003` moved from `loanable-funds` to
    `saving-investment` (topic `subtopic` -> "Saving Identities"), since
    both test only the private/public saving formulas with no interest-
    rate or equilibrium content, matching `saving-investment`'s topic
    description more precisely.
- **No arithmetic errors were found anywhere in the 27 formula
  questions** — every correct answer and every numeric distractor was
  independently re-verified against the final question text via a
  standalone script, and a second script independently re-derived several
  results a second time from scratch. All 27 matched.
- **No graph-reasoning errors were found in the 7 graph questions** —
  curve identity, shift direction, and equilibrium implications were all
  confirmed correct, including a first-principles linear supply-and-demand
  derivation verifying the one genuinely novel comparative-statics claim in
  the batch (`midterm-var-loanable-005`'s vertical-vs-sloped saving-supply
  curve comparison).
- **No distractor-defensibility, standard/vocab correctness, or
  duplicate/near-duplicate issues were found** beyond the mad-libs/
  sentence-architecture cases already listed.

### Fixed
- See "Changed" above — all 18 fixes were corrections to existing question
  text, choices, explanations, difficulty, topic, or subtopic fields. No
  question was added or removed; every original `midterm-var-*` question
  ID, `sourceIds`, `sourceLabel`, and `questionType` was preserved.

### Notes
- **Final counts (unchanged from the prior update, since this was a pure
  revision pass):** Total questions: **340**. `midterm-var-*` questions:
  **52**. Midterm Review questions: **69** (38 formula, 18 standard, 9
  graph, 4 vocab). Vocabulary: **42**. Formula: **78**. Graph: **46** (11
  with an inline diagram). Topics: **17**. Sources: **13**.
- **`needsReview` count: 0.** Every issue found was resolvable via rewrite
  or relabeling; no question required the flag.
- **Validation result:**
  ```
  $ node scripts/validate-data.mjs
  Checked 340 questions, 17 topics, 13 sources.
  Vocabulary/definition questions: 42.
  Formula/quantitative practice questions: 78.
  Graph interpretation questions: 46 (11 with an inline diagram).
  All checks passed with no errors or warnings.
  ```
- **Playtest.** Drove the app in a headless browser (Playwright): confirmed
  no console errors on load or during quiz interaction; confirmed all home
  screen mode-card counts (340/42/78/46/69) match; launched Midterm Review
  and stepped through 18 shuffled questions, hitting several of the fixed
  questions directly (`midterm-var-saving-003`, `midterm-var-saving-007`,
  `midterm-var-gdp-003`, `midterm-var-gdp-007`, `midterm-var-loanable-002`,
  `midterm-var-loanable-003`, `midterm-var-loanable-005`) and confirming
  each grades correctly (both correct and incorrect selections) after
  answer-choice shuffling; separately confirmed Formula Practice, Graph
  Practice, and Vocabulary / Definitions each launch cleanly with the
  correct question count and badge. App remains fully static (served via
  `python3 -m http.server`, no backend, no build step).
- No raw files from `private-materials/` were committed — verified via
  `git status --short` before staging.

## 2026-07-12 21:19 — Midterm Review Expansion

### Added
- **52 new Midterm Review questions** (`midterm-var-*` IDs), roughly
  quadrupling the Midterm Review set from 17 to **69 questions**. Every new
  question is a fresh scenario grounded in one of the `midterm_review`
  source's 11 worked practice problems, with new entities, new numbers, new
  sentence structure, and new answer-choice wording/order — never a
  number-substitution "mad-libs" copy of the source's own worked problem or
  of an existing app question. Each worked problem received 3-6 variants
  spanning multiple task directions: compute a value, infer a missing input
  given an outcome (reverse calculation), diagnose a mistaken formula or
  common student error, compare two cases, and (where applicable) connect
  the concept to a loanable-funds or open-economy graph.
- `docs/update-notes/2026-07-12-midterm-expansion-plan.md` and
  `-results.md`: the expansion plan (file-by-file `private-materials/`
  comparison, academic-integrity re-confirmation, target counts, concept
  coverage plan) and results doc (final counts, IDs added, concept coverage
  map, arithmetic-verification method and outcome).
- New "Generating multiple variants from one worked practice problem"
  section in `docs/question-authoring-guide.md`, documenting the
  task-direction rotation approach (compute / infer / diagnose / compare /
  graph) and the requirement to independently recompute every variant's
  arithmetic from its own scenario numbers before finalizing a batch.
- New "2026-07-12 Midterm Review Expansion" section in
  `docs/source-notes.md` summarizing the source-handling decisions (no new
  sheet found, expansion strategy, verification method) for future
  contributors.

### Changed
- **No new source added.** Every file in `private-materials/` was compared
  against `data/sources.json`; all 13 files (including
  `MidtermStudyMaterials_Summer2026.doc`) were already represented from the
  prior update. `data/sources.json` was not modified. Confirmed no
  unreleased/live exam material is present (same instructor-released study
  guide already vetted in the prior update; the determination was
  re-confirmed, not re-litigated, since nothing about the file changed).
- `src/scoring.js`'s existing `MIDTERM_REVIEW_SOURCE_IDS` Set (added in the
  prior update specifically to support this scenario) needed no changes,
  since no second exam-prep source was added.
- Total question bank: **340 questions** (was 288), **17 topics**
  (unchanged), **13 sources** (unchanged).
- Vocabulary/definition questions: **42** (was 39). Formula/quantitative
  questions: **78** (was 51). Graph interpretation questions: **46** (was
  39), still **11** with an inline SVG diagram (all 7 new graph questions
  use a fully text-described graph situation instead of a new SVG).
- Midterm Review `questionType` breakdown: **38 formula** (was 11), **18
  standard** (was 3), **9 graph** (was 2), **4 vocab** (was 1) — within the
  task's suggested ranges for a healthy exam-prep mix.
- `README.md`: updated total question count (340, was 288), Midterm Review
  count (69, was 17), vocab/formula/graph counts, and the Midterm Review
  mode description's question count.
- `docs/qa-checklist.md`: updated the Midterm Review count reference (69),
  expanded the answer-choice-shuffling check to spot-check multiple new
  formula questions across different worked-problem topics and at least one
  new text-described graph variant (not just the original diagram-bearing
  question), and added a "Midterm Review variant quality spot-check" item.

### Fixed
- Nothing — this was a pure content-addition update; no existing question
  was modified.

### Notes
- **Academic integrity / source transformation.** All 52 new questions are
  paraphrased practice grounded in the instructor's own released study
  guide, not reproductions of it: fresh scenarios/entities, fresh sentence
  architecture, fresh numbers (independently computed, not copied), and
  fresh answer-choice wording and ordering throughout. No question reuses
  the source document's own numbers, company/country names, or sentence
  structure, and none reuse an existing `*-examprep-*` question's specific
  scenario or answer-choice set.
- **Arithmetic verification.** Every new formula question's numbers were
  computed via real JavaScript arithmetic during authoring, then
  independently re-verified a second time via a fully standalone
  recomputation script checked against the final `data/questions.json`
  entries. All checks matched; zero arithmetic errors found in either pass.
- **`needsReview` count: 0.** No new question required the flag.
- **Validation result:**
  ```
  $ node scripts/validate-data.mjs
  Checked 340 questions, 17 topics, 13 sources.
  Vocabulary/definition questions: 42.
  Formula/quantitative practice questions: 78.
  Graph interpretation questions: 46 (11 with an inline diagram).
  All checks passed with no errors or warnings.
  ```
- **Playtest.** Drove the app in a headless browser (Playwright):
  confirmed no console errors on load; confirmed the home screen's Total
  Questions (340), Formula Practice (78), Graph Practice (46), Vocabulary /
  Definitions (42), and Midterm Review (69) counts all match; launched a
  Midterm Review session and stepped through 8 shuffled questions across
  `formula`, `standard`, `vocab`, and unbadged types, confirming
  answer-choice shuffling and correct/incorrect grading both work correctly
  for the newly added questions; confirmed the app remains fully static
  (served via `python3 -m http.server`, no backend, no build step).
- **No raw files from `private-materials/` were committed** — verified via
  `git status --short` before staging.

## 2026-07-12 09:02 — Midterm Review Quality Audit

### Added
- `docs/update-notes/2026-07-12-midterm-review-quality-audit-plan.md` and
  `-results.md`: the audit plan (exact question-ID scope, checks performed,
  advance risk flags) and results doc (counts audited, fixes made, final
  counts, validation result) for this focused follow-up audit.
- A new documented rule in `docs/question-authoring-guide.md`: "Avoid
  'mad-libs' number substitution" — using fresh numbers in a rewritten word
  problem is not sufficient on its own if the sentence structure and clause
  order still mirror the source's worked example; the scenario framing and
  sentence architecture must also be restructured.

### Changed
- Focused quality audit of exactly the **17 questions** added from
  `midterm_review` in the previous "Exam Materials Integration" update (11
  `formula`, 2 `graph`, 3 `standard`, 1 `vocab`) — no other question in the
  288-question bank was touched. Verified concept coverage, `sourceIds`/
  `sourceLabel` accuracy, self-containment, correctness, distractor
  defensibility, explanation fidelity, non-verbatim wording, and fit for a
  study game. Independently re-derived the arithmetic for all 11 formula
  questions from scratch and re-verified the diagram geometry for the 1
  graph question with an inline SVG.
- **8 of 17 questions rewritten** for near-verbatim sentence-architecture
  copying of the source's worked problems — despite already using fresh
  numbers, these had preserved the source's exact clause order and sentence
  structure (a "mad-libs" pattern): `formula-examprep-closedeconomy-si-001`,
  `formula-examprep-realrepayment-001`, `formula-examprep-valueadded-001`,
  `formula-examprep-cpiindex-001`, `formula-examprep-nationalsaving-001`,
  `formula-examprep-nationalsaving-002`, `graph-examprep-verticalsaving-001`,
  and `formula-examprep-stockpv-001`. Each was rewritten with a new cover
  story/framing, restructured sentences, and fresh numbers (correctness
  independently re-verified via a standalone arithmetic script), while
  preserving its original question ID, topic, difficulty, questionType,
  sourceIds, and sourceLabel. `formula-examprep-cpiindex-001`'s `tags` also
  updated from "minimum wage" to "pension" to match its new scenario.

### Fixed
- No arithmetic errors, distractor-defensibility issues, explanation-fidelity
  issues, diagram-geometry issues, or difficulty/questionType/topic
  mislabels were found — this audit's fixes were exclusively wording/
  structural, not correctness fixes. The remaining 9 of the 17 questions
  needed no changes at all.

### Notes
- All fixes were verified/corrected, not rebuilt from scratch — the batch's
  underlying concepts, correct answers, and source grounding were already
  sound; only sentence-level fidelity to the source needed correction.
- Coverage/duplication check confirmed all 11 of the source's worked
  practice problems remain represented with no duplicates; the batch stays
  at **17 questions** (no additions, no removals). Total bank size
  unchanged at **288 questions**.
- **0 questions require `needsReview`** — every issue found was directly
  fixable via rewrite.
- `node scripts/validate-data.mjs` passes with **no errors and no
  warnings** on the resulting 288-question bank (39 vocab, 51 formula, 39
  graph with 11 diagrammed, 17 topics, 13 sources).
- Live-playtested in headless Chrome: Vocabulary/Definitions, Formula
  Practice, Graph Practice, and Midterm Review modes all load correctly;
  answer-choice shuffling and grading were specifically re-verified for all
  8 rewritten questions (clicking each one's correct choice — in its
  shuffled position — graded correctly in every case).
- No raw materials from `private-materials/` were staged or committed.

## 2026-07-12 08:41 — Exam Materials Integration

### Added
- A new source, `midterm_review` (`MidtermStudyMaterials_Summer2026.doc`) — an
  instructor-released midterm study outline and 11 worked practice problems
  with full suggested solutions. Before use, the file was read in full and
  checked for academic-integrity concerns: it is explicitly titled "Study
  Outline for Ec S10b Midterm Exam" / "Practice Problems for Ec S10b Midterm,"
  includes a "Suggested Solutions" section addressed to students, and its
  metadata ties it to the course's own instructor (Tanseli Savaser, named on
  the Class 1 slides) — confirmed legitimate, released study material, not a
  live/current exam. See `docs/update-notes/2026-07-12-exam-materials-plan.md`
  for the full assessment.
- **17 new questions** from this source: 11 `formula`, 2 `graph` (one with a
  new original inline SVG diagram — a vertical, interest-rate-insensitive
  saving-supply curve, a visually distinct pattern from the existing upward-
  sloping loanable-funds diagrams), 3 `standard`, and 1 `vocab`, across 8
  existing topics (`saving-investment`, `gdp-accounting`,
  `growth-accounting-compound-growth`, `capital-flows`, `gdp-cpi-inflation`,
  `financial-markets`, `loanable-funds`, `money-banking`). No new topics were
  created. Final bank: **288 questions** (up from 271), **39 vocab** (was 38),
  **51 formula** (was 40), **39 graph** (was 37, now **11** with an inline
  diagram), **13 sources** (was 12).
- A new **Midterm Review** study mode (`src/scoring.js`, `src/render.js`,
  `src/app.js`): pulls every question whose `sourceIds` includes
  `midterm_review` into a shuffled session, shows its count (17) on a home-
  screen mode card, and hides gracefully if no exam-prep questions exist.
  Implemented as a `sourceIds`-based filter (`Scoring.midtermReviewQuestions`)
  rather than a new schema field, since `sourceIds` already unambiguously
  identifies these questions — see the design rationale in
  `docs/question-authoring-guide.md`'s new "Adding exam-prep / midterm-review
  sources" section. Midterm Review questions still appear normally in Full
  Bank, Shuffle Mixed Practice, New/Unseen, Review Missed, topic practice, and
  (for the ones with a matching `questionType`) Formula Practice, Graph
  Practice, and Vocabulary/Definitions.
- `docs/update-notes/2026-07-12-exam-materials-plan.md` and `-results.md`: the
  planning note (file inventory, academic-integrity assessment, question plan)
  and the results/audit table (per-question breakdown, arithmetic
  verification, coverage balance check).
- A new "Adding exam-prep / midterm-review sources" section in
  `docs/question-authoring-guide.md`, documenting the academic-integrity check
  required before using any new exam/prep material and the `sourceIds`-based
  filtering pattern for a review-mode.

### Changed
- `README.md`: updated total question count (288, was 271), vocab/formula/
  graph counts, added the Midterm Review mode description, and noted its
  `sourceIds`-based (not `questionType`-based) filtering design.
- `docs/source-notes.md`: added a `midterm_review` row to the materials table,
  a new 2026-07-12 dated section documenting the academic-integrity check,
  topics covered, extraction reliability, and one adapted claim (see Notes
  below), and a statement that the raw `.doc` file remains local-only.
- `docs/qa-checklist.md`: added Midterm Review mode checks, a note that it has
  no dedicated badge (relies on the existing `sourceLabel` display), and an
  exam-prep-specific answer-choice-shuffling check.

### Fixed
- N/A (no bugs fixed by this change).

### Notes
- **Academic-integrity determination**: legitimate, instructor-released study
  material — safe to use. No file was excluded or required stopping to report
  a concern.
- **One claim adapted, not reused as-is**: the source's own open-economy
  practice problem included a secondary net-exports (NX) claim resting on a
  looser, more debatable mix of trade effects than the same problem's much
  cleaner capital-inflows (KI) claim. The adapted question
  (`graph-examprep-foreignshock-001`) keeps only the defensible capital-
  inflows mechanism and omits the debatable NX claim, and uses a fictional
  country (Nortavia) instead of the source's real-country example.
- **Arithmetic verification**: every one of the 11 formula questions' correct
  answers and numeric distractors (including two multi-step calculations
  combining the Fisher equation with compounding, and a piecewise dual-rate
  compound-growth comparison) were independently computed via a standalone
  script before being written into the bank with fresh numbers.
- `needsReview` count: **0** — every question's underlying concept and
  arithmetic was verified against the source's own worked solution before
  being written with a fresh scenario.
- Validation: `node scripts/validate-data.mjs` reports 288 questions, 17
  topics, 13 sources, 39 vocab, 51 formula, 39 graph (11 with an inline
  diagram), **0 errors, 0 warnings**.
- QA: verified via a live headless-Chrome session driven over the Chrome
  DevTools Protocol — confirmed all 8 mode cards render with correct counts;
  launched a full 17-question Midterm Review session, confirmed the
  `sourceLabel` ("Instructor Midterm Study Guide and Practice Problems") and
  each question's own `questionType` badge (Formula/Graph/Vocab, where
  applicable) both render correctly, confirmed the new diagram appears within
  the session, answered all 17 questions, and reached the Results screen with
  a score; confirmed Vocabulary, Formula Practice, and Graph Practice modes
  still work (regression check); confirmed a clean page load with the app's
  own validation message and no errors in the console; and exercised Reset
  Progress, returning the dashboard to 0 attempted with the full 288-question
  total intact.
- `localStorage` schema (`econ10bStudyGame:v1`) is unchanged.
- No files from `private-materials/` were staged or committed; the app remains
  a static, no-build, no-backend site — GitHub Pages compatibility is
  unaffected.

## 2026-07-11 20:10 — Graph Question Quality Audit

### Added
- `docs/update-notes/2026-07-11-graph-question-quality-audit-plan.md` and
  `-results.md`: the audit scope/plan (exact question IDs, source files,
  high-risk areas flagged in advance) and the detailed results (per-fix table,
  what was checked and how).
- A difficulty-classification clarification in
  `docs/question-authoring-guide.md`'s "Writing graph questions" section: "compare
  two graphs" and "identify an error in interpretation" questions should default
  to the `hard` tier, documenting the reasoning behind this audit's difficulty
  reclassifications for future graph-question authors.

### Changed
- Relabeled difficulty on 4 of the 37 graph questions:
  `graph-loanablefunds-004`, `graph-capitalflows-004`, and `graph-money-004`
  (`medium` → `hard` — these are "identify the error in interpretation"
  questions, matching this audit's explicit hard-tier rubric for that skill) and
  `graph-growth-001` (`medium` → `easy` — a direct curve-shape recognition
  question with no shift/equilibrium chain, consistent with sibling `easy`-tier
  questions `graph-labor-001`/`graph-labor-002`). New distribution: 10 easy, 15
  medium, 12 hard (was 9/19/9).

### Fixed
- N/A — no graph-logic, distractor, diagram, source-grounding, or duplication
  issues were found. This audit's re-verification (independently re-derived
  every shift direction and equilibrium outcome from freshly re-extracted source
  text, and independently recomputed every diagram's line-intersection
  coordinates rather than just visually inspecting the SVGs) found the batch
  accurate as shipped, aside from the four difficulty relabels above.

### Notes
- **Scope**: this audit covered exactly the 37 `questionType: "graph"` questions
  added by the same-day "Graph Practice Mode" update (`graph-ppc-*`,
  `graph-supplydemand-*`, `graph-labor-*`, `graph-loanablefunds-*`,
  `graph-capitalflows-*`, `graph-money-*`, `graph-monetarypolicy-*`,
  `graph-growth-*`). No `standard`/`vocab`/`formula` questions were re-audited.
- **Source re-verification**: freshly re-extracted `HarvardS10b_Class1.pptx`,
  `Class3.pptx`, `Class4.pptx`, `Class5.pptx`, `DS1_solutions.pdf`, and
  `DS2_solutions.pdf` (Class 6/7, the ECB guest lecture, and DS3 were already
  available from the same-day authoring pass) and re-read the exact passages
  each question depends on — budget-deficit/technology shift language (Class 5
  slides 20-22), capital-inflow/risk language (slides 37-38), the S + KI = I /
  trade-deficit link (slides 40-41), the two costs-of-investment factors (slide
  19), DS1's PPC technology-shift example, DS2's pilots supply-shift example,
  Class 4's compound-growth table, and the ECB guest lecture's interest-rate-
  corridor slides/notes — all confirmed to match the shipped questions' claims
  exactly.
- **Diagram verification**: for all 10 inline SVG diagrams, independently
  recomputed each drawn curve's line-intersection coordinates from the raw `x1,
  y1, x2, y2` values stored in the SVG markup and confirmed every equilibrium
  marker sits exactly on the computed intersection, and that every claimed
  price/wage/rate and quantity/employment/investment direction matches the
  diagram's own coordinate geometry. No diagram defects found.
- **Duplication/coverage**: ran an exact-normalized-text duplicate check plus a
  pairwise word-overlap scan across all 37 questions; found no true duplicates.
  The graph question count and per-topic distribution are unchanged from the
  original update.
- `needsReview` count: **0** — every graph question's tested concept was
  traceable to an explicit, unambiguous source passage, and no question was left
  uncertain.
- Validation: `node scripts/validate-data.mjs` reports 271 questions, 17 topics,
  12 sources, 38 vocab, 40 formula, 37 graph (10 with an inline diagram), **0
  errors, 0 warnings**.
- QA: verified via a live headless-Chrome session driven over the Chrome
  DevTools Protocol — confirmed the Graph Practice mode card, badge rendering
  (including the updated `hard` difficulty badge), and diagram rendering (SVG,
  `aria-label`, caption, 340px responsive width) all work correctly; confirmed
  Vocabulary and Formula Practice modes still work (regression check); captured
  a 375px mobile screenshot of a diagram question; and — specifically for this
  audit — launched three independent fresh Graph Practice sessions and confirmed
  a known graph question's answer choices shuffle into a different order each
  time, with the correct choice (wherever it landed) always producing "✓
  Correct!" and the matching `correctExplanation` text, confirming the shuffle-
  to-explanation mapping holds for graph questions specifically.
- `localStorage` schema (`econ10bStudyGame:v1`) is unchanged; all 37 graph
  questions kept their existing IDs, so no student progress is orphaned.
- No files from `private-materials/` were staged or committed; the app remains a
  static, no-build, no-backend site — GitHub Pages compatibility is unaffected.

## 2026-07-11 19:29 — Graph Practice Mode

### Added
- A new `questionType` value, `"graph"`, for questions that require interpreting,
  translating, or reasoning from a graph — moving between a graph and the economic
  story it represents, an event and the correct curve shift, a shift and its
  equilibrium outcome, or a formula/identity and its graph implication. Accepted in
  both `src/data.js` (in-browser validation) and `scripts/validate-data.mjs` (CLI).
- A new **Graph Practice** study mode (`src/app.js`, `src/render.js`,
  `src/scoring.js`): pulls every question tagged `"graph"` into a shuffled session,
  shows its count on a home-screen mode card (hidden if no graph questions exist),
  and displays a small gold/amber "Graph" badge in the quiz metadata row — visually
  distinct from the existing red "Vocab" and green "Formula" badges. Graph questions
  also appear normally in every other mode (Full Bank, Shuffle Mixed Practice,
  New/Unseen, Review Missed, Needs Review, and topic-specific practice/missed-
  review) — Graph Practice is a filtered view, not a separate bucket.
- A new optional `diagram` field on the question schema
  (`{ type: "svg", alt, svg }`) for inline graph diagrams, rendered above the
  question stem in `src/render.js` inside a `<figure role="img" aria-label="...">`
  with a visible `<figcaption>` repeating the alt text. Diagrams are responsive
  (`width: 100%; height: auto`, capped at 340px) via new CSS in `styles/main.css`,
  and use the app's CSS custom properties for strokes so they automatically adapt
  to light/dark mode. Validated in both `src/data.js` and
  `scripts/validate-data.mjs`: if present, `type` must be `"svg"`, non-empty `alt`
  text is required, and a non-empty `svg` string is required.
- **37 new graph questions** across 10 existing topics: 8 PPC/supply-and-demand
  (`comparative-advantage-trade`, `supply-demand-equilibrium`), 6 labor market
  (`labor-markets`, `inequality-globalization-sbtc`), 8 loanable funds
  (`loanable-funds`), 6 capital flows (`capital-flows`), 7 money market/monetary
  policy (`money-banking`, `monetary-policy`), and 2 optional growth/productivity
  questions (`economic-growth`, `growth-accounting-compound-growth`). No new topics
  were created. 10 of the 37 include an original, hand-authored inline SVG diagram;
  the remaining 27 are fully self-contained text-described graph questions.
- `docs/update-notes/2026-07-11-graph-practice-plan.md` and
  `-results.md`: the planning note (source graph concepts considered, what was used
  vs. skipped and why) and the results/audit table (final counts, diagrams added,
  per-topic/source breakdown).
- New "Writing graph questions" section in `docs/question-authoring-guide.md`:
  documents the `"graph"` questionType, the five graph-question skills (interpret
  → outcome, event → shift, shift → story, compare two graphs, identify an
  interpretation error), when to use an inline SVG vs. a text-described graph, the
  diagram schema and SVG authoring conventions, and common graph distractor types
  (wrong curve, movement vs. shift, reversed direction, supply/demand mixups,
  capital inflows vs. exports, nominal vs. real rates).

### Changed
- `README.md`: updated total question count (271, was 234), added the Graph
  Practice mode description, corrected the Vocabulary count (38 — the 2026-07-11
  11:21 audit had changed this from 32 but README wasn't updated at the time), and
  updated the "Adding new questions" section to mention `questionType: "graph"`.
- `docs/qa-checklist.md`: added Graph Practice mode checks, Graph badge checks,
  diagram rendering/accessibility checks, diagram mobile-responsiveness checks, and
  a graph-specific answer-choice/explanation-mapping check; extended the existing
  answer-choice-shuffling check to cover Graph Practice and confirm diagrams don't
  change when choices shuffle.
- `index.html`: added a `#quiz-diagram` container inside the quiz card, above the
  question stem.

### Fixed
- N/A (no bugs fixed by this change).

### Notes
- **Source grounding**: re-extracted `HarvardS10b_Class1.pptx`, `Class3.pptx`,
  `Class4.pptx`, `Class5.pptx`, `DS1_solutions.pdf`, and `DS2_solutions.pdf` fresh
  for this pass (Class 6/7, the ECB guest lecture, and DS3 were already in context
  from earlier the same day). Class 1 and Class 5 turned out to have extensive,
  explicitly-labeled shift diagrams with the shift-to-equilibrium outcome spelled
  out directly in the slide bullet text; Class 4 had almost no extractable
  axis-labeled graph content (mostly chart-only slides), so only 2 growth questions
  were added, grounded in unambiguous verbal descriptions rather than an extracted
  diagram. See the plan doc for the full per-source breakdown of what was used and
  what was skipped (chart/photo-only slides, bond-pricing tables, the reserve-ratio
  formula on its own).
- **No verbatim copying**: all scenarios use fresh names/industries/goods (e.g.,
  pharmaceuticals/furniture instead of Class 3's software/textiles, houseplants and
  wheat instead of DS1's olive oil/butter/white bread), per the lesson from the
  2026-07-11 11:21 audit.
- `needsReview` count: **0** — every graph question's curve shape, shift direction,
  and equilibrium outcome was checked against an explicit source description before
  being added.
- Validation: `node scripts/validate-data.mjs` reports 271 questions, 17 topics, 12
  sources, 38 vocab, 40 formula, 37 graph (10 with an inline diagram), **0 errors,
  0 warnings**.
- QA: verified via a live headless-Chrome session driven over the Chrome DevTools
  Protocol (not just a static page load) — clicked through Vocabulary, Formula, and
  Graph Practice mode cards and confirmed each launches a correctly-filtered,
  correctly-badged session; navigated to a diagram-bearing graph question and
  confirmed the SVG, `role="img"` `aria-label`, and caption all render correctly;
  captured a 375px-wide mobile screenshot of a diagram question showing it scales
  responsively with no horizontal overflow and fully legible labels; answered a
  graph question and confirmed feedback/explanations render; and exercised Reset
  Progress (confirmed via `window.confirm` stub) returning the dashboard to 0
  attempted with the full 271-question total intact.
- `localStorage` schema (`econ10bStudyGame:v1`) is unchanged.
- No files from `private-materials/` were staged or committed; the app remains a
  static, no-build, no-backend site — GitHub Pages compatibility is unaffected.

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
