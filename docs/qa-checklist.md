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
  Graph Practice, Midterm Review, topic practice, Review Missed in Topic) and that
  re-entering Review Missed from the Results screen reshuffles again rather than
  reusing the prior session's order. For graph questions with a `diagram`, confirm
  the diagram itself (and its alt text) stays the same regardless of choice order —
  only the answer choices should shuffle, never the diagram.
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
- **Midterm Review**: confirm the mode card appears on the home screen with a count
  matching the number of questions sourced from `midterm_review` (69 as of the
  2026-07-12 expansion — check `Scoring.midtermReviewQuestions(questions).length`
  or filter `data/questions.json` on `sourceIds.includes("midterm_review")`), or any
  future exam-prep source added to `Scoring.midtermReviewQuestions`'s allow-list in
  `src/scoring.js`, that clicking Start launches a shuffled session, and that the
  mode card is hidden entirely if no exam-prep questions exist. Confirm Midterm
  Review questions also still surface normally in Full Bank, Shuffle Mixed Practice,
  New/Unseen, Review Missed, topic practice, and — for the ones with a matching
  `questionType` — Formula Practice, Graph Practice, and Vocabulary/Definitions;
  Midterm Review must not be the only place they appear. Since Midterm Review is a
  source-based filter (not a `questionType`), confirm it has no dedicated badge and
  instead shows its `sourceLabel` ("Instructor Midterm Study Guide and Practice
  Problems") in the quiz metadata row like any other sourced question. If a second
  exam-prep source is ever added, confirm both source IDs are present in the
  `MIDTERM_REVIEW_SOURCE_IDS` Set in `src/scoring.js` and that the mode's count
  reflects both sources combined, not just one.
- **Exam-prep questions with answer-choice shuffling**: within a Midterm Review
  session, spot-check several `formula`-type questions across different worked-
  problem topics (saving/investment, CPI/indexing, compound growth, value-added GDP,
  stock present value, capital flows) and confirm each still shows the correct
  computed value regardless of shuffle position. Confirm at least a few of the
  `graph`-type questions (both the original diagram-bearing one,
  `graph-examprep-verticalsaving-001`, and at least one of the newer text-described
  graph variants) render correctly and grade correctly after shuffling.
- **Midterm Review variant quality spot-check**: for a sample of the
  `midterm-var-*` questions, confirm the question reads as a self-contained, freshly
  worded scenario (not a number-swapped copy of the source's own worked problem or
  of the original `*-examprep-*` question testing the same concept), and
  independently recompute one or two formula answers by hand against the stated
  `correctExplanation` to confirm no transcription error crept in between the
  authoring script and `data/questions.json`.
- **Shared-phrase check for multi-variant batches**: whenever a batch of several
  new questions is authored from the same handful of source problems (as with
  the `midterm-var-*` expansion), run a small script that finds shared
  multi-word phrases (6-7+ consecutive words) between each new question's full
  text (stem + choices + all explanations) and its closest sibling question,
  not just a manual read-through. The 2026-07-12 quality audit found several
  cases where the question stem read as sufficiently distinct on a manual pass
  but the `correctExplanation`/`wrongExplanations` still reused a sibling's
  exact clause structure — a shared-phrase script catches this reliably where
  eyeballing missed it. Distinguish genuine template copying from short,
  unavoidable technical phrasing that precisely names a specific formula or
  identity (e.g., "what happens to the equilibrium real interest rate and the
  level of investment") — the latter is expected to recur across a family of
  questions testing the same identity and is not itself a violation.
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

## Checks for new fair-game/theory-heavy source additions

Run these in addition to the standard checks above whenever a new batch of
questions is added from a dense, mostly-non-quantitative lecture source
(one flagged as "fair game" material students feel underprepared for,
rather than a quiz/discussion-solutions/problem-set source with worked
numeric answers):

- **Source-grounding spot check**: for a random sample of ~20% of the new
  questions, re-open the extracted source text and confirm the quoted or
  paraphrased line in `correctExplanation` actually appears in the source,
  not just plausible-sounding economics.
- **Hard-but-fair review**: for every question marked `"difficulty":
  "hard"`, confirm it's hard because it requires applying the source's own
  logic to a new scenario, rejecting a plausible-but-wrong mechanism, or
  connecting two concepts from the same source — not because of obscure
  wording, ambiguity, or two defensible answer choices. If a hard question
  can't be defended this way, either fix it or downgrade its difficulty.
- **Ambiguity check**: for each question, confirm exactly one choice is
  correct under any reasonable reading of the source — no two choices
  should both be defensible depending on an unstated assumption.
- **No invented content**: confirm no question tests a claim, mechanism,
  or number that doesn't actually appear in (or follow directly from) the
  source material — outside general-knowledge economics is not a
  substitute for source-grounding, even when it happens to be correct.
- **Type-quota honesty**: confirm `graph`/`formula` questions were only
  added if the source actually teaches curve-shift/equilibrium-diagram
  reasoning or requires a calculation, respectively — a source with no
  such content should show `0` for that type rather than a forced
  question shoehorned into the wrong `questionType`.
- **Shared-phrase check for multi-question batches**: run a quick
  normalized-substring scan across the new batch's `question` and
  `correctExplanation` text (see the mad-libs note in
  `docs/question-authoring-guide.md`) to catch sentence-architecture
  copying between sibling questions on the same subtopic.
- **New topic (if added) appears correctly**: confirm the new topic shows
  up on the home dashboard with a 0%-progress card, its questions are
  reachable both from that topic card and from Full Bank/Shuffle Mixed
  Practice, and its name/description read clearly out of context.

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
