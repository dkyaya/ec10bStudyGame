# New Question Quality Audit Plan — 2026-07-11

Companion follow-up to the same-day `2026-07-11-new-materials-plan.md` /
`-results.md` update. That update added 95 new questions (62 source-ingestion +
33 dedicated formula questions) and a Formula Practice mode. This audit is a
focused quality pass over exactly those 95 new questions — it does not touch the
pre-existing 138-question bank, except where a `formula-*` question cites an older
source purely as formula grounding (in which case only the grounding claim, not the
old bank itself, is in scope).

## Scope: exact question ID prefixes and source filters

A question is in scope if **either**:
- its `id` starts with `class6-`, `guest_lecture_ecb-` (actual prefix used in the
  bank is `ecb-`, since that's the ID convention chosen for guest-lecture questions
  in the prior update), `ds3-`, `quiz2-`, or `formula-`; **or**
- its `sourceIds` array includes `class6`, `guest_lecture_ecb`, `ds3`, or `quiz2`.

Both conditions were checked programmatically against `data/questions.json`; they
produced an identical 95-question set (no question matched one condition but not the
other), confirming the ID-prefix convention and `sourceIds` tagging from the prior
update are consistent.

## Question count by source/prefix (before audit)

| Prefix / source | Count |
|---|---|
| `class6-` (source `class6`) | 20 |
| `ecb-` (source `guest_lecture_ecb`) | 22 |
| `ds3-` (source `ds3`) | 8 |
| `quiz2-` (source `quiz2`) | 12 |
| `formula-` (grounded in existing sources `class1`-`class5`, `ds1`, `ds2`, `ps1_solutions`) | 33 |
| **Total in scope** | **95** |

(Note: 7 additional formula-type questions — 5 `class6-*`, 2 `quiz2-*` — are already
counted within the `class6-`/`quiz2-` rows above, not double-counted separately. The
bank's 40 total `questionType: "formula"` questions = these 7 + the 33 `formula-*`
questions.)

## Source files used (local, not committed)

- `HarvardS10b_Class6_7.pptx` — for `class6-*` questions
- `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` — for `ecb-*`
  questions
- `DS3.pdf` + `DS3_solutions.pdf` (paired) — for `ds3-*` questions
- `Quiz 2_ Principles of Economics_ Macroeconomics.pdf` — for `quiz2-*` questions
- `HarvardS10b_Class1.pptx`, `HarvardS10b_Class2.pptx`, `HarvardS10b_Class3.pptx`,
  `HarvardS10b_Class4.pptx`, `HarvardS10b_Class5.pptx`, `DS1_solutions.pdf`,
  `DS2_solutions.pdf`, `Problem Set1_Solutions.pdf` — consulted **only** to confirm
  that a `formula-*` question's cited formula is actually taught in the source(s)
  listed in its `sourceIds`; the pre-existing questions generated from these files
  are not themselves being re-audited.

## Audit checks to perform (per in-scope question)

1. **Source grounding**: the tested concept is actually present in the cited
   source(s); `sourceIds`/`sourceLabel` are accurate; no reliance on chart/photo-only
   content that wasn't extractable (unless flagged `needsReview`).
2. **Correctness**: the marked correct answer is actually correct given the source
   material and standard course economics.
3. **Arithmetic** (formula questions only): independently recompute every
   calculation; confirm the correct choice matches; confirm every distractor
   reflects a specific, plausible mistake (not just a random wrong number).
4. **Explanation quality**: `correctExplanation` teaches the logic (formula →
   substitution → result → interpretation for formula questions); each
   `wrongExplanations` entry names a specific misconception, not generic filler.
5. **No verbatim copying**: no question's wording, scenario, or numbers are lifted
   directly from a quiz/solution/slide when a paraphrase was possible.
6. **Difficulty labeling**: easy = definition/direct substitution, medium =
   one-step application/calculation + interpretation, hard = multi-step reasoning or
   a subtle accounting/conceptual trap.
7. **`questionType` labeling**: standard vs. vocab vs. formula, applied consistently
   with `docs/question-authoring-guide.md`'s existing rules.
8. **Topic/subtopic/tags**: correct topic assignment (no topic sprawl), sensible
   subtopic, useful and consistently-named tags.
9. **Duplication/coverage within the 95-question batch**: near-duplicate questions,
   over-concentration on one concept, missing obvious concepts, or too many formula
   questions drilling the identical formula the identical way.

## Special handling notes carried into this audit

### DS3 (paired source)

`DS3.pdf` (prompts) and `DS3_solutions.pdf` (solutions) must be read together. Any
`ds3-*` question is checked against **both** files: the scenario/context must appear
in `DS3.pdf`, and the correct-answer reasoning must be verifiable from
`DS3_solutions.pdf`. A question relying on solution reasoning whose prompt context is
missing from `DS3.pdf` (or vice versa) is flagged for revision or `needsReview`.

### Quiz 2 (misleading Canvas PDF export)

The Canvas PDF export places each question's "Correct answer"/"Wrong answer" result
label *after* that question's own choices and immediately before the *next*
question's number — a layout that reads as if the label belongs to the following
question. This audit does **not** re-derive results from that label placement.
Per the user's direct, authoritative account (recorded in `data/sources.json`'s
`quiz2` entry and `docs/source-notes.md`): overall score was 8/10, Question 2 was
correct, and Questions 3 and 10 were incorrect. This audit re-checks that every
`quiz2-*` question is (a) a paraphrase, not a verbatim copy, of the underlying Canvas
question, and (b) that the two previously-emphasized missed concepts — debt paydown
reducing liabilities and raising wealth/net worth (Q3), and capital inflows as
purchases of domestic assets by foreigners (Q10) — are represented clearly and
correctly, since these are exactly the concepts most worth double-checking for
correctness given they were the ones the user got wrong on the real quiz.

## Fix policy

- Fix issues directly in `data/questions.json` in place, preserving existing
  question IDs wherever possible so stored progress under
  `localStorage` key `econ10bStudyGame:v1` (keyed by question ID) is not orphaned.
- If a question cannot be verified confidently after investigation, either revise it
  to something verifiable, or mark `needsReview: true` with a documented reason in
  `docs/source-notes.md`, or remove it only if it can't be fixed or usefully
  flagged — removals will be re-filled with a small number of replacements if doing
  so leaves an obvious coverage gap, keeping the final count close to 233.
- This audit will not touch the 138 pre-existing questions, `src/`, `styles/`,
  `scripts/validate-data.mjs`, or the app's schema/localStorage format.

See `docs/update-notes/2026-07-11-new-question-quality-audit-results.md` for the
outcome of this audit once complete.
