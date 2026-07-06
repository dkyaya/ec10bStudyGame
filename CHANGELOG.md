# Changelog

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
