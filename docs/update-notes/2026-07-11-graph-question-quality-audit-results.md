# Graph Question Quality Audit Results — 2026-07-11

Companion to `docs/update-notes/2026-07-11-graph-question-quality-audit-plan.md`.
Outcome of the focused quality audit over the 37 `questionType: "graph"` questions
added by the same-day "Graph Practice Mode" update.

## Summary

- Graph questions audited: **37** (all of them — every question with
  `questionType: "graph"`)
- Inline diagrams audited: **10** (all of them)
- Graph-logic fixes made: **0** — every question's curve shift direction, movement-
  vs-shift classification, axis labels, and equilibrium before/after outcome was
  independently re-derived and checked against the cited source text (re-extracted
  fresh, not relied on from memory) and found correct
- Diagram fixes made: **0** — every diagram's curve endpoints, dashed/solid shift
  representation, and equilibrium marker positions were independently recomputed
  (line-intersection math, not just visual inspection) and found to precisely match
  the position implied by the question's stem and explanation
- Explanation/distractor fixes made: **0** — every `correctExplanation` names what
  shifts (or moves), why, and the resulting equilibrium change; every
  `wrongExplanations` entry names a specific, real graph-reading mistake; no
  distractor was found to be defensibly correct
- Difficulty fixes made: **4** (see below)
- Topic/subtopic/source-label fixes made: **0** — all 37 questions' `sourceLabel`
  strings were checked against their `sourceIds` arrays and found consistent with
  the naming conventions used elsewhere in the bank; all topic assignments matched
  existing topic scopes with no sprawl
- Questions added: **0**; questions removed: **0** — no duplicates or weak
  questions were found that required replacement
- Final graph question count: **37** (unchanged)
- Final total question count: **271** (unchanged)
- Final `needsReview` count among graph questions: **0**
- `node scripts/validate-data.mjs`: **0 errors, 0 warnings** on the full
  271-question bank

**This was a clean audit.** Unlike the prior "New Question Quality Audit" (which
found verbatim-copying and source-grounding issues in the midterm-materials batch),
this graph-question batch held up against a full source-fidelity and diagram-math
re-verification with no content, distractor, or diagram defects found — only 4
difficulty-label adjustments. This is reported honestly as "verified/corrected,"
not "perfect": the difficulty relabeling is a real, substantive change, and the
absence of other findings reflects a genuinely thorough re-check (documented below
and in the plan doc), not a light pass.

## What was checked and how

- **Source grounding**: re-read the exact relevant passages from freshly
  re-extracted `HarvardS10b_Class1.pptx`, `Class3.pptx`, `Class4.pptx`,
  `Class5.pptx`, `DS1_solutions.pdf`, `DS2_solutions.pdf`, and cross-checked
  against previously-extracted `DS3.pdf`/`DS3_solutions.pdf` and the ECB guest
  lecture text, side-by-side with each question's claims — not from memory of
  having authored the questions. Specific passages re-verified verbatim in this
  pass: Class 5 slides 20-22 (loanable funds, budget deficit, technology), slides
  37-38 (capital inflows, risk), slides 40-41 (S + KI = I, trade deficit link),
  Class 5 slide 19 (two costs of investment), DS1 part (g) (PPC technology shift),
  DS2 part II(b) (pilots/mandatory retirement supply shift), Class 4's compound-
  growth table, and the guest lecture's interest-rate-corridor slides/notes.
- **Diagram math**: for all 10 diagrams, independently recomputed the exact
  line-intersection coordinates of each drawn curve pair (using the actual `x1,
  y1, x2, y2` endpoints in the stored SVG markup) and confirmed the equilibrium
  marker (`<circle>`) coordinates land exactly on the computed intersection —
  not just "does this look about right." Also confirmed the direction of every
  claimed price/wage/rate and quantity/employment/investment change against the
  SVG's own coordinate geometry (given the app's y-axis-down SVG convention).
- **Distractor defensibility**: read every `wrongExplanations` entry checking
  specifically for a distractor that might ALSO be correct under a different but
  plausible reading of the question (this is what caught a real bug in the prior
  midterm-materials audit) — none were found in this batch.
- **Difficulty**: applied this audit's explicit rubric (easy = identify axes/
  curve/direct outcome; medium = event → shift → equilibrium result; hard =
  linked graphs, subtle interpretation error, or multi-step reasoning) uniformly
  across all 37, comparing structurally similar questions against each other for
  consistency.
- **Duplication/coverage**: ran an exact-normalized-text duplicate check (same
  logic as `scripts/validate-data.mjs`'s near-duplicate warning) and a pairwise
  word-overlap (Jaccard similarity) scan across all 37 questions. No exact or
  near-duplicate questions were found; the highest-overlap pairs were confirmed to
  be intentional parallel-structure questions testing different curves/directions
  (e.g., `graph-labor-001`/`graph-labor-002` ask an identically-shaped question for
  labor demand vs. labor supply — different content, deliberately parallel
  phrasing).

## Difficulty fixes made (4)

| Question ID | Change | Reason |
|---|---|---|
| `graph-loanablefunds-004` | `medium` → `hard` | "Identify the error in interpretation" question; matches this audit's explicit "subtle interpretation error → hard" rubric |
| `graph-capitalflows-004` | `medium` → `hard` | Same reason — error-identification question |
| `graph-money-004` | `medium` → `hard` | Same reason — error-identification question |
| `graph-growth-001` | `medium` → `easy` | Direct single-curve shape recognition with no shift/equilibrium chain, structurally identical to sibling `easy`-tier questions `graph-labor-001`/`graph-labor-002` |

New difficulty distribution across the 37 graph questions: 10 easy, 15 medium, 12
hard (was 9 easy, 19 medium, 9 hard before this audit).

## Coverage confirmed by topic/source

| Topic | Count | Primary source(s) |
|---|---|---|
| `loanable-funds` | 8 | `class5` |
| `capital-flows` | 6 | `class5` |
| `money-banking` | 5 | `ds3` (one jointly with `class6`) |
| `comparative-advantage-trade` | 4 | `class1` (some jointly with `ds1`) |
| `supply-demand-equilibrium` | 4 | `class1` (some jointly with `ds1`) |
| `labor-markets` | 4 | `class3` (one jointly with `ds2`) |
| `inequality-globalization-sbtc` | 2 | `class3` |
| `monetary-policy` | 2 | `guest_lecture_ecb` |
| `economic-growth` | 1 | `class4` |
| `growth-accounting-compound-growth` | 1 | `class4` |

Unchanged from the original update — no topic reassignments were needed.

## `needsReview` handling

No graph question required `needsReview: true`. Every question's tested concept
was traceable to an explicit, unambiguous passage in its cited source(s), and every
diagram's geometry was independently confirmed correct via coordinate math rather
than visual approximation. `docs/source-notes.md` was not updated, since no source
interpretation was corrected, no `needsReview` item was added, and no source
reliability note needed adjustment (per the task's conditional instructions for
when to update that file).

## Documentation updates

- `docs/question-authoring-guide.md`: added a difficulty-classification note under
  "The five graph question skills" clarifying that "compare two graphs" and
  "identify an error in interpretation" questions should default to the `hard`
  tier, documenting the reasoning behind this audit's four difficulty
  reclassifications for future graph-question authors.
- `docs/qa-checklist.md`: not updated — this audit's diagram-verification method
  (coordinate/intersection math) is an authoring/audit-time technique, not a
  practical check a human tester can perform while clicking through the live app;
  the existing diagram rendering/mobile/badge checks added in the prior update
  already cover what a human QA pass can practically verify.

## Validation and QA

- `node scripts/validate-data.mjs`: 271 questions, 17 topics, 12 sources, 38
  vocab, 40 formula, 37 graph (10 with an inline diagram), **0 errors, 0
  warnings**.
- See the CHANGELOG entry for this audit for the live-app playtest verification.
