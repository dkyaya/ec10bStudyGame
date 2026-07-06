# Question Authoring Guide

This guide explains how to add new questions, topics, and sources to the Econ 10b
study game as new course materials become available.

## Question schema

Every question in `data/questions.json` is an object with these fields:

```json
{
  "id": "class1-opportunity-cost-001",
  "topic": "econ-analysis-basics",
  "subtopic": "Opportunity Cost",
  "difficulty": "easy",
  "sourceIds": ["class1"],
  "sourceLabel": "Class 1 slides",
  "needsReview": false,
  "question": "Which statement best describes opportunity cost?",
  "choices": [
    "The dollar price paid for an activity",
    "The value of the best alternative forgone",
    "The sum of all possible alternatives forgone",
    "The average cost of all activities available"
  ],
  "answerIndex": 1,
  "correctExplanation": "Opportunity cost is the value of the best alternative forgone when choosing an activity.",
  "wrongExplanations": [
    "The dollar price may be part of opportunity cost, but it's broader than the explicit monetary price.",
    null,
    "Opportunity cost is not the combined value of every possible alternative; it is based on the best forgone alternative.",
    "Average cost is total cost divided by units, a different concept from opportunity cost."
  ],
  "tags": ["opportunity cost", "implicit cost", "explicit cost"]
}
```

Field rules:

- **`id`** — stable, unique, kebab-case. Convention: `{primary-source}-{subtopic-slug}-{3-digit-number}`.
- **`topic`** — must match an `id` in `data/topics.json`.
- **`sourceIds`** — array; every entry must match an `id` in `data/sources.json`.
- **`answerIndex`** is zero-based.
- **`choices`** and **`wrongExplanations`** must be the same length.
- **`wrongExplanations[answerIndex]` must be `null`** — the correct answer has no
  "wrong explanation" slot.
- **Every other index must have a non-empty, specific string.** Never write something
  generic like "This is wrong." Each distractor explanation should say *why* that
  specific choice is wrong, ideally naming the misconception it represents (e.g.,
  "This describes absolute advantage, not comparative advantage").
- **`difficulty`** — one of `"easy"` (direct definition/single-step recognition),
  `"medium"` (one calculation or conceptual application), or `"hard"` (multi-step
  calculation, subtle accounting distinction, or comparative-static reasoning).
- **`needsReview`** — see below.

## Writing good distractors

A good wrong-answer explanation:

- Names the specific misconception behind that choice (a common error, a swapped
  definition, an off-by-one arithmetic slip, a sign error).
- Is falsifiable against the source material — a grader could check it against the
  slides/solutions and confirm it's accurate.
- Avoids vague language ("this is incorrect", "not quite right") with no reason why.

When writing calculation questions based on a discussion-section or problem-set
solution, **don't reuse the exact numbers from the answer key.** Build a new scenario
that tests the identical skill (e.g., the same formula or the same kind of GDP
accounting trap) with different figures or a renamed scenario. This keeps the practice
bank distinct from a copy of the solutions while still being fully conservative — it's
still testing exactly what the course covered.

## Marking `needsReview`

Set `"needsReview": true` when a question is derived from source content that was:

- Illegible or low-resolution in the original file,
- A table or chart where column/row alignment was ambiguous after extraction,
- A slide with only partial text (e.g., a title with no body content, requiring
  guesswork about what was actually taught), or
- Otherwise uncertain in a way a human should double-check before treating the
  question as verified.

When you set `needsReview: true`, also add a short note to `docs/source-notes.md`
under a "needsReview items" section describing exactly what needs confirmation (e.g.,
"Class 5, slide 12's table had merged cells that pdftotext could not disambiguate;
confirm the marginal-cost column before using this question"). Never present a
needs-review question as fully verified in the UI — the app already surfaces this via
the "Needs Review" study mode, which only appears when at least one question has the
flag set.

## Citing `sourceIds` and `sourceLabel`

- `sourceIds` is the machine-readable link to `data/sources.json` entries — always an
  array, even for a single source (e.g., `["class2"]`).
- `sourceLabel` is the human-readable citation shown in the quiz UI (e.g., "Class 2
  slides", "Discussion Session 1 Solutions"). Keep it short and consistent with how
  other questions from the same source are labeled.
- If a question draws on more than one source (e.g., a concept from lecture applied
  via a discussion-section example), list both in `sourceIds` and use a combined
  `sourceLabel` like `"Class 3 and Class 4 slides"`.

## Adding a new topic

1. Add an entry to `data/topics.json`:
   ```json
   { "id": "new-topic-slug", "name": "Human-Readable Topic Name", "description": "One sentence description." }
   ```
2. Use a stable, kebab-case `id` — this is what questions reference in their `topic`
   field, and it should never be renamed once questions use it (renaming breaks the
   reference; add a new topic instead if the scope changes significantly).
3. Add questions with `"topic": "new-topic-slug"`.

## Adding a new source

1. Add an entry to `data/sources.json`:
   ```json
   {
     "id": "new-source-id",
     "filename": "OriginalFileName.pptx",
     "title": "Human-readable title",
     "type": "lecture-slides",
     "coverageSummary": "One or two sentences on what this file covers.",
     "dateAdded": "YYYY-MM-DD",
     "reliabilityNotes": "Any extraction issues, illegible sections, or caveats."
   }
   ```
2. Extract the file's text before writing questions — don't write questions from
   memory or assumption about what a slide deck "probably" contains.
3. Update `docs/source-notes.md` with a summary of what topics the new material covers
   and any sections that were unreadable or ambiguous.
4. Add new questions referencing the new source id, and update the "Initial question
   bank" counts in `README.md` and the `CHANGELOG.md` entry for the change.

## Running the validation checks

Open the app in a browser and check the console. `src/data.js` runs schema validation
on every page load and logs any problems as `console.warn` (never shown to the
student). Before committing new questions, load the app locally and confirm the
console reports something like:

```
[Econ 10b question bank validation] 123 questions passed all checks.
```

If it instead lists issues, fix them before committing — the validator checks for
missing required fields, out-of-range `answerIndex`, mismatched `choices`/
`wrongExplanations` lengths, a non-null explanation at the correct answer's index,
empty explanations at incorrect indices, and unknown `topic`/`sourceIds` references.
