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
- **`questionType`** — optional. One of `"standard"` (the default; a regular
  conceptual question), `"vocab"` (a vocabulary/definition question — see below),
  `"formula"` (a calculation/formula word problem — see below), or `"graph"` (a
  graph-interpretation or graph-translation question — see below). Existing
  questions written before this field existed may omit it entirely; the app and
  validator both treat a missing `questionType` the same as `"standard"`.
- **`diagram`** — optional. An inline diagram shown above the question stem. See
  "Writing graph questions" below for the schema and when to use one.

## Writing vocabulary/definition questions

Set `"questionType": "vocab"` on a question when its entire point is to test whether a
student can recognize the correct definition of a term (or pick the term that matches a
given definition), rather than apply a concept to a scenario or work through a
calculation. Vocab questions power the home screen's **Vocabulary / Definitions** study
mode, which pulls every question with `questionType: "vocab"` regardless of topic.

Vocab questions still follow every other rule in this guide:

- Four choices, one clearly correct answer, no "all of the above" / "none of the above."
- A specific `correctExplanation` and a specific `wrongExplanations` entry for every
  incorrect choice — never a generic "this is wrong."
- A real `topic`, real `sourceIds`, and a real `sourceLabel` — vocab questions are just
  as source-grounded as any other question, not a separate free-floating flashcard set.

**Good vocab distractors** name a different, real term or concept from the material —
something a student could plausibly confuse the target term with:

```json
{
  "question": "Public saving is defined as:",
  "choices": ["T – G", "Y – T – C", "G – T", "Y – C – G"],
  "answerIndex": 0,
  "wrongExplanations": [
    null,
    "Y − T − C is private saving, not public saving.",
    "G − T reverses the terms; public saving is net taxes minus government spending, not the other way around.",
    "Y − C − G is national saving (private plus public combined), not public saving alone."
  ]
}
```

Each wrong choice here is a *real* formula from the same lecture, and each explanation
says exactly which other term it belongs to. That's what makes the distractor useful for
studying, not just filler.

**Bad vocab distractors** are vague, made-up, or don't correspond to anything the course
actually taught — e.g., a choice like "A type of government bond" for the term "wealth,"
with an explanation of "This is incorrect." Don't invent plausible-sounding jargon that
isn't in the source material just to fill a fourth choice.

To convert an *existing* non-vocab question to `questionType: "vocab"`, only do so if it
is genuinely a pure definition-recognition question (e.g., "X refers to:", "X is best
described as:"). Don't relabel a question that requires applying a concept to a scenario
or doing a calculation — that's still a `"standard"` question, even if it also happens to
test knowledge of a term.

## Writing formula/quantitative practice questions

Set `"questionType": "formula"` on a question whose point is a calculation or
numeric word problem built around a formula the course has taught (opportunity cost,
PPC slope, supply/demand equilibrium, GDP by any method, CPI/inflation/deflating/
indexing, real interest rates, saving/wealth identities, loanable funds, the
open-economy identities, labor productivity, compound growth/Rule of 72, value of
marginal product, user cost of capital, etc.). Formula questions power the home
screen's **Formula Practice** study mode, which pulls every question with
`questionType: "formula"` regardless of topic, and they also count normally toward
every other mode (Full Bank, Shuffle Mixed Practice, New/Unseen, Review Missed, Needs
Review, and topic-specific practice/missed-review) — Formula Practice is a filtered
view, not a separate bucket that excludes formula questions elsewhere.

A formula question still gets a real `topic` — the substantive economics topic the
formula belongs to (e.g., a CPI calculation goes under `gdp-cpi-inflation`, not a
generic "formulas" topic). Don't create a catch-all formula topic; Formula Practice
mode already provides the cross-topic view.

Rules specific to formula questions:

- **Always use fresh numbers and a fresh short scenario.** Never reuse a source's own
  worked-example figures (a slide's data table, a discussion-solution's numbers), even
  when citing that source as where the formula was taught — this is the same
  no-verbatim-answer-key rule that applies to every calculation question in this
  guide, just doubly important here since formula questions are calculations by
  definition.
- **`correctExplanation` must show the work**: name the formula, show the
  substitution with the question's actual numbers, give the resulting number, and
  give a one-line interpretation. A student should be able to learn the calculation
  method from the explanation alone, not just see the final answer confirmed.
- **Good formula distractors are wrong in a specific, teachable way** — not just a
  different number. Aim for distractors that come from a plausible calculation
  mistake:
  - using nominal instead of real (or vice versa)
  - forgetting to net out transfer payments when computing net taxes
  - confusing capital inflows with exports, or capital outflows with imports
  - using a total/average value where a marginal value is required (or the reverse)
  - confusing private saving with national saving, or public saving with private
  - reversing which alternative is "given up" in an opportunity-cost calculation
  - inverting a ratio (e.g., computing X/Y when the question asks for Y/X)
  - adding two figures that should be subtracted, or the reverse
  - stopping a multi-step calculation one step early

  Each `wrongExplanations` entry should name which specific mistake that choice
  represents, the same way non-formula distractor explanations name a misconception
  (see "Writing good distractors" below) — never just "this is the wrong number."
- **Four choices, one clearly correct answer**, same as every other question type.
  For `easy` formula questions this is usually direct substitution into a single
  formula; `medium` adds one extra step or a short interpretation; `hard` requires a
  multi-step identity, a comparison, or a trap involving the correct accounting
  category (e.g., private vs. national saving, or capital inflows vs. capital
  outflows).
- `sourceIds`/`sourceLabel` still point to wherever the formula itself is taught —
  formula questions can draw on any source where that formula appears, including
  older sources from earlier in the course, since the formula itself (not the
  specific numbers) is what's being cited.

## Writing graph questions

Set `"questionType": "graph"` on a question that requires interpreting, translating,
or reasoning from a graph — moving between a graph and the economic story it
represents, an economic event and the correct curve shift, a graph shift and the
resulting equilibrium outcome, or a formula/identity and its graph implication.
Graph questions power the home screen's **Graph Practice** study mode, which pulls
every question with `questionType: "graph"` regardless of topic, and they also count
normally toward every other mode (Full Bank, Shuffle Mixed Practice, New/Unseen,
Review Missed, Needs Review, and topic-specific practice/missed-review) — Graph
Practice is a filtered view, not a separate bucket.

A graph question still gets a real `topic` — the substantive economics topic the
graph belongs to (e.g., a loanable-funds shift question goes under `loanable-funds`,
not a generic "graphs" topic). Don't create a catch-all graph topic.

### The five graph question skills

Design each graph question to test one of these:

1. **Interpret graph → outcome.** Given a described or shown graph situation
   (e.g., "saving shifts left in the loanable-funds diagram"), ask what happens to
   equilibrium price/quantity/rate.
2. **Event → graph shift.** Given a real-world event (a cost shock, a policy
   change, a preference shift), ask which curve shifts and in which direction.
3. **Graph shift → economic story.** Given an abstract shift (e.g., "money demand
   shifts right with a fixed money supply"), ask which real-world story is most
   consistent with it.
4. **Compare two graphs.** Ask the student to compare two linked markets or two
   versions of the same market (e.g., an open vs. closed economy, a pre-2007 vs.
   post-2008 interest-rate regime, an import-competing vs. an exporting industry).
5. **Identify an error in interpretation.** Present a student's (wrong) reasoning
   about a graph and ask what's wrong with it — this is an especially good format
   for testing the movement-along-a-curve-vs-shift-of-a-curve distinction.

**Difficulty note for skill 4 and skill 5:** a "compare two graphs" question
(comparing two linked markets, or two versions/regimes of the same market) and an
"identify an error in interpretation" question should both default to `"hard"`,
not `"medium"` — even when the underlying single concept being tested (e.g.,
movement vs. shift) is one a `"medium"` question might use directly. Presenting a
plausible-but-wrong diagnosis for the student to debug, or asking for a comparison
across two markets/regimes, adds a layer of reasoning beyond a direct event → shift
→ equilibrium question, which is what the `"hard"` tier is meant to capture (see
the 2026-07-11 graph-question quality audit, which reclassified three
error-identification questions from `medium` to `hard` for this reason).

### Inline diagrams vs. text-described graphs

Both are valid and already used in the bank. Use an inline `diagram` when a visual
genuinely helps (reading an equilibrium point, seeing a shift's before/after
position) — but a graph question does **not require** a diagram to be valid. A
carefully-written stem that fully describes the axes, curves, and shift in words is
just as testable and just as much a `"graph"`-type question. Don't feel obligated to
hand-draw a diagram for every graph question; reserve the authoring effort for the
questions where a picture meaningfully clarifies something words alone would leave
ambiguous.

When you do add a diagram, use this schema:

```json
"diagram": {
  "type": "svg",
  "alt": "A loanable funds diagram showing the saving curve S shifting left to S', while the investment demand curve I stays fixed. Equilibrium moves from E to E', with the real interest rate rising and investment falling.",
  "svg": "<svg viewBox=\"0 0 260 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"presentation\" focusable=\"false\">...</svg>"
}
```

- **`type`** — currently only `"svg"` is supported.
- **`alt`** — required, non-empty. Write it as a complete, standalone description of
  the diagram (axes, curves, what shifts, where the new equilibrium lands) — it's
  used as both the accessible label (`aria-label`) for screen readers and a visible
  caption under the diagram for every student, so it should teach, not just
  describe ("a graph with two lines" is not acceptable; describe what the lines
  represent and what they show).
- **`svg`** — required for `type: "svg"`, a raw SVG markup string.
- Diagrams render **above** the question stem.
- Every diagram must be **original, hand-authored SVG markup** you (or a future
  contributor) write for this app — never a screenshot or a traced copy of a
  specific slide's exact layout. The standard textbook shapes (a supply/demand
  crossing, a bowed-out PPC, a vertical money-supply line) are not copyrightable in
  themselves; recreate them as simple original diagrams rather than reproducing a
  slide's specific image.
- Keep SVGs simple: straight `<line>` elements for linear curves (matching how the
  course's own slides draw supply/demand-style relationships as straight lines), a
  `<path>` with a quadratic Bezier for a bowed PPC, `<text>` labels for axes and
  curves, and `<circle>` markers for equilibrium points. Use a consistent `viewBox`
  (`"0 0 260 190"` or `"0 0 270 190"` for slightly wider diagrams) so new diagrams
  match the existing ones' proportions.
- Use the app's CSS custom properties for colors instead of hardcoded hex values —
  e.g. `stroke="var(--text)"` for axes, `stroke="var(--accent)"` for one curve,
  `stroke="var(--good)"` for a second curve, `stroke="var(--text-muted)"` for guide
  lines — so the diagram automatically adapts to light/dark mode. Do not set a
  `width`/`height` attribute on the `<svg>` element itself; the app's CSS
  (`.diagram-svg-wrap svg`) makes it responsive (`width: 100%; height: auto`,
  capped at 340px) using the `viewBox` for the aspect ratio.
- For a shifted curve, draw the original curve as a solid line and the shifted
  curve as a dashed line (`stroke-dasharray="5 4"`), and label both (e.g., `S` and
  `S'`) so a student can tell them apart without relying on color alone.

### Common graph distractor types

Good graph-question distractors reflect a specific, common graph-reading mistake —
not just a different (wrong) outcome:

- Shifting the wrong curve (e.g., shifting supply when the event is a demand
  shifter, or vice versa).
- Confusing a movement along a curve with a shift of the curve — this happens when
  a student mistakes a change in the axis variable itself (e.g., the interest rate
  on the loanable-funds diagram) for a change in some other, off-axis determinant.
- Reversing the direction of a shift (rightward instead of leftward, or vice
  versa).
- Mixing up supply and demand (or, in specialized markets, mixing up the two
  analogous curves — e.g., money supply vs. money demand, capital inflows vs.
  capital outflows).
- Confusing interest rates with quantities when reading off which axis moved.
- Confusing capital inflows (foreigners buying domestic assets) with exports
  (domestic goods/services sold to foreigners) — a current-account/capital-account
  mixup.
- Confusing nominal and real interest rates.
- Getting the price/quantity direction right for one curve's shift but wrong for a
  combined two-curve shift (e.g., correctly noting quantity rises when both supply
  and demand increase, but guessing the wrong direction for price without checking
  which shift is larger).

Each `wrongExplanations` entry should name which of these specific mistakes that
choice represents (see "Writing good distractors" below for the general rule) — a
graph distractor is not just "a different price/quantity combination," it should be
recognizable as *the exact wrong turn* a student who read the graph carelessly would
take.

### Graph questions must be self-contained and source-grounded

Every graph question — whether or not it has an inline diagram — must fully
describe the graph situation in its own stem (see the self-containment rule below;
it applies here just as much as to any other question type). And like every other
question in this bank, a graph question's tested concept, curve shape, shift
direction, and equilibrium outcome must be traceable to something actually taught in
the cited source — don't invent a curve shape or a shift direction that "seems
right" without checking it against the source's own diagrams or bullet text. If a
source's chart or diagram is only available as an unreadable image (a photo-only
slide, a screenshot with no extractable axis/curve data), either skip that content
or mark the resulting question `needsReview: true` and document why in
`docs/source-notes.md`, per the rule below.

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

This rule also applies to a **lecture slide's own worked numeric example** (e.g., a
data table used to teach a formula), not just discussion-section/problem-set answer
keys. The 2026-07-06 audit found two questions that had reused a slide's or solution's
exact numbers (a calling-plan example and a phone-bill slope example) — both were
rewritten with fresh scenarios. When a slide teaches a calculation using a specific
table, write the question with new numbers that produce an analogous (not identical)
answer, even though the slide isn't a graded answer key.

**The no-verbatim rule covers wording and answer-choice structure, not just
numbers.** A discussion-section or quiz question with non-numeric, qualitative
choices (e.g., "which factor determines X — pick the right pairing of concepts")
can still be copied in substance even when you change zero numbers, by reusing the
source's exact answer-choice pairings or its exact question-stem phrasing with only
cosmetic edits. The 2026-07-11 audit found several questions derived from Discussion
Session 3 and a Canvas quiz that had done exactly this — matching answer-choice sets
term-for-term, or stems that were near word-for-word copies — despite using "fresh"
framing elsewhere in the question. Before finalizing a question derived from a
non-calculation source question, compare your draft's stem and all four choices
side-by-side against the source's actual wording; if more than one or two words
differ per choice, restructure the scenario or the sentence architecture, not just
individual words, until it reads as an independently-written question testing the
same concept.

**Avoid "mad-libs" number substitution — fresh numbers alone are not enough.**
A calculation question can still be a near-copy of a source's worked problem
even when every number has been changed, if the sentence structure and clause
order are otherwise identical to the source (e.g., the source's "In a closed
economy, X and Y save $A this year... the government runs a $B budget deficit.
What is investment?" copied with only `$A`/`$B` and the noun swapped out is
still a mad-libs copy, not an original question). The 2026-07-12 midterm-
review audit found 8 of 17 questions in that batch had fallen into this
pattern despite already following the fresh-numbers rule above. When adapting
a source's worked word problem, change the cover story/framing (a different
kind of purchase, loan, or business relationship — not just renamed people or
firms), reorder which facts appear in which sentence, and vary the sentence
count and structure, not just the digits and nouns. A useful test: if you
can produce the source's original sentence by find-and-replacing only numbers
and proper nouns in your draft, restructure further.

**Every question must be self-contained — never reference "the scenario above" or
another question.** The app displays one question at a time and questions can be
reached individually via Shuffle Mixed Practice, Review Missed, topic practice, or
any other mode — a student may never see whatever question you intended as "above."
If two questions share a common setup (e.g., testing two different implications of
the same scenario), repeat the necessary scenario details in each question's own
stem rather than cross-referencing.

**Generating multiple variants from one worked practice problem (e.g., a
midterm/exam-prep expansion).** When a task calls for turning one source problem
into several questions — as in the 2026-07-12 Midterm Review expansion, which
took the source's 11 worked practice problems to roughly 68 questions — don't
just repeat the "compute the value" task with different numbers four times.
Vary the *task type* across the variant set for each worked problem:

- **compute a value** (the source's own direction),
- **infer a missing input** given an outcome (reverse-solve for one of the
  scenario's own numbers),
- **diagnose a mistaken formula or a common student error** (present a flawed
  calculation or claim and ask what's wrong with it),
- **compare two cases** (two scenarios, two policies, or two curve shapes,
  asking which produces the larger/smaller/different outcome), and
- **connect to a graph** (identify which curve shifts, in which direction, and
  what happens to equilibrium) where the underlying concept has a graphical
  representation.

Each new variant still needs its own fresh scenario, sentence structure, and
numbers per the no-verbatim and no-mad-libs rules above — varying the task type
doesn't exempt a variant from those rules. Before finalizing a batch of variants
from the same source problem, independently recompute every variant's correct
answer and every numeric distractor from that variant's own scenario numbers
(a quick `node -e` one-liner per variant, or a single standalone verification
script covering the whole batch) rather than reasoning through the arithmetic
by hand or assuming a pattern from an earlier variant still holds — small
number changes between variants can silently break a distractor that was only
plausible for the original numbers.

**The mad-libs risk applies to an existing app question's own wording, not
just the raw source's wording — and it hides in the explanations as much as
the question stem.** The 2026-07-12 midterm-expansion quality audit found 8
of the 52 new variants had copied a sibling `*-examprep-*` question's
sentence architecture almost word-for-word, even though every one of them
used fresh numbers and a fresh scenario per the rules above. This happens
easily when a new variant is authored *from* an existing app question's
concept (rather than straight from the raw source), since the existing
question's exact phrasing is right there as a template to unconsciously
follow. It is not enough to check only the question stem: in several cases
the stem was already reasonably distinct, but the `correctExplanation` and
`wrongExplanations` still reused the sibling's exact clause structure (e.g.,
"Indexing scales a nominal amount by the ratio of the new price index to
the old one:" copied verbatim into a new indexing question's explanation).
Before finalizing a variant, compare its full text — stem, choices, *and*
every explanation — against its closest sibling question, not just against
the raw source document. For a large batch, a small standalone script that
finds shared multi-word phrases (e.g., shared 6-7-word sequences) between
every new question and its siblings is far more reliable than eyeballing,
and was the method that caught these 8 cases after a first manual pass had
already missed some of them. Short, unavoidable technical phrases that
precisely name a specific identity or mechanism (e.g., "what happens to the
equilibrium real interest rate and the level of investment," which mirrors
the source document's own practice-problem phrasing) are not a violation on
their own — the target is *narrative* sentence architecture (how a scenario
is set up and explained), not the minimal vocabulary needed to state a
formula or identity precisely.

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

## Adding exam-prep / midterm-review sources

Practice exams, past exams, review sheets, answer keys, Canvas review quizzes, or
other instructor-provided study materials get added the same way as any other
source (see "Adding a new source" above), with one extra step **before** anything
else:

**Read the file in full and confirm it's appropriate to use before writing a
single question.** Only use materials that are legitimately released to students
for study purposes. Concrete signals that a file is safe to use: it's explicitly
labeled as a study guide, review sheet, or practice problem set; it includes
worked solutions or an answer key addressed to students (a live/current exam
would not ship with this); its own text frames itself as illustrative practice
rather than the actual exam; and/or its metadata or content ties it to the
course's own instructor. If a file looks like it could be an unreleased, live,
or currently-administered exam — no solutions, framed as the actual assessment
rather than practice for one, or any other reason to doubt it was meant for
students to have in advance — **stop and report the concern instead of
generating questions from it.** Document the academic-integrity check you
performed (what you looked for, what you found) in both the source's
`reliabilityNotes` field and in a per-update planning note under
`docs/update-notes/`, even when the answer is "this is clearly fine" — future
contributors adding the next source should be able to see that this check
happened and how it was reasoned through, not just trust that it did.

**Filtering exam-prep questions into a dedicated study mode.** If you want a
filtered "Midterm Review" / "Exam Style" mode (or a similar named mode for a
different exam), the simplest approach — used for the first `midterm_review`
source — is to filter directly on `sourceIds` rather than adding a new schema
field: `Scoring.midtermReviewQuestions(questions)` in `src/scoring.js` returns
every question whose `sourceIds` includes one of a small allow-list of
exam-review source IDs (currently just `"midterm_review"`). This avoids adding
schema complexity for a filter that `sourceIds` can already express
unambiguously. If a future exam-prep source should feed into the *same* review
mode, just add its source ID to that allow-list in `src/scoring.js`. Only
consider adding a dedicated field (e.g., `examTag` or `reviewSet`) if a single
review mode needs to pull together *some but not all* questions from a source
(a mix of exam-prep and non-exam-prep questions in the same file), which the
first exam-prep source didn't require.

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
empty explanations at incorrect indices, unknown `topic`/`sourceIds` references, an
invalid `questionType` (anything other than `"standard"`, `"vocab"`, `"formula"`,
`"graph"`, or omitted), and — if a `diagram` field is present — an unsupported
`diagram.type`, missing `diagram.alt` text, or a missing `diagram.svg` string.

The same checks (plus vocab-, formula-, and graph-question counts) run via
`node scripts/validate-data.mjs` from the command line — run it before every commit
that touches `data/`.
