# New Fair-Game Slides Results — 2026-07-14

Companion results doc to
`docs/update-notes/2026-07-14-new-fair-game-slides-plan.md`. The first pass
of that plan found zero new files (see that doc). The user then added one
new file to `private-materials/` and asked for a re-run; this document
covers that second pass.

## New file detected

`Economic Crisis.pdf` — the only new, unrepresented file found on re-scan
of `private-materials/`. Every other file (13 course-material files/paired
sources) remained already represented, unchanged from the first pass.

## Source added

- **`financial_crisis_2008`** (`Economic Crisis.pdf`) — "2008 Financial
  Crisis: Background," a 24-slide supplementary lecture deck. Extracted
  cleanly via `pdftotext -layout`. Author per PDF metadata: Gabrielle
  Penrose (a different presenter than the course's own instructor).
  Academic-integrity check: the deck is purely explanatory/discussion-
  question-headed content with no student-facing questions, no answer
  key, and no framing as an assessment — safe to use, no concern flagged.
  Full `coverageSummary` and `reliabilityNotes` are in `data/sources.json`;
  full narrative is in `docs/source-notes.md` under "2026-07-14 New
  Fair-Game Slides: The 2008 Financial Crisis."

## Topic added

- **`financial-crisis-2008`** ("The 2008 Financial Crisis") — covers
  securitization/tranching mechanics, moral hazard and principal-agent
  problems (mortgage origination, credit rating agencies), leverage and
  too-big-to-fail, credit default swaps and AIG, regulatory gaps, the
  Fed's crisis-era LOLR actions, debt overhang, and the balance-sheet/
  credit-channel transmission mechanism. None of these are covered by the
  existing `financial-markets`, `money-banking`, or `monetary-policy`
  topics, so a new topic was added rather than overloading an existing
  one (per the task's "don't create overly narrow topics" guidance, this
  one spans 16 distinct subtopics and 37 questions, not a narrow slice).

## Questions added

**37 new questions**, IDs prefixed `crisis2008-*`, all with
`sourceIds: ["financial_crisis_2008"]`, `topic: "financial-crisis-2008"`,
and `needsReview: false`. Every question is a paraphrase grounded in
specific lecture bullet text (quoted or closely paraphrased in each
question's `correctExplanation`), never a verbatim copy of the deck's
phrasing or answer-choice structure. No question was checked against, or
found to duplicate, any of the existing 340 questions (`normalizeText`
duplicate check run against the full existing bank; zero collisions).

### IDs added, by subtopic

- `crisis2008-origins-001`, `-002` (2): teaser-rate/price-assumption
  mechanism; "subprime" definition common-confusion (vocab)
- `crisis2008-origination-001`, `-002` (2): originate-to-distribute
  principal-agent mechanism; scenario transfer to a new auto-loan example
- `crisis2008-securitization-001`, `-002` (2): securitization definition
  (vocab); diversification-benefit vs. opacity-problem trade-off
- `crisis2008-tranching-001` .. `-003` (3): basic MBS vs. CDO/CMO
  structure; tranche-seniority loss-waterfall ranking; investor-preference
  scenario transfer (insurance company vs. hedge fund)
- `crisis2008-ratingagencies-001`, `-002` (2): why CRAs over-rated MBS;
  common-confusion on "just incompetence" claims
- `crisis2008-fanniefreddie-001`, `-002` (2): F&F's post-privatization
  role shift; F&F's rescue as a too-big-to-fail example
- `crisis2008-leverage-001` .. `-003` (3): capital-ratio definition
  (vocab); why the 3%-vs-8-10% gap matters; numeric scenario-transfer
  application
- `crisis2008-moralhazard-001`, `-002` (2): misperception vs. incentive
  explanations for risk-taking; distinguishing bailout-expectation from
  executive-short-termism incentives
- `crisis2008-toobigtofail-001`, `-002` (2): counterparty-risk mechanism;
  scenario transfer comparing a regional bank vs. an interconnected
  multinational bank
- `crisis2008-cds-001`, `-002` (2): AIG's CDS-market role; CDS payout
  mechanics
- `crisis2008-regulation-001` .. `-003` (3): commercial-vs-investment-bank
  regulatory asymmetry; Regulation Z timing; F&F's weak, lobbied-against
  regulator
- `crisis2008-fedresponse-001` .. `-003` (3): traditional LOLR vs.
  unconventional actions; why lending against toxic MBS is riskier;
  scenario transfer classifying a new hypothetical Fed action
- `crisis2008-debtoverhang-001`, `-002` (2): why distressed firms can't
  easily raise equity; common-confusion on "just sell more stock"
- `crisis2008-tarp-001`, `-002` (2): emergency lending vs. TARP purpose;
  nationalizing banks vs. buying bad loans
- `crisis2008-transmission-001` .. `-003` (3): Great Depression parallel;
  balance-sheet vs. credit channel; scenario transfer classifying a
  homeowner vs. a small business by channel
- `crisis2008-synthesis-001`, `-002` (2): ranking which institution type
  is most vulnerable to a shock; diversification-vs.-risk-elimination
  common confusion

37 IDs total, all unique, all new (no collisions with the existing 340
IDs).

## Difficulty and question-type breakdown (new batch)

| Difficulty | Count | Share |
|---|---|---|
| Easy | 5 | 13.5% |
| Medium | 19 | 51.4% |
| Hard | 13 | 35.1% |

| Type | Count |
|---|---|
| Standard | 34 |
| Vocab | 3 |
| Graph | 0 |
| Formula | 0 |

No `graph` questions were generated because this deck teaches securitization/
leverage/policy mechanics, not supply-demand-style curve-shift or
equilibrium-diagram reasoning (the two chart-only slides it does contain —
an MBS payment-stream bar chart and a CDO tranche-waterfall bar chart —
didn't extract usable numeric data, though the same seniority concept is
independently documented in the surrounding bullet text and is instead
tested as a `standard` ranking question). No `formula` questions were
generated because the deck contains no content requiring a calculation
(dollar figures like the $1.1 trillion bad-debt estimate or the 3%/8-10%
capital ratios are used as comparison points in `standard` questions, not
as inputs to a formula the student must compute).

## Final total question count

**377 questions** (340 + 37), **18 topics** (17 + 1 new), **14 sources**
(13 + 1 new).

- Vocabulary/definition questions: **45** (42 + 3)
- Formula/quantitative questions: **78** (unchanged)
- Graph interpretation questions: **46** (unchanged, still 11 with an
  inline SVG diagram)

## Coverage and duplication audit

- **Coverage:** all 16 subtopics map to distinct concepts drawn from
  across the full 24-slide deck (origins, origination incentives,
  securitization, MBS/CDO structure, rating agencies, Fannie Mae/Freddie
  Mac, leverage, moral hazard, too-big-to-fail, CDS/AIG, regulation, the
  Fed's response, debt overhang, TARP, real-economy transmission, and
  cross-cutting synthesis) — every major idea in the deck has at least one
  question, and no subtopic has more than 3 questions (no over-
  concentration on any single slide or term).
- **Duplication:** an automated normalized-text check confirmed no new
  question duplicates or near-duplicates any of the other 376 questions in
  the bank (checked both against the pre-existing 340 and within the new
  batch of 37).
- **Distractor plausibility:** every wrong-answer choice was checked to
  represent a specific, realistic confusion (a reversed mechanism, a
  plausible-but-unsupported claim, an overgeneralization, or a mixing-up
  of two related concepts) rather than an obviously-silly filler option,
  and every `wrongExplanations` entry names the specific error rather than
  a generic "this is wrong."
- **Single-defensible-answer check:** an automated script confirmed no
  question has a duplicate choice string, no `wrongExplanations` entry
  duplicates the `correctExplanation` text, and every question has
  non-empty `tags`.

## `needsReview` count

**0.** Every question is grounded in cleanly-extracted bullet text from
`Economic Crisis.pdf`; none of the extraction gaps noted above (the two
chart-only slides, the hyperlink-only final slide) affect any specific
question's verifiability, since the tranche-seniority questions rely on
the surrounding bullet text, not the unreadable chart pixels.

## Validation result

```
$ node scripts/validate-data.mjs
Checked 377 questions, 18 topics, 14 sources.
Vocabulary/definition questions: 45.
Formula/quantitative practice questions: 78.
Graph interpretation questions: 46 (11 with an inline diagram).
All checks passed with no errors or warnings.
```

No errors, no warnings.

## Skipped material

- The MBS payment-stream bar chart and the CDO/CMO tranche-waterfall bar
  chart (garbled axis-label extraction, no usable numeric data) were not
  read as charts, but the underlying seniority/pass-through concepts they
  illustrate are independently and fully documented in the surrounding
  bullet text, so no content was actually lost from the question batch.
- The final "Crisis Timeline & Regulation" slide (two bare external
  hyperlinks, no body content) was not used as a basis for any question.

No worked practice problem, discussion point, or concept in the deck was
skipped for being unclear or ambiguous — the entire deck's substantive
bullet content is covered by at least one question.
