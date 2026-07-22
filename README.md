# Econ 10b · Macro Practice

A static, no-build, no-backend study game for Harvard Summer School's Econ S10-b
(Principles of Macroeconomics). It quizzes students with multiple-choice questions
generated from the course's own lecture slides, discussion-section solutions, and
problem-set solutions, organized by topic, with progress saved locally in the browser.

## Current status: first post-midterm question bank

The midterm is over. On 2026-07-21 this app was intentionally reset to an empty
question bank (the old pre-midterm/midterm bank — 377 questions across 18 topics
and 14 sources — and the old **Midterm Review** study mode were permanently
removed), and later the same day, the **first post-midterm question bank** was
generated from newly uploaded Class 8 and Class 9 course materials. See
`docs/update-notes/2026-07-21-post-midterm-empty-reset-plan.md` for the reset and
`docs/update-notes/2026-07-21-first-post-midterm-bank-results.md` for this batch.

- **Active question count: 105**, across **6 topics** and **2 sources**
  (`class8`, `class9`).
- **Question type breakdown:** 41 `standard`, 26 `vocab`, 27 `formula`, 11 `graph`
  (9 of the 11 graph questions include an inline SVG diagram).
- **Difficulty breakdown:** 16 easy (15%), 53 medium (50%), 36 hard (34%) — a
  noticeably harder mix than the old pre-midterm bank, per the "Post-midterm
  difficulty standard" in `docs/question-authoring-guide.md`.
- **Topics:** Unemployment: Measurement, Costs, and Types · Business Cycles,
  Output Gaps, and Okun's Law · The Keynesian Cross Model of Short-Run Output ·
  Fiscal Policy and Stabilization · The Fed, Money Supply, and Money Demand ·
  Monetary Policy Transmission and the Financial Crisis Response.
- **Active study modes:** Full Bank, Shuffle Mixed Practice, Review Missed,
  New/Unseen, Needs Review, Vocabulary / Definitions, Formula Practice, and Graph
  Practice — all populated and working.
- **The Midterm Review mode remains permanently removed** — it is not part of the
  current app and was not reintroduced by this batch. It was tied specifically to
  the instructor's midterm study guide, which is no longer relevant post-midterm.
- No pre-midterm/midterm source is reused in this batch; both new sources
  (`HarvardS10b_Class8.pptx`, `HarvardS10b_Class9_Preliminary.pdf`) were uploaded
  fresh to `private-materials/` after the reset.

## What this is

- **Multiple choice only**, four answer choices per question (unless a source clearly
  supports a different number).
- Every question includes an explanation for the correct answer **and** a specific
  explanation for each incorrect choice — no generic "this is wrong" text.
- Questions are organized by topic (currently 6 topics — see "Current status"
  above).
- A **Vocabulary / Definitions** study mode pulls every question tagged
  `"questionType": "vocab"` across the whole bank into a shuffled,
  definition-focused practice session, in addition to each question's normal place
  within its topic. The mode card only appears once there's at least one vocab
  question.
- A **Formula Practice** study mode pulls every question tagged
  `"questionType": "formula"` across the whole bank into a shuffled
  session of calculation/word-problem questions. Formula questions still appear in
  their normal topic and in every other study mode; Formula Practice is just a
  filtered view. Formula questions show a small "Formula" badge in the quiz header.
  The mode card only appears once there's at least one formula question.
- A **Graph Practice** study mode pulls every question tagged `"questionType": "graph"`
  across the whole bank into a shuffled session of graph-interpretation
  and graph-translation questions, optionally with an inline SVG diagram. Graph
  questions still appear in their normal topic and in every other study mode; Graph
  Practice is just a filtered view. Graph questions show a small "Graph" badge in the
  quiz header. The mode card only appears once there's at least one graph question.
- All progress (attempts, correct/incorrect history, per-topic accuracy) is saved to
  `localStorage` in the student's own browser. There is no login, no backend, and no
  external database — nothing leaves the device.
- The question bank is meant to grow: as new post-midterm lecture slides, discussion
  sections, or problem sets are added, new questions get appended following the
  conventions in `docs/question-authoring-guide.md` — including its new "Post-midterm
  difficulty standard" section, which asks future batches to lean toward
  application/mechanism-heavy medium and hard questions (interpreting a formula,
  tracing a causal step, diagnosing a common mistake, comparing two cases) rather
  than the simple recall the old bank leaned on more heavily.

## Project structure

```
index.html                       entry point (must stay at repo root for GitHub Pages)
src/
  app.js                         screen/state controller, wires everything together
  data.js                        fetches JSON data files, runs schema validation
  storage.js                     localStorage read/write (progress, attempt history)
  scoring.js                     overall/topic progress, missed/unseen/needsReview filters, recommendations
  render.js                      DOM rendering for the home, quiz, and results screens
  utils.js                       small shared helpers (shuffle, percent, DOM helpers)
styles/
  main.css                       all styling — responsive "macro dashboard" layout
data/
  questions.json                 the question bank (105 questions — first post-midterm batch, 2026-07-21)
  topics.json                    topic list (id, name, description) — 6 post-midterm topics
  sources.json                   source-material metadata (which file, what it covers, reliability notes) — 2 sources (class8, class9)
docs/
  source-notes.md                what materials were used, what was extracted, any caveats
  question-authoring-guide.md    schema reference and conventions for adding new questions
assets/
  icons/                         app logo and generated favicon/PWA icon files
manifest.webmanifest             PWA manifest (mobile home-screen bookmarking)
README.md
CHANGELOG.md
```

The app is plain HTML/CSS/JS with no framework, no bundler, and no build step.

## Running locally in VS Code

Open the project folder in VS Code, then either:

- Use the **Live Server** extension (right-click `index.html` → "Open with Live Server"), or
- Run a simple static server from the integrated terminal:

  ```bash
  python3 -m http.server 8000
  ```

  Then open http://localhost:8000 in your browser.

Opening `index.html` directly via `file://` also works, since all data is fetched with
relative paths and there's no backend to run.

## Local course materials

The original course materials (lecture slides, discussion-section solutions, problem-set
solutions) used to generate the question bank are stored locally in the `private-materials/`
folder on your machine. **This folder is intentionally excluded from git** and should
never be pushed to GitHub, since the materials may contain copyrighted course content.

**The app does not require these files to run** — they are only used when generating or
updating questions. GitHub Pages serves only the app, the derived question JSON, and
documentation.

### Updating the question bank

To add new questions from fresh course materials:

1. Place the new slides, solution PDFs, or problem-set materials into `private-materials/`
2. Use a Claude Code prompt to read the new materials and generate questions
3. Write new questions to `data/questions.json`
4. Update `data/sources.json` and `docs/source-notes.md` with source metadata and notes
5. Commit the JSON and documentation — **not** the raw materials
6. Push to GitHub

See `docs/source-notes.md` for details on the local-only workflow and current materials.

## Deploying on GitHub Pages

This repo is connected to https://github.com/dkyaya/ec10bStudyGame.

1. Go to the GitHub repo's **Settings → Pages**.
2. Under "Build and deployment," choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Save.
4. The site will become available at:
   https://dkyaya.github.io/ec10bStudyGame/

Because `index.html` lives at the repo root and every asset is referenced with a
relative path (`./styles/...`, `./src/...`, `./data/...`), no additional Pages
configuration or build step is required.

## Adding new questions

See **`docs/question-authoring-guide.md`** for the full schema, distractor-writing
guidance, and conventions for adding topics/sources. Short version:

1. Extract text from the new source file (don't write questions from memory of what a
   slide "probably" says).
2. Add a `sources.json` entry citing the new file.
3. Add questions to `questions.json` following the existing schema — every question
   needs a correct-answer explanation and a specific wrong-answer explanation for each
   distractor. Set `"questionType": "vocab"` on pure definition/term-recognition
   questions so they show up in the Vocabulary / Definitions study mode,
   `"questionType": "formula"` on calculation/word-problem questions so they show up in
   Formula Practice, or `"questionType": "graph"` on graph-interpretation/translation
   questions so they show up in Graph Practice (optionally with an inline `diagram` SVG
   — see `docs/question-authoring-guide.md`); omit the field (or set `"standard"`) for
   everything else.
4. If any source content was unclear or only partially readable, set that question's
   `needsReview: true` and document what needs confirming in `docs/source-notes.md`.
5. Reload the app locally and check the browser console — `src/data.js` runs schema
   validation on load and will `console.warn` about any missing fields, bad references,
   or mismatched arrays.
6. Add a dated entry to `CHANGELOG.md`.

## Testing / QA

Before pushing a change, run the data validation script:

```bash
node scripts/validate-data.mjs
```

It's a dependency-free Node script that checks `data/questions.json` /
`data/topics.json` / `data/sources.json` for schema issues, bad references, duplicate
IDs, and near-duplicate question text, and exits non-zero if anything's wrong.

See **`docs/qa-checklist.md`** for the full manual playtest checklist (key flows to
click through, how to clear `localStorage` for a clean test, mobile-width checks, and
GitHub Pages verification steps) before pushing future updates.

## App Icon / PWA Icon

- The source logo lives at `assets/icons/ec10b-logo.png` (the original, full-resolution
  crimson-bordered artwork) — the app's favicon, Apple touch icon, and PWA icons are
  all generated from it. Don't hand-edit the generated files directly; regenerate them
  from the source logo if it ever changes.
- Generated icon sizes live alongside it in `assets/icons/`: `favicon-16.png`,
  `favicon-32.png`, `apple-touch-icon.png` (180×180), `icon-192.png`, `icon-512.png`,
  and maskable variants `maskable-icon-192.png` / `maskable-icon-512.png` (padded so
  the crimson border isn't clipped by circular/squircle home-screen masks on Android).
- `manifest.webmanifest` at the repo root registers these icons and enables "Add to
  Home Screen" on mobile (standalone display, theme color, background color).
- **If you update the icon and it doesn't show up on your phone:** mobile browsers and
  home screens cache icons aggressively. Remove the existing home-screen
  bookmark/shortcut and re-add it, and/or clear the site's cached data in
  Safari/Chrome, then reload the page before re-adding the bookmark.

## Resetting progress

Click **Reset Progress** at the bottom of the home screen. This clears all locally
saved attempt history, scores, and topic performance for this browser (it asks for
confirmation first, since it can't be undone). Progress is stored under the
`localStorage` key `econ10bStudyGame:v1` — clearing site data/cookies for this page in
your browser has the same effect.
