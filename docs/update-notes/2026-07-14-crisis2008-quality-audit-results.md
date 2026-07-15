# 2008 Financial Crisis Quality Audit Results — 2026-07-14

Companion results doc to
`docs/update-notes/2026-07-14-crisis2008-quality-audit-plan.md`. This audit
covered exactly the 37 questions in `data/questions.json` whose `id` begins
with `crisis2008-` — no other question in the 377-question bank was
touched.

## Counts audited

- **37 / 37 `crisis2008-*` questions audited** for concept coverage,
  `sourceIds`/`sourceLabel`/topic accuracy, self-containment, correctness,
  distractor defensibility, explanation fidelity, chart-only-detail
  reliance, and non-verbatim wording.
- **37 / 37 questions** individually traced through the mechanism/causal-
  chain checklist (correlation-vs.-mechanism, risk-transfer-vs.-risk-
  disappearance, diversification-vs.-elimination-of-systemic-risk,
  insurance-vs.-riskless-payoff, liquidity-vs.-solvency, leverage-vs.-
  profitability, moral-hazard-vs.-adverse-selection, moral-hazard-vs.-
  principal-agent, too-big-to-fail-expectations-vs.-actual-immunity, Fed-
  LOLR-vs.-fiscal-bailout, and balance-sheet-repair-vs.-immediate-AD-
  recovery).
- **13 / 13 `hard`-labeled questions** individually reviewed to confirm
  difficulty comes from genuine multi-step reasoning, not unclear wording.
- **37 / 37 questions** checked against the difficulty/`questionType`/
  topic/subtopic/tags rubric.
- **Coverage/duplication check** across the 37-question batch against the
  deck's full concept range (16 subtopics).

## `questionType` breakdown (audited, unchanged)

| Type | Count |
|---|---|
| `standard` | 34 |
| `vocab` | 3 |
| `formula` | 0 |
| `graph` | 0 |

No `questionType` reclassification was needed. `crisis2008-leverage-003`
(a capital-ratio arithmetic scenario) was specifically reviewed against a
`formula` reclassification, since it involves a percentage calculation —
kept as `standard`, consistent with the existing rule in
`docs/question-authoring-guide.md` that a numeric comparison point in a
conceptual question is not the same as this app's `formula` question type,
which is reserved for the dedicated Formula Practice topics (GDP, CPI,
compound growth, present value, etc.). No `graph` reclassification was
warranted either, since the deck teaches no supply/demand-style curve-shift
reasoning (confirmed in the original source notes and re-confirmed here).

## Difficulty breakdown: before → after

| Difficulty | Before | After |
|---|---|---|
| easy | 5 | 3 |
| medium | 19 | 21 |
| hard | 13 | 13 |

Two questions were reclassified from `easy` to `medium`:

- `crisis2008-tarp-001` — requires distinguishing the purpose of two
  adjacent policy tools (emergency lending vs. TARP), not simple recall of
  a single term; this fits the `medium` rubric ("distinguishing two nearby
  concepts") better than `easy`.
- `crisis2008-transmission-001` — requires understanding why the Great
  Depression analogy is invoked (a small synthesis, not bare recognition),
  also a better fit for `medium`.

The remaining 3 `easy` questions (`crisis2008-origins-002`,
`crisis2008-securitization-001`, `crisis2008-leverage-001`) are all true
`vocab`-type single-term definition questions and were confirmed to fit
`easy` correctly. All 13 `hard` questions were confirmed to be hard because
of a genuine multi-step causal chain, ranking task, or subtle two-concept
contrast (e.g., `crisis2008-tranching-002`'s bottom-up loss-waterfall
ranking, `crisis2008-synthesis-001`'s comparative capital-ratio scenario,
`crisis2008-moralhazard-002`'s distinction between bailout-expectation and
executive-short-termism) — none were found to be hard merely because of
unclear wording.

## Source-fidelity fixes

No concept-coverage, correctness, distractor-defensibility, or topic/
`sourceIds`/`sourceLabel` errors were found — every one of the 37 questions
was already grounded in a specific, verifiable bullet in `Economic Crisis.pdf`,
and no distractor was found to be independently defensible under the
deck's own framing.

**The one substantive finding of this audit: 13 of 37 questions had a
correct answer choice that paraphrased the source too closely** — reusing
the deck's own distinctive multi-word phrases and sentence skeleton with
only light synonym substitution, rather than being independently worded.
This is distinct from (and a more subtle failure mode than) verbatim number
or full-sentence copying: the underlying claim was always correct, but the
wording crossed the line from "grounded paraphrase" into "restated with
find-and-replace." All 10 were rewritten to preserve the exact tested
meaning while meaningfully changing sentence structure and vocabulary:

1. `crisis2008-origins-002` — "big loans to people with bad credit
   history with low down payments" reused almost verbatim; rewritten to
   "someone borrowing heavily despite a weak credit record and little
   money down."
2. `crisis2008-securitization-001` — "slice the pool into marketable
   securities which are then sold to investors" reused almost verbatim;
   rewritten to "dividing claims on that pool into tradable securities
   that investors can purchase."
3. `crisis2008-securitization-002` — "gauge the quality of the underlying
   assets" reused with a single word swapped; rewritten to "assess how
   sound the loans backing the security actually are."
4. `crisis2008-origination-001` — reworded for additional distance from
   "bears no risk... no incentive to check credit history."
5. `crisis2008-ratingagencies-001` — reworded the two-reasons list to move
   away from the deck's own "harder to assess MBS... paid by the very
   issuers they are rating" phrasing.
6. `crisis2008-fanniefreddie-002` — "their default would have increased
   risk associated with lots of MBS held by others" reworded to "a default
   ... would have sharply raised the risk facing every other institution
   holding MBS connected to them."
7. `crisis2008-toobigtofail-001` — the phrase "set off a much larger chain
   of failures" was copied verbatim from the deck; rewritten to "letting
   one collapse cascade into losses well beyond that single firm."
8. `crisis2008-cds-002` — reworded to move away from the deck's "betting
   that the debt will not default, and earning a return" phrasing.
9. `crisis2008-regulation-001` — the phrase "not subject to any comparable
   regulation" was copied verbatim from the deck; rewritten to "operated
   largely outside that kind of oversight."
10. `crisis2008-debtoverhang-001` / `crisis2008-debtoverhang-002` (fixed
    together, since 002 echoed 001's own choice text) — "some of the funds
    raised... will go to benefit the bondholders, since they're the one
    with the first claim" reworded to "a chunk of any money new
    shareholders put in would ultimately flow to the bondholders instead,
    because debt holders get paid out of the firm's assets ahead of
    shareholders."
11. `crisis2008-transmission-002` / `crisis2008-transmission-003` (fixed
    together, since 003 echoed 002's own choice text) — "breakdown ... of
    the flow of funds from savers to borrowers ... which depends on
    credit" reworded to "a broken financial system failing to move funds
    from savers to borrowers, hitting sectors that rely on credit to
    operate."

(Listed as 11 fix "sites" above; two of them each touched a linked pair of
questions that shared wording, for 13 individual choice edits in total
across `data/questions.json`.)

No fixes were needed for the other 24 questions — all were already
correctly worded, correctly answered, and independently phrased from the
source.

## Mechanism/causal-chain fixes

No mechanism errors were found. Every high-risk area from the plan
(tranche seniority, securitization incentives, moral-hazard-vs.-principal-
agent, leverage arithmetic, too-big-to-fail/counterparty risk, CDS
mechanics, regulatory gaps, Fed LOLR-vs.-unconventional actions, debt
overhang, and balance-sheet-vs.-credit-channel transmission) was confirmed
to already correctly separate the concepts the task flagged as commonly
confused, with one exception addressed via a tag fix (below) rather than a
content error.

## Distractor / explanation fixes

None needed. Every distractor was confirmed to be clearly wrong under the
deck's own framing (no distractor was independently defensible), and every
`wrongExplanations` entry was confirmed to name a specific conceptual
mistake rather than an arbitrary wrong answer.

## Difficulty / `questionType` / topic / tag fixes

- Difficulty: 2 questions reclassified `easy` → `medium` (see above).
- `questionType`: no changes (see `questionType` breakdown above).
- Topic: no changes — all 37 already correctly use
  `financial-crisis-2008`.
- Tags: removed the `"moral hazard"` tag from
  `crisis2008-origination-001`. This question and its explanations only
  ever use the deck's own "principal-agent problem" framing for the
  originate-to-distribute mechanism; the deck reserves "moral hazard"
  specifically for the later FI risk-taking-incentive discussion (bailout
  expectations, executive short-termism). Keeping both tags on this
  question risked implying the two terms are interchangeable, which is
  exactly the mechanism confusion the audit brief asked to guard against.
  The question's own content never conflated the terms — this was a tag-
  only fix.

## Duplicate / coverage fixes

No exact or near-duplicate questions were found. Leverage/capital-ratio
arithmetic is tested by 4 questions across the 37
(`crisis2008-leverage-001/002/003`, `crisis2008-synthesis-001`) — reviewed
specifically for redundancy given it's the most numerically rich sub-topic
in an otherwise non-quantitative deck, but each tests a genuinely distinct
skill (definition, why-the-gap-matters mechanism, a direct calculation
from new numbers, and a comparative ranking across two institution types),
so no consolidation was made. No major source concept was found to be
over- or under-represented relative to the deck's own emphasis; the
16-subtopic, 2-3-questions-per-subtopic structure from the original
authoring pass held up under review.

## Questions added / removed

None. The batch remains exactly 37 questions; all fixes were in-place edits
to existing question content (a `choices` entry, a `difficulty` value, or a
`tags` entry), preserving every original question ID, `topic`,
`questionType`, `sourceIds`, and `sourceLabel`.

## Final counts

- Total questions: **377** (unchanged)
- `crisis2008-*` questions: **37** (unchanged)
- Vocabulary/definition questions: **45** (unchanged)
- Formula/quantitative questions: **78** (unchanged)
- Graph interpretation questions: **46**, 11 with an inline diagram
  (unchanged)
- Topics: **18** (unchanged)
- Sources: **14** (unchanged)
- `needsReview: true` count (crisis2008 batch): **0** — every
  `crisis2008-*` question was verified/corrected with no unresolved
  `needsReview` remaining.

## Validation result

```
$ node scripts/validate-data.mjs
Checked 377 questions, 18 topics, 14 sources.
Vocabulary/definition questions: 45.
Formula/quantitative practice questions: 78.
Graph interpretation questions: 46 (11 with an inline diagram).
All checks passed with no errors or warnings.
```

See `docs/update-notes/2026-07-14-crisis2008-quality-audit-plan.md` for the
audit's scope, method, and advance risk flags, and `docs/source-notes.md`'s
"2026-07-14 2008 Financial Crisis Quality Audit" section for the full
narrative writeup.
