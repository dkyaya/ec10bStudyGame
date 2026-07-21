# 2026-07-21 Post-Midterm Empty Bank Reset — Plan

## Context

The midterm is over. The user wants the app reset for the post-midterm phase
*now*, even though new Canvas materials haven't been uploaded to
`private-materials/` yet. This is an intentional wipe, not a bug fix — old
progress mapping cleanly onto a new bank is explicitly not a goal.

## Old state before reset

- **377 total questions**
- **18 topics**
- **14 sources**
- Existing `questionType` values in use: `"standard"`, `"vocab"`, `"formula"`,
  `"graph"`
- Existing filtered study modes: Vocabulary / Definitions, Formula Practice,
  Graph Practice, **Midterm Review**
- Midterm Review pulled every question sourced from
  `MidtermStudyMaterials_Summer2026.doc` (69 questions as of the 2026-07-12
  expansion) via a `MIDTERM_REVIEW_SOURCE_IDS` allow-list in `src/scoring.js`.

## User intent

- Wipe the old pre-midterm/midterm question bank now, permanently — old
  Midterm Review questions are safe to lose for good, not archived.
- Remove the Midterm Review mode entirely, since it was tied specifically to
  the old midterm materials and no longer makes sense post-midterm.
- Wait for new Canvas materials before generating any new questions — do
  **not** invent a placeholder bank or reuse old pre-midterm/midterm sources
  to build a "new" one.
- Future questions should be meaningfully more challenging than the old bank:
  more application, mechanism reasoning, common-confusion diagnosis, and
  interpretation; less simple recall. Not "seasoned economist" hard — just
  "requires thinking" hard.
- Vocabulary and formula coverage should remain expansive once new materials
  arrive; the difficulty push is about the overall mix skewing harder, not
  about narrowing type coverage.

## What was removed

- All contents of `data/questions.json`, `data/topics.json`,
  `data/sources.json` (each reset to `[]`).
- The Midterm Review study mode: its mode card in `src/render.js`
  (`buildModeList`), its case in the `onModeSelect` switch in `src/app.js`,
  and `Scoring.midtermReviewQuestions` / `MIDTERM_REVIEW_SOURCE_IDS` in
  `src/scoring.js`.
- Active/current references to Midterm Review as a present-tense mode in
  `README.md` and `docs/qa-checklist.md`.

## What was preserved

- All general app infrastructure: Full Bank, Shuffle Mixed Practice, Review
  Missed, New/Unseen, Needs Review, Vocabulary / Definitions, Formula
  Practice, and Graph Practice — all still wired up and ready to activate
  automatically once questions with matching `questionType`s exist again.
- The `questionType` schema (`"standard"`, `"vocab"`, `"formula"`, `"graph"`)
  and the optional SVG `diagram` schema, in both `src/data.js`'s in-browser
  validator and `scripts/validate-data.mjs`.
- Answer-choice shuffling (`Utils.shuffleChoicesForSession`), the
  `localStorage` schema (`econ10bStudyGame:v1`), and `Reset Progress`.
- All historical `CHANGELOG.md` entries and `docs/update-notes/*` files —
  nothing was deleted, only appended to.
- `docs/source-notes.md`'s full historical record of the pre-midterm
  materials, extraction notes, and audits — marked as no-longer-active
  rather than erased, since the file is a project record.
- The full set of question-quality rules in
  `docs/question-authoring-guide.md` (no verbatim copying, no answer-choice
  structure copying, no mad-libs number substitution, self-contained
  questions, source-grounded graph questions, hard-but-fair theory questions)
  — all still apply to future batches, restated inside the new "Post-midterm
  difficulty standard" section.

## What was added

- A new "Post-midterm difficulty standard" section in
  `docs/question-authoring-guide.md` setting expectations for future batches:
  lean medium/hard by default, reserve easy for core definitions/formulas,
  specific guidance for theory/formula/vocab question types, and a target
  difficulty mix for the first post-midterm batch.
- Empty-bank UI handling in `src/app.js` / `src/render.js` / `index.html` /
  `styles/main.css`: when `questions.length === 0`, the home screen shows a
  "No questions yet. Add new course materials and generate a new bank."
  message and hides the Study Modes / Focus Next / Topic Dashboard sections
  instead of rendering a wall of disabled cards or an empty topic grid.

## What should happen once new materials are uploaded

1. Place the new Canvas materials (slides, notes, problem sets, whatever
   Canvas provides) into `private-materials/` — never commit them.
2. Extract and read the actual text before writing any question — no writing
   from memory of what a slide "probably" says, and no reusing old
   pre-midterm/midterm sources to build the new bank.
3. Add topics to `data/topics.json` and sources to `data/sources.json`
   describing the new materials.
4. Author questions following `docs/question-authoring-guide.md`, including
   the new "Post-midterm difficulty standard" section — lean medium/hard,
   keep vocab/formula coverage expansive, add graph questions only where the
   material actually supports curve-shift/equilibrium reasoning.
5. Run `node scripts/validate-data.mjs` and fix all errors; investigate all
   warnings.
6. Update `docs/source-notes.md` (replace or extend the "active post-midterm
   sources" placeholder section with the real new sources) and `README.md`
   (question/topic/source counts).
7. Add a dated `CHANGELOG.md` entry and a matching `docs/update-notes/`
   plan/results pair for the batch.

## Suggested future first-batch target

- **80–140 questions** if multiple substantial new materials are uploaded at
  once; **40–70 questions** if it's just one short deck or a single set of
  notes.
- **Difficulty mix:** roughly 15–20% easy, 45–55% medium, 30–40% hard.
- **Expansive vocab and formula coverage** wherever the new material
  actually supports it — don't under-cover these just to hit the harder
  medium/hard mix; the difficulty push is about tilting the overall
  distribution, not skipping foundational coverage.
- **Graph questions only if the new material supports graph reasoning**
  (supply/demand-, equilibrium-, or curve-shift-style diagrams) — don't
  force a `graph` classification onto a source that doesn't teach that
  specific skill, per the existing rule in
  `docs/question-authoring-guide.md`.
