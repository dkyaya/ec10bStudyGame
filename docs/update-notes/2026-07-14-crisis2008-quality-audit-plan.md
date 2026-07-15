# 2008 Financial Crisis Quality Audit Plan — 2026-07-14

Companion follow-up to the same-day `2026-07-14-new-fair-game-slides-plan.md` /
`-results.md` update, which added the `financial_crisis_2008` source, the
`financial-crisis-2008` topic, and 37 `crisis2008-*` questions derived from
`Economic Crisis.pdf`. This audit is a focused quality pass over exactly
those 37 questions — it does not touch any other question in the
377-question bank, except for a tiny shared rendering/validation fix if one
turns out to be strictly necessary (none was needed; see the results doc).

## Exact question IDs being audited (37)

`crisis2008-origins-001`, `crisis2008-origins-002`,
`crisis2008-origination-001`, `crisis2008-origination-002`,
`crisis2008-securitization-001`, `crisis2008-securitization-002`,
`crisis2008-tranching-001`, `crisis2008-tranching-002`,
`crisis2008-tranching-003`, `crisis2008-ratingagencies-001`,
`crisis2008-ratingagencies-002`, `crisis2008-fanniefreddie-001`,
`crisis2008-fanniefreddie-002`, `crisis2008-leverage-001`,
`crisis2008-leverage-002`, `crisis2008-leverage-003`,
`crisis2008-moralhazard-001`, `crisis2008-moralhazard-002`,
`crisis2008-toobigtofail-001`, `crisis2008-toobigtofail-002`,
`crisis2008-cds-001`, `crisis2008-cds-002`, `crisis2008-regulation-001`,
`crisis2008-regulation-002`, `crisis2008-regulation-003`,
`crisis2008-fedresponse-001`, `crisis2008-fedresponse-002`,
`crisis2008-fedresponse-003`, `crisis2008-debtoverhang-001`,
`crisis2008-debtoverhang-002`, `crisis2008-tarp-001`, `crisis2008-tarp-002`,
`crisis2008-transmission-001`, `crisis2008-transmission-002`,
`crisis2008-transmission-003`, `crisis2008-synthesis-001`,
`crisis2008-synthesis-002`.

This is exactly the set of questions in `data/questions.json` whose `id`
begins with `crisis2008-` — confirmed programmatically before writing this
plan (37 found, matching the expected count).

## Source file used

`private-materials/Economic Crisis.pdf` — the file referenced by the
`financial_crisis_2008` entry in `data/sources.json`. Re-extracted fresh via
`pdftotext -layout` for this audit (not reused from any cached extraction),
covering all 24 pages.

## Count before audit

37 `crisis2008-*` questions, all with `topic: "financial-crisis-2008"`,
`sourceIds: ["financial_crisis_2008"]`, and `needsReview: false`.

### Breakdown by `questionType` (before audit)

| Type | Count |
|---|---|
| `standard` | 34 |
| `vocab` | 3 |
| `formula` | 0 |
| `graph` | 0 |

### Difficulty breakdown (before audit)

| Difficulty | Count |
|---|---|
| easy | 5 |
| medium | 19 |
| hard | 13 |

## Specific audit checks to perform

Per question:

1. **Concept coverage** — is the tested concept actually present in
   `Economic Crisis.pdf`'s bullet text?
2. **`sourceIds` / `sourceLabel` accuracy** — both should point to
   `financial_crisis_2008` / "2008 Financial Crisis: Background (Lecture
   Slides)."
3. **Topic accuracy** — `topic` should be `financial-crisis-2008` unless a
   question is better classified elsewhere (none were found to need this).
4. **Self-containment** — can the question be answered from its own stem
   alone, with no outside context assumed?
5. **Correctness** — is the marked correct answer actually correct
   according to the deck?
6. **Distractor defensibility** — is any wrong choice actually also
   defensible under a different but plausible reading of the deck?
7. **Explanation fidelity** — does `correctExplanation` accurately teach the
   mechanism, and does each `wrongExplanations` entry name a specific
   conceptual mistake rather than an arbitrary wrong answer?
8. **No reliance on unreadable chart-only detail** — per the source's own
   reliability notes, two slides (the basic-MBS payment diagram and the
   CDO/CMO tranche-waterfall diagram) extracted with garbled axis labels;
   any question touching tranching/seniority must be grounded in the
   deck's surrounding bullet text, not in those charts.
9. **No slide wording or answer-choice structure copied too closely** — the
   correct answer choice (not just the citation-style `correctExplanation`)
   must be a genuine paraphrase, not a synonym-swapped restatement of the
   deck's own sentence.

## Mechanism audit

For each mechanism-heavy question, trace the full causal chain (first
cause → intermediate mechanism → final outcome) and check for these
specific confusions called out in the task brief:

- correlation vs. mechanism
- risk transfer vs. risk disappearance (securitization/diversification)
- diversification vs. elimination of systemic risk
- insurance vs. riskless payoff (CDS/AIG)
- liquidity vs. solvency (Fed LOLR vs. lending against toxic collateral)
- leverage vs. profitability alone (capital ratio questions)
- moral hazard vs. adverse selection
- moral hazard vs. principal-agent problems (originate-to-distribute vs.
  bailout-expectation/executive-short-termism)
- too-big-to-fail expectations vs. actual immunity from losses
- Fed LOLR actions vs. fiscal bailouts (emergency lending vs. TARP)
- balance-sheet repair vs. immediate aggregate demand recovery

## High-risk areas flagged in advance

- **Senior vs. junior tranche logic** (`crisis2008-tranching-001/002/003`,
  `crisis2008-synthesis-001`) — the seniority waterfall (D absorbs losses
  first, A last) must be applied consistently and only from text the deck
  actually states, not the two garbled tranche/payment charts.
- **Securitization incentives** (`crisis2008-securitization-001/002`,
  `crisis2008-synthesis-002`) — diversification is a real benefit but must
  not be conflated with eliminating the separate opacity/quality problem.
- **Moral hazard vs. principal-agent problems** — the deck uses
  "principal-agent problem" specifically for the originate-to-distribute/
  CRA-conflict mechanisms, and reserves the "moral hazard" framing for the
  FI risk-taking-incentive discussion (bailout expectations, executive
  short-termism). Tags and explanations must not blur these two
  deck-specific usages together.
- **Leverage mechanics** (`crisis2008-leverage-001/002/003`,
  `crisis2008-synthesis-001`) — four questions touch capital-ratio
  arithmetic; checked for redundancy as well as correctness, since this is
  the most numerically rich sub-topic in an otherwise non-quantitative deck.
- **Too-big-to-fail reasoning** (`crisis2008-toobigtofail-001/002`,
  `crisis2008-fanniefreddie-002`, `crisis2008-cds-001`) — must center on
  counterparty interconnectedness, per the deck's own framing, not raw
  institution size alone.
- **Credit default swaps** (`crisis2008-cds-001/002`) — must not imply a
  CDS payout is riskless or guaranteed; the deck's own AIG discussion
  (covered separately) is where counterparty risk on CDS obligations
  belongs, not the basic CDS-mechanism question.
- **Regulatory gaps** (`crisis2008-regulation-001/002/003`) — three
  distinct sub-claims (commercial vs. investment bank regulation, delayed
  Regulation Z response, F&F's lobbied-against regulator) must stay
  distinct, not merged into one generic "regulation was weak" claim.
- **Fed response** (`crisis2008-fedresponse-001/002/003`) — traditional
  LOLR (backed by good collateral, temporary liquidity) must stay distinct
  from Bernanke-era unconventional actions (toxic-MBS lending, non-bank
  lending, CP market involvement), and both must stay distinct from the
  fiscal TARP/emergency-lending questions.
- **Debt overhang** (`crisis2008-debtoverhang-001/002`) — the bondholders'-
  prior-claim mechanism must be stated precisely, not reduced to a generic
  "dilution" or "raising capital is hard" claim.
- **Balance-sheet vs. credit-channel transmission**
  (`crisis2008-transmission-001/002/003`) — the two channels must be kept
  distinct (asset-value/wealth effect vs. disrupted flow of funds), and
  neither question may imply that repairing balance sheets produces an
  immediate aggregate-demand recovery (a claim the deck doesn't make).
- **Chart-only slides** — confirmed no question depends on reading the two
  garbled charts (see check 8 above).
- **Hard questions that may be ambiguous rather than hard** — all 13
  `hard`-labeled questions get individual review to confirm the difficulty
  comes from a genuine multi-step chain, subtle contrast, or ranking task,
  not unclear wording.

## Fix policy

Fix issues directly in `data/questions.json`, preserving existing question
IDs. If a question cannot be verified confidently after investigation,
either revise it, mark it `needsReview: true` with a documented reason in
`docs/source-notes.md`, or remove it only if it can't be fixed or usefully
flagged (preferring to preserve the 37-question count). This audit will not
touch the 340 pre-existing questions, `src/`, `styles/`, or
`scripts/validate-data.mjs` beyond a tiny shared fix if one turns out to be
strictly necessary.

See `docs/update-notes/2026-07-14-crisis2008-quality-audit-results.md` for
the outcome of this audit once complete.
