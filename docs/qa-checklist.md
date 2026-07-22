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
`"standard"`, `"vocab"`, `"formula"`, or `"graph"`, no duplicate question IDs, and
flags near-duplicate question text as a warning. Exits non-zero on any error — safe
to wire into a pre-push hook or CI step later if desired. Also passes cleanly on an
intentionally empty bank (`[]` in all three data files) — see "Empty-bank / reset
checks" below.

The same schema checks also run in-browser on page load via `src/data.js`, logging any
issues to the console (`console.warn`) without blocking the app.

## Clearing localStorage for testing

Progress is stored under the key `econ10bStudyGame:v1`. To reset while testing:

- Click **Reset Progress** at the bottom of the home screen (asks for confirmation), or
- In the browser console: `localStorage.removeItem('econ10bStudyGame:v1')` then reload, or
- Clear all site data for `localhost`/the GitHub Pages origin via browser dev tools.

## Empty-bank / reset checks

**Status update (2026-07-21, later the same day):** the empty bank described
below was populated the same day with the first post-midterm batch (105
questions, 6 topics, 2 sources — see
`docs/update-notes/2026-07-21-first-post-midterm-bank-results.md`). The
checks in this section are kept as-is for the *next* time the bank is
intentionally emptied (a future reset), not because the bank is currently
empty — see "Checks specific to the first post-midterm batch" further below
for checks that apply to the bank's current, populated state.

Run these whenever `data/questions.json`, `data/topics.json`, or
`data/sources.json` is intentionally emptied (as in the 2026-07-21
post-midterm reset) or before generating a new batch into an empty bank:

- **App loads with 0 questions**: open the app with the current (empty) data
  files and confirm it loads with no console errors — no "Could not load the
  question bank" message, no uncaught exceptions.
- **No old topics/sources/questions appear anywhere**: the home screen, quiz
  screen, and results screen never reference pre-midterm topic names, source
  labels, or question text. `data/questions.json`, `data/topics.json`, and
  `data/sources.json` all parse to `[]`.
- **No Midterm Review card appears**: confirm there is no "Midterm Review"
  mode card, badge, or reference anywhere in the rendered UI.
- **Mode cards with 0 questions hide or disable gracefully**: Full Bank and
  Shuffle Mixed Practice should be disabled ("Nothing here yet") rather than
  launching an empty session; Vocabulary/Definitions, Formula Practice, and
  Graph Practice should not render at all (their cards are gated on
  `count > 0`); with an empty bank the whole Study Modes section, Focus Next
  block, and topic dashboard should be hidden in favor of the "No questions
  yet. Add new course materials and generate a new bank." message.
- **Reset Progress works**: click it with an empty bank loaded — it should
  still clear `localStorage` and return to the home screen without error.
- **Validation passes**: `node scripts/validate-data.mjs` exits 0 with
  "Checked 0 questions, 0 topics, 0 sources" and no errors/warnings.
- **Old `localStorage` does not crash the app**: with old
  `econ10bStudyGame:v1` progress data still present from before the reset
  (don't clear it first), reload the app against the new empty data files and
  confirm it still loads cleanly — orphaned question-id stats for
  now-deleted questions should simply go unused, not throw.

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
  Graph Practice, topic practice, Review Missed in Topic) and that
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
> **Note (2026-07-21 reset):** the Midterm Review mode, its `midterm_review`-
> sourced questions, and the checks that used to cover them here were removed
> along with the rest of the pre-midterm/midterm bank — see
> `docs/update-notes/2026-07-21-post-midterm-empty-reset-plan.md`. The
> shared-phrase check below is kept since it applies to any future multi-
> variant batch, not just the old midterm expansion.

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
- **Correct-choice-vs.-source wording check**: separately from the
  source-grounding spot check above (which looks at `correctExplanation`),
  compare each correct answer choice's exact wording against the source's
  own distinctive phrases. It's easy for a choice written right next to a
  source quote in `correctExplanation` to end up as a synonym-swapped
  near-copy of that same sentence rather than an independent paraphrase —
  this was the central finding of the 2026-07-14 crisis2008 audit (13 of
  37 choices rewritten for this reason; see
  `docs/update-notes/2026-07-14-crisis2008-quality-audit-results.md`).
- **New topic (if added) appears correctly**: confirm the new topic shows
  up on the home dashboard with a 0%-progress card, its questions are
  reachable both from that topic card and from Full Bank/Shuffle Mixed
  Practice, and its name/description read clearly out of context.

## Checks specific to the first post-midterm batch (`class8`/`class9`)

Run these when reviewing or extending the 2026-07-21 first post-midterm
batch (105 questions across `unemployment`, `business-cycles-output-gaps`,
`keynesian-cross-model`, `fiscal-policy`, `money-market`, and
`monetary-policy-postmidterm`):

- **No stale pre-midterm topic/source IDs are active**: confirm
  `data/topics.json` and `data/sources.json` contain only the 6 new topics
  and 2 new sources (`class8`, `class9`) — none of the old pre-midterm IDs
  (`class1`-`class6`, `ds1`-`ds3`, `money-banking`, `loanable-funds`, etc.)
  should appear anywhere in the active data files.
- **`class9`'s fiscal-policy gap is respected**: confirm no question with
  `"topic": "fiscal-policy"` cites `"class9"` in its `sourceIds` — per
  `docs/source-notes.md`, `class9`'s own agenda lists fiscal policy but the
  deck has no extractable fiscal-policy content; every fiscal-policy
  question should cite `class8` only.
- **Fresh Keynesian-r-model numbers, not the slide's own example**: `class9`
  teaches its C/IP/PAE-with-r example using specific coefficients (C0=1000,
  mpc=0.75, IP0=300, G=300, T=200, NX=20). Confirm no formula question in
  `monetary-policy-postmidterm` reuses these exact coefficients — the bank's
  `monpolicy-formula-003`/`004` questions use an independently constructed
  economy (C0=900, mpc=0.7, IP0=250, G=320, T=180, NX=30) per the
  no-verbatim-numeric-example rule.
- **Money-market has 0 formula questions, by design**: confirm
  `data/questions.json` has no `"topic": "money-market"` question with
  `"questionType": "formula"` — `class9`'s money-supply/demand section is
  conceptual with no worked numeric example, so forcing a calculation
  question there would violate the type-quota-honesty rule (see
  `docs/source-notes.md`'s type-quota-honesty note for the reallocation
  this produced).
- **Okun's Law and output-gap sign conventions are consistent**: spot-check
  a few `business-cycles-output-gaps` formula questions to confirm the
  output-gap formula is always applied as `(Y - Y*)/Y* x 100` (not
  `(Y* - Y)/Y*`) and Okun's Law as `-2 x (u - u*)` (not `2 x (u - u*)` or
  `-2 x (u* - u)`) — several questions in this batch specifically test
  sign-error diagnosis, so it's worth re-verifying the *correct* answer's
  own sign is right, not just the distractors'.
- **Taylor rule arithmetic re-verified independently**: for
  `monpolicy-formula-005`/`006`/`007`, recompute
  `r = r* + 0.5(π-π*) - 0.5[(Y*-Y)/Y* x 100]` by hand or with a quick
  script for each question's own numbers, rather than trusting the stored
  answer — this formula has two sign-sensitive terms and is the batch's
  most error-prone calculation.

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
