# QA Checklist

Manual and scripted checks to run before pushing changes to this app. Nothing here
requires a build step — the app is static HTML/CSS/JS served directly.

## Running locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Opening `index.html` directly via `file://` also
works (all data is fetched with relative paths, no backend).

## Data validation

Run the dependency-free validation script before committing any change to
`data/questions.json`, `data/topics.json`, or `data/sources.json`:

```bash
node scripts/validate-data.mjs
```

It checks: JSON parses, every question has all required fields, `answerIndex` is in
range, `choices`/`wrongExplanations` lengths match, the correct choice's
`wrongExplanations` entry is `null` and every incorrect choice has a non-empty one,
`topic`/`sourceIds` references exist, `questionType` (if present) is one of
`"standard"`, `"vocab"`, or `"formula"`, no duplicate question IDs, and flags
near-duplicate question text as a warning. Exits non-zero on any error — safe to wire
into a pre-push hook or CI step later if desired.

The same schema checks also run in-browser on page load via `src/data.js`, logging any
issues to the console (`console.warn`) without blocking the app.

## Clearing localStorage for testing

Progress is stored under the key `econ10bStudyGame:v1`. To reset while testing:

- Click **Reset Progress** at the bottom of the home screen (asks for confirmation), or
- In the browser console: `localStorage.removeItem('econ10bStudyGame:v1')` then reload, or
- Clear all site data for `localhost`/the GitHub Pages origin via browser dev tools.

## Key flows to test before pushing

- **First-time / clean localStorage**: 0 attempted, all topics "Not Started", Continue
  Studying defaults to New/Unseen (or Shuffle if somehow nothing is unseen), Focus Next
  and the weakest-topic banner stay hidden until there's enough data.
- **Full Bank**: answer several questions, confirm correct/incorrect feedback and
  explanations render, Previous/Next preserve answered state, Finish reaches Results.
- **Answer choice shuffling**: start the same mode (e.g. Full Bank) in two separate
  fresh sessions and confirm a given question's choices render in a different order
  each time (source data in `data/questions.json` must never change — verify with
  `git status`/diff after playing). Within one session, answer a question, then use
  Previous/Next to leave and return to it — the choice order must stay identical.
  Click the correct choice in its shuffled position and confirm it's still graded
  correct, "Why the correct answer is right" still shows the matching explanation, and
  each wrong choice still shows its own matching wrong explanation (not another
  choice's). Confirm this holds in every mode (Full Bank, Shuffle Mixed Practice,
  Review Missed, New/Unseen, Needs Review, Vocabulary/Definitions, Formula Practice,
  Graph Practice, topic practice, Review Missed in Topic) and that re-entering Review
  Missed from the Results screen reshuffles again rather than reusing the prior
  session's order. For graph questions with a `diagram`, confirm the diagram itself
  (and its alt text) stays the same regardless of choice order — only the answer
  choices should shuffle, never the diagram.
- **Formula Practice**: confirm the mode card appears on the home screen with a count
  matching the number of `questionType: "formula"` questions, that clicking Start
  launches a shuffled session containing only formula questions, and that the mode
  card is hidden entirely (not just disabled) if the bank ever has zero formula
  questions. Confirm formula questions also still surface normally in Full Bank,
  Shuffle Mixed Practice, New/Unseen, Review Missed, Needs Review, and their own
  topic's practice/missed-review sessions — Formula Practice must not be the only
  place they appear.
- **Formula badges**: open a formula-type question in any mode and confirm a small
  "Formula" badge renders in the quiz metadata row alongside the topic/subtopic/
  difficulty/source badges, without crowding or wrapping awkwardly on mobile widths.
  Confirm non-formula questions never show this badge, and vocab questions still show
  only the "Vocab" badge (not both).
- **Formula explanations show the math**: spot-check several formula questions'
  "Why the correct answer is right" text — it should name the formula, show the
  substitution with the question's actual numbers, and state the resulting value, not
  just assert which choice is correct.
- **Graph Practice**: confirm the mode card appears on the home screen with a count
  matching the number of `questionType: "graph"` questions, that clicking Start
  launches a shuffled session containing only graph questions, and that the mode card
  is hidden entirely (not just disabled) if the bank ever has zero graph questions.
  Confirm graph questions also still surface normally in Full Bank, Shuffle Mixed
  Practice, New/Unseen, Review Missed, Needs Review, and their own topic's practice/
  missed-review sessions — Graph Practice must not be the only place they appear.
- **Graph badges**: open a graph-type question in any mode and confirm a small
  "Graph" badge (visually distinct from the Vocab and Formula badges) renders in the
  quiz metadata row, without crowding or wrapping awkwardly on mobile widths. Confirm
  non-graph questions never show this badge.
- **Diagram rendering**: open several graph questions that include an inline
  `diagram` field and confirm the SVG renders above the question stem inside a
  bordered panel, with a visible caption underneath matching the `diagram.alt` text.
  Confirm the diagram never overflows its container or causes horizontal page
  scrolling, that its lines/text stay legible in both light and dark mode (the
  strokes should visibly recolor when toggling `prefers-color-scheme`), and that
  graph questions with no `diagram` field render normally with no empty gap where a
  diagram would go.
- **Diagram mobile responsiveness**: at a ~360–390px viewport width, confirm inline
  diagrams scale down to fit the screen (no horizontal scroll, no clipped labels)
  and stay comfortably readable — text labels should not become illegibly small.
- **Graph answer-choice/explanation mapping**: for a handful of graph questions,
  verify each wrong choice's explanation actually corresponds to that specific
  distractor (e.g., a "shifted the wrong curve" explanation should be attached to the
  choice that actually describes shifting the wrong curve, not a different mistake)
  — this matters more for graph questions than most, since several choices often
  describe plausible-sounding but distinct curve/direction combinations.
- **Shuffle Mixed Practice**: test 10 / 20 / All session lengths — confirm the session
  length matches the selection, pulls from multiple topics, and never repeats a question
  within one session.
- **Topic practice**: practice at least two different topics — confirm only that
  topic's questions appear, the quiz header's topic/subtopic/source labels match, and
  the topic card's attempted/accuracy/status badge update correctly afterward.
- **Review Missed** (global and per-topic): miss a few questions, confirm the mode
  enables and only includes missed questions; confirm a topic's "Review Missed" button
  is disabled until that topic has a miss.
- **New/Unseen**: confirm it excludes already-attempted questions and gracefully shows
  a disabled "Nothing here yet" state once everything has been attempted at least once.
- **Needs Review**: only appears when at least one question has `needsReview: true` in
  the data. Don't flip real question data to test this — inspect
  `Scoring.needsReviewQuestions` / the `hasNeedsReview` check in `src/app.js` instead.
- **Focus Next**: build up progress in a couple of topics with below-80% accuracy
  (needs 3+ attempts per topic) and confirm up to 3 lowest-accuracy topics show, each
  with a working "Drill this topic" button.
- **Results screen**: confirm the score/percentage are correct, missed questions are
  grouped by topic, the recommendation text makes sense, and all three action buttons
  (Review Missed, Shuffle Mixed Practice, Back to Topic Dashboard) work.
- **Reset Progress**: confirm it clears all stats, returns the dashboard to the
  first-time state, and hides any stale Focus Next / weakest-topic UI.
- **Mobile width** (~360–390px): no horizontal scrolling anywhere (home, quiz,
  feedback, results), cards stack in a single column, choice buttons are comfortably
  tappable, the sticky quiz progress bar/header doesn't cover question content.
- **Reload mid-quiz**: reloading during an active session returns cleanly to the home
  screen (session state is intentionally not persisted — only individual question
  attempts are, via `localStorage`).
- **Malformed localStorage**: if `localStorage.getItem('econ10bStudyGame:v1')` is
  invalid JSON, the app should still load and start from a fresh state rather than
  crashing (`src/storage.js` catches parse errors).
- **Dark mode**: check `prefers-color-scheme: dark` in a browser/OS with dark mode
  enabled — text should stay readable against the navy background. (If a screenshot
  taken immediately after answering looks washed out, that's the ~0.2s feedback
  fade-in animation, not a contrast bug — wait a beat and re-check.)

## Verifying GitHub Pages compatibility

- Keep `index.html` at the repo root with only relative paths (`./styles/...`,
  `./src/...`, `./data/...`) — no absolute paths, no build step, no server-side
  includes.
- After pushing to `main`, confirm the deployed site at
  `https://dkyaya.github.io/ec10bStudyGame/` loads and the browser console shows no
  errors.
- Confirm `manifest.webmanifest` and every icon path it and `index.html` reference
  (`assets/icons/...`) resolve — a 404 on an icon won't break the app, but will show up
  as a console warning in dev tools.
