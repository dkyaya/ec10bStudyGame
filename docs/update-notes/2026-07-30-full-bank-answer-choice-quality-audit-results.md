# 2026-07-30 Full-Bank Answer-Choice Quality Audit — Results

## Outcome

- **Questions audited:** 250 of 250 active questions.
- **Automated baseline flags:** 171 questions. Flags were prioritization
  signals, not validation failures.
- **Questions manually reviewed:** 250. Every flagged question was read,
  and the full topic-by-topic pass also covered the 79 unflagged questions.
- **Questions changed:** 123.
- **Questions left unchanged after review:** 127.
- **Questions marked `needsReview`:** 0.
- **Questions removed or added:** 0. All existing IDs were preserved.
- **Difficulty changes:** 0. Better distractors made several questions more
  discriminating, but none crossed the easy/medium/hard rubric boundary.

## Automated giveaway scan

The new dependency-free `scripts/audit-answer-choices.mjs` checks all four
choices for:

- the correct choice being longest;
- a correct-choice word-count margin of at least 30% and three words over
  the average distractor;
- a distractor that is much shorter than the correct choice;
- extra clause markers or punctuation in the correct choice;
- stem/tag-derived technical vocabulary appearing only in the correct
  choice; and
- causal, numeric, arrow, or sentence structure that differs from all
  three distractors.

Baseline results:

| Flag | Baseline | After revisions |
|---|---:|---:|
| Questions with at least one flag | 171 | 127 |
| `CORRECT_LONGEST` | 156 | 90 |
| `LENGTH_MARGIN` | 144 | 32 |
| `SHORT_DISTRACTOR` | 115 | 3 |
| `CLAUSE_PUNCTUATION` | 91 | 39 |
| `STRUCTURAL_MISMATCH` | 62 | 34 |
| `TECHNICAL_VOCAB_ONLY` | 2 | 1 |

The large-margin signal fell by 78%, and the very-short-distractor signal
fell by 97%. The remaining flags were manually retained where the set was
already fair. Representative false positives include:

- `xrate-vocab-001`: the correct choice is only one word longer than a
  distractor, while all four choices are developed, parallel explanations.
- `xrate-standard-006`: punctuation is elevated because the correct choice
  gives examples of nontraded goods, but the distractors are comparable in
  length and specificity.
- `openecon-standard-011`: the equation-based correct choice has a different
  mechanical signature, while every option is a 22–24-word explanation of
  the same interest-parity claim.
- `monpolicy-formula-006`: the corrected answer is shorter than two
  distractors; its residual punctuation flag comes from showing the
  required calculation, not from being the uniquely polished option.
- `unemployment-standard-005`: a structural flag remains even though the
  correct choice is shorter than the average distractor and the wrong
  answers state nearby duration/counting confusions.

For this reason the residual flag count was not forced to zero. Doing so
would reward padding and damage otherwise sound answer sets.

## Manual review and fixes

The manual pass covered choice length, grammatical parallelism, distractor
plausibility, specificity, exactly-one-answer ambiguity, explanations,
difficulty, formula arithmetic, graph logic, and reading proximity.

The 123 revised questions break down as follows:

| Dimension | Changed questions |
|---|---:|
| `standard` | 61 |
| `vocab` | 34 |
| `graph` | 19 |
| `formula` | 9 |
| easy | 22 |
| medium | 55 |
| hard | 46 |

Main fix categories:

- **Length balancing:** trimmed correct choices that embedded the full
  explanation and developed short distractors to comparable weight.
- **Distractor plausibility:** replaced cartoonish or irrelevant claims
  with nearby course confusions, such as swapped definitions, wrong rate
  directions, incorrect policy channels, and mistaken short-run/long-run
  mechanisms.
- **Parallel structure:** made definition sets, causal chains, calculations,
  and graph outcomes use comparable grammatical forms.
- **Ambiguity prevention:** preserved the source-grounded correct claim
  while adding enough context to distractors to make the specific error—and
  the reason it is wrong—clear. No question was left with two defensible
  answers.
- **Formula distractor derivation:** rechecked all 9 changed formula
  questions. Their correct results and wrong-method numbers were recomputed
  from the displayed inputs; all assertions passed. No formula convention
  or numeric answer had to change.
- **Graph distractor logic:** rebalanced 19 graph questions around plausible
  curve-shift, movement-vs.-shift, equilibrium, axis, and sign mistakes. No
  SVG geometry changed. All 17 inline SVGs still parse as XML.
- **Reading distractor proximity:** revised the financial-crisis and fiscal
  reading choices toward nearby misreadings of securitization, leverage,
  principal-agent incentives, systemic risk, unconventional policy, and
  counterfactual evaluation.
- **Explanation fix:** corrected `infldyn-graph-001`'s explanation. A tighter,
  more aggressive monetary-policy reaction function sets a **higher**, not
  lower, real interest rate at a given relevant inflation rate, shifting AD
  left.
- **Difficulty relabel:** none.

## Changed question IDs

All IDs were preserved. Changed IDs, grouped by topic:

### Unemployment (12)

`unemployment-vocab-001`, `unemployment-vocab-003`,
`unemployment-vocab-005`, `unemployment-vocab-006`,
`unemployment-standard-001`, `unemployment-standard-002`,
`unemployment-standard-003`, `unemployment-standard-004`,
`unemployment-standard-005`, `unemployment-standard-006`,
`unemployment-formula-003`, `unemployment-graph-001`.

### Business cycles and output gaps (8)

`cycles-vocab-003`, `cycles-standard-004`, `cycles-standard-005`,
`cycles-formula-005`, `cycles-formula-006`, `cycles-graph-001`,
`cycles-standard-007`, `cycles-formula-010`.

### Keynesian cross (11)

`keynes-vocab-001`, `keynes-vocab-003`, `keynes-vocab-004`,
`keynes-standard-001`, `keynes-standard-002`, `keynes-standard-004`,
`keynes-standard-006`, `keynes-formula-005`, `keynes-formula-006`,
`keynes-graph-002`, `keynes-graph-003`.

### Fiscal policy (16)

`fiscal-vocab-002`, `fiscal-vocab-003`, `fiscal-vocab-005`,
`fiscal-standard-001`, `fiscal-standard-002`, `fiscal-standard-003`,
`fiscal-standard-004`, `fiscal-standard-005`, `fiscal-standard-006`,
`fiscal-standard-007`, `fiscal-standard-008`, `fiscal-standard-009`,
`fiscal-standard-011`, `fiscal-standard-014`, `fiscal-vocab-006`,
`fiscal-vocab-007`.

### Money market (13)

`moneymkt-vocab-002`, `moneymkt-vocab-004`,
`moneymkt-standard-001`, `moneymkt-standard-002`,
`moneymkt-standard-003`, `moneymkt-standard-004`,
`moneymkt-standard-007`, `moneymkt-standard-008`,
`moneymkt-graph-001`, `moneymkt-graph-002`, `moneymkt-graph-003`,
`moneymkt-graph-004`, `moneymkt-graph-006`.

### Monetary policy (17)

`monpolicy-vocab-001`, `monpolicy-vocab-002`, `monpolicy-vocab-004`,
`monpolicy-standard-001`, `monpolicy-standard-002`,
`monpolicy-standard-004`, `monpolicy-standard-005`,
`monpolicy-standard-006`, `monpolicy-standard-007`,
`monpolicy-standard-008`, `monpolicy-standard-010`,
`monpolicy-formula-006`, `monpolicy-formula-007`,
`monpolicy-graph-001`, `monpolicy-graph-002`, `monpolicy-graph-003`,
`monpolicy-graph-004`.

### Aggregate demand and supply (10)

`adas-standard-004`, `adas-standard-006`, `adas-vocab-001`,
`adas-vocab-002`, `adas-vocab-005`, `adas-formula-005`,
`adas-graph-002`, `adas-graph-003`, `adas-graph-004`,
`adas-graph-005`.

### Inflation dynamics (13)

`infldyn-standard-001`, `infldyn-standard-003`,
`infldyn-standard-004`, `infldyn-standard-005`,
`infldyn-standard-006`, `infldyn-standard-007`,
`infldyn-standard-008`, `infldyn-standard-009`,
`infldyn-vocab-001`, `infldyn-vocab-002`, `infldyn-vocab-004`,
`infldyn-graph-001`, `infldyn-graph-002`.

### Financial crisis and readings (21)

`fincrisis-standard-001`, `fincrisis-standard-002`,
`fincrisis-standard-004`, `fincrisis-standard-005`,
`fincrisis-standard-006`, `fincrisis-standard-007`,
`fincrisis-standard-008`, `fincrisis-standard-009`,
`fincrisis-standard-010`, `fincrisis-standard-011`,
`fincrisis-standard-012`, `fincrisis-standard-013`,
`fincrisis-vocab-001`, `fincrisis-vocab-002`,
`fincrisis-vocab-003`, `fincrisis-vocab-004`,
`fincrisis-vocab-005`, `fincrisis-vocab-006`,
`fincrisis-vocab-007`, `fincrisis-vocab-008`,
`fincrisis-vocab-009`.

### Open-economy policy (2)

`openecon-vocab-004`, `openecon-standard-001`.

The exchange-rate/PPP topic required no changes after its targeted Class 11
audit; its automated flags were manually adjudicated as balanced false
positives.

## Final bank counts

- **Questions:** 250.
- **Topics:** 11.
- **Sources:** 11.
- **Question types:** 105 standard, 58 vocab, 58 formula, 29 graph.
- **Inline SVG diagrams:** 17.
- **Difficulty:** 38 easy, 127 medium, 85 hard.
- **`needsReview`:** 0.

## Validation and QA

- `node scripts/validate-data.mjs`: **passed with 0 errors and 0 warnings**
  (`250 questions, 11 topics, 11 sources; 58 vocab, 58 formula, 29 graph,
  17 diagrams`).
- JavaScript syntax: all six application modules and both scripts pass
  `node --check`.
- Local static-server smoke test: `/`, `data/questions.json`, `src/app.js`,
  and `styles/main.css` all returned HTTP 200 with the expected content
  types.
- Mode/filter logic: clean progress reports 250 unseen, 58 vocab, 58
  formula, 29 graph, and 0 needs-review; a simulated miss activates Review
  Missed; an all-seen state falls back to Shuffle Mixed Practice.
- Shuffling: 10,000 shuffled instances across all 250 questions preserved
  the correct-answer index and every wrong-choice explanation mapping;
  7,504 instances moved the correct choice to a different index.
- Storage: the `econ10bStudyGame:v1` key, attempt recording, and reset
  behavior passed with a mocked browser `localStorage`.
- Diagrams: `xmllint` parsed all 17 inline SVGs successfully.
- Midterm Review: no active reference appears in `index.html`, `src/`,
  `styles/`, or `data/`.
- Static compatibility: no backend, dependency, framework, bundler, or
  build step was added; all application paths remain relative.
- Live interactive browser playtest: **not available in this session**
  because the browser-control runtime reported zero browser instances.
  Per the browser skill, no unrelated automation backend was substituted.
  The HTTP, syntax, state/filter, shuffle/grading-map, storage, and SVG
  checks above are the completed fallback QA; visual clicking and console
  inspection remain the only unexecuted checks.

No source interpretation, formula convention, or needs-review status
changed, so `docs/source-notes.md` did not require an update.
