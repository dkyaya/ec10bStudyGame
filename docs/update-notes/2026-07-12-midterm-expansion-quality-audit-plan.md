# Midterm Expansion Quality Audit — Plan — 2026-07-12

Focused quality audit of **only** the 52 `midterm-var-*` questions added in
the 2026-07-12 "Midterm Review Expansion" update (commit `82cbd52`). No
other question in the 340-question bank is in scope, including the 17
`*-examprep-*` midterm_review questions, which are read-only reference
material for this audit's duplicate/mad-libs comparisons.

## Question IDs audited (52)

```
midterm-var-saving-001 .. midterm-var-saving-009   (9)
midterm-var-cpi-001 .. midterm-var-cpi-008          (8)
midterm-var-gdp-001 .. midterm-var-gdp-008          (8)
midterm-var-growth-001 .. midterm-var-growth-008    (8)
midterm-var-loanable-001 .. midterm-var-loanable-009 (9)
midterm-var-financialmarkets-001 .. -004            (4)
midterm-var-capitalflows-001 .. -006                (6)
```

Confirmed via `data/questions.json`: exactly 52 IDs starting with
`midterm-var-`, matching the expected pre-audit count.

## Pre-audit breakdown by questionType

- **formula: 27**
- **standard: 15**
- **graph: 7**
- **vocab: 3**

## Source material

`private-materials/MidtermStudyMaterials_Summer2026.doc`, matching the
`midterm_review` source entry in `data/sources.json` (title: "Instructor
Study Outline and Practice Problems for the Ec S10b Midterm"). Re-converted
to plain text via `textutil` and re-read in full (11 worked practice
problems) as the source of truth for this audit, independent of the prior
update's authoring notes.

## Audit checks performed

For every one of the 52 questions:

1. **Source-fidelity**: does the tested concept trace to one of the source's
   11 worked practice problems? Are `sourceIds`/`sourceLabel` accurate? Is
   the question self-contained (no "see above" / dangling references to
   another question)?
2. **Non-verbatim / non-mad-libs check**: compared each question's stem,
   clause order, and answer-choice wording side-by-side against (a) the
   raw source document's own worked-problem wording and (b) its closest
   `*-examprep-*` sibling question (the existing question testing the same
   underlying practice problem). Flagged any case where the sentence
   architecture is a template match with only numbers/entities swapped,
   even when the numbers themselves are fresh — this is the specific
   failure mode documented in `docs/question-authoring-guide.md`'s
   "Avoid 'mad-libs' number substitution" rule, and it applies to copying
   an *existing app question's* structure just as much as the source
   document's.
3. **Formula arithmetic** (27 questions): every correct answer and every
   numeric distractor recomputed independently via a standalone Node
   script, reading only the final question text (not authoring notes).
4. **Graph reasoning** (7 questions): shift direction, curve identity, and
   equilibrium implications re-derived from first principles (including a
   linear-supply-and-demand check of the one genuinely novel comparative-
   statics claim in the batch — see below).
5. **Standard/vocab correctness** (15 + 3 questions): answer grounded in
   course material, distractors plausible but clearly wrong, explanation
   teaches the concept rather than just restating a memorized fact.
6. **Difficulty/topic/subtopic/tags**: checked against the rubric (easy =
   definition/direct substitution; medium = one-step application +
   interpretation; hard = multi-step reasoning, reverse calculation, subtle
   distinction, graph translation, or combined concepts) and against
   `data/topics.json`'s topic descriptions.
7. **Duplicate/near-duplicate detection**: within the 52-question batch,
   and against all 17 `*-examprep-*` siblings.

## High-risk areas flagged in advance

- **Formula arithmetic**, especially reverse-calculation variants (solving
  for an implied rate, index, or missing input) and multi-step compound-
  growth comparisons — these have the most room for a silent transcription
  error between a verified calculation and the final choice text.
- **Text-described graph variants** (5 of the 7 graph questions have no
  inline SVG) — shift direction and curve identity have to be exactly right
  since there's no diagram to visually cross-check against.
- **Mad-libs sentence architecture**, specifically variants that reuse a
  `*-examprep-*` sibling's own template (not just the raw source's
  wording) — this risk is elevated precisely because the new batch was
  authored *from* those sibling questions' concepts, making unconscious
  template reuse more likely than when authoring straight from the source.
- **Self-containment**, specifically any question that implicitly continues
  another question in the same batch (a legitimate technique used
  elsewhere in this bank, e.g. `formula-examprep-nationalsaving-002`) but
  that fails to fully restate its own numbers, or that uses a literal
  cross-reference like "above" or "continuing" without restating context.
- **Distractors that may also be defensible**: checked especially for
  loanable-funds comparative-statics claims (vertical vs. sloped
  saving-supply curves) where a claim could be true only under additional
  unstated assumptions.
- **questionType/difficulty labeling** for the "diagnose a mistake"
  question family, which spans a wide range of embedded arithmetic
  complexity (from a single subtraction to a multi-step compound-growth
  calculation) while uniformly using `questionType: "standard"` — checked
  whether this uniform classification is a defensible, consistent design
  choice or an inconsistency requiring per-question reclassification.

## Method

Read all 52 questions' full JSON in two passes (offset-paginated), read all
17 `*-examprep-*` sibling questions in full, and read the complete raw
source text. Cross-referenced clause-by-clause rather than skimming for
topical similarity, since topical similarity between a `midterm-var-*`
variant and its sibling is expected and desired (they intentionally test
the same underlying skill) — the specific thing being checked for is
*sentence-level* template reuse, which is a distinct and stricter bar.

Findings and fixes are documented in
`docs/update-notes/2026-07-12-midterm-expansion-quality-audit-results.md`.
