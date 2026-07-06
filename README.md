# Econ 10b · Macro Practice

A static, no-build, no-backend study game for Harvard Summer School's Econ S10-b
(Principles of Macroeconomics). It quizzes students with multiple-choice questions
generated from the course's own lecture slides, discussion-section solutions, and
problem-set solutions, organized by topic, with progress saved locally in the browser.

## What this is

- **Multiple choice only**, four answer choices per question (unless a source clearly
  supports a different number).
- Every question includes an explanation for the correct answer **and** a specific
  explanation for each incorrect choice — no generic "this is wrong" text.
- Questions are organized into 11 topics spanning basic economic analysis, comparative
  advantage and trade, supply and demand, GDP accounting, CPI/inflation, labor markets,
  productivity and wages, inequality/globalization, and economic growth.
- All progress (attempts, correct/incorrect history, per-topic accuracy) is saved to
  `localStorage` in the student's own browser. There is no login, no backend, and no
  external database — nothing leaves the device.
- The question bank is meant to grow: as new lecture slides, discussion sections, or
  problem sets are added, new questions get appended following the conventions in
  `docs/question-authoring-guide.md`.

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
  questions.json                 the question bank (102 questions as of the initial build)
  topics.json                    topic list (id, name, description)
  sources.json                   source-material metadata (which file, what it covers, reliability notes)
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
   distractor.
4. If any source content was unclear or only partially readable, set that question's
   `needsReview: true` and document what needs confirming in `docs/source-notes.md`.
5. Reload the app locally and check the browser console — `src/data.js` runs schema
   validation on load and will `console.warn` about any missing fields, bad references,
   or mismatched arrays.
6. Add a dated entry to `CHANGELOG.md`.

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
