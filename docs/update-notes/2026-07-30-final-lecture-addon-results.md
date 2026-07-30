# 2026-07-30 Final Lecture Question Add-On — Results

## Summary

Added a targeted 41-question batch generated from the final lecture of the
course, `HarvardS10b_Class11.pptx` ("Class 11: The Global Economy, Exchange
Rates, and Open Economy Macroeconomic Issues"), uploaded to
`private-materials/` today. This is the last lecture add-on for the final
exam question bank. Two new topics were added (`exchange-rates` and
`open-economy-policy`), one new source (`class11`), and the bank grew from
209 to **250 questions**, 9 to **11 topics**, and 10 to **11 sources**. No
existing question, topic, or source was modified — this was a pure
add-on. `node scripts/validate-data.mjs` passes with zero errors and zero
warnings. `needsReview` count for the whole bank remains **0**.

## Selected source

`class11` — `HarvardS10b_Class11.pptx`, "Class 11: The Global Economy,
Exchange Rates, and Open Economy Macroeconomic Issues." This was the only
newly uploaded file since the 2026-07-27 batch (filesystem timestamp
2026-07-30, today), and its own title slide and second slide ("The Last
Class of Ec S10b!") confirm it as the final lecture the prior plan note
flagged as still pending. Full source-identification reasoning is in
`docs/update-notes/2026-07-30-final-lecture-addon-plan.md`.

## Topics added

- `exchange-rates` — "Exchange Rates and Purchasing Power Parity": the
  FOREX market, nominal vs. real exchange rates, the law of one price,
  purchasing power parity, and the exchange-rate channel of monetary policy
  transmission.
- `open-economy-policy` — "Fixed vs. Floating Exchange Rates and the Policy
  Trilemma": the optimum currency area framework, the policy trilemma,
  capital controls, and historical currency-crisis case studies (UK/Sweden
  1992, France 1993, Argentina, Malaysia 1998).

## Questions added: 41

| Topic | vocab | standard | formula | graph | Total |
|---|---|---|---|---|---|
| `exchange-rates` | 5 | 9 | 5 | 2 | 21 |
| `open-economy-policy` | 4 | 12 | 1 | 3 | 20 |
| **Total** | **9** | **21** | **6** | **5** | **41** |

All 41 questions cite `sourceIds: ["class11"]` and `sourceLabel: "Class 11
slides"` only — no cross-source citations were needed for this batch.

## Difficulty breakdown (new batch)

6 easy (14.6%), 19 medium (46.3%), 16 hard (39.0%) — within the task's
10-20% / 45-55% / 30-40% target bands, leaning toward the harder end
per the final-exam-prep framing. Mechanism, policy-interpretation,
common-confusion-diagnosis, compare-cases, and scenario-transfer question
styles were prioritized over simple recall, especially in the
`open-economy-policy` standard questions (Malaysia 1998, UK/Sweden vs.
France 1993, Argentina's peso peg, the policy trilemma's underlying
mechanism).

## Final bank totals

- **Total questions: 250** (209 + 41)
- **Topics: 11** (9 + 2)
- **Sources: 11** (10 + 1)
- **Question type breakdown:** 105 `standard` (64 explicit + 41 legacy
  untyped), 58 `vocab`, 58 `formula`, 29 `graph` (17 with an inline SVG
  diagram)
- **Difficulty breakdown:** 38 easy (15%), 127 medium (51%), 85 hard (34%)
- **`needsReview` count: 0**

## Topic/source breakdown (full bank)

| Topic | Questions |
|---|---|
| `monetary-policy-postmidterm` | 29 |
| `keynesian-cross-model` | 26 |
| `fiscal-policy` | 26 |
| `financial-crisis-2008` | 26 |
| `aggregate-demand-supply` | 24 |
| `business-cycles-output-gaps` | 22 |
| `exchange-rates` | 21 |
| `unemployment` | 20 |
| `money-market` | 20 |
| `open-economy-policy` | 20 |
| `inflation-dynamics` | 16 |

## Graph / SVG questions (5, all new inline diagrams)

- `xrate-graph-001`, `xrate-graph-002` — a dollar-market FOREX
  supply-and-demand diagram, one question isolating a demand-curve shift
  and one isolating a supply-curve shift, both driven by a Fed tightening.
- `openecon-graph-001` — the optimum-currency-area "Gains vs. Losses"
  crossing diagram (both plotted against economic integration with a
  partner country).
- `openecon-graph-002` — the policy-trilemma triangle (three goals at the
  corners, three regimes on the connecting edges).
- `openecon-graph-003` — the UK/Sweden 1992 `r`-vs.-output diagram (the
  choice between `rFor` and `rLow`).

**SVG verification method:** every diagram's line equations and marked
intersection points were solved algebraically in Python (`sympy`-equivalent
linear-intersection solving, plus direct slope/line-equation checks) before
being converted to SVG coordinates, then re-verified against the final SVG
coordinates actually written into the question JSON. Specific checks
performed per the question-authoring guide's SVG rule: each curve's
screen-coordinate slope has the correct economic sign (accounting for SVG's
downward-increasing y-axis), every `<circle>` equilibrium/reference point's
coordinates match the algebraic intersection of the two lines it sits on,
and every shifted/dashed curve is parallel to its unshifted original and
shifted in the claimed direction. All five diagrams' SVG markup was also
parsed as XML to confirm well-formedness.

**One rendering bug found and fixed during in-browser QA (not caught by
XML/algebraic checks):** `openecon-graph-002`'s policy-trilemma triangle
had its two bottom-corner text labels ("Monetary Policy Autonomy" and
"Freedom of Capital Movement") positioned so they overflowed the SVG's
`viewBox` and were clipped in the rendered app (confirmed visually — the
XML was well-formed and the triangle geometry was correct, so no earlier
check caught it). Fixed by splitting both labels across two `<tspan>` lines
centered on the same corner `x` coordinate; re-verified in the browser that
both labels now render fully within bounds. This is a good example of why
the question-authoring guide's rule to "render every new diagram in the
actual app" (not just check the raw SVG markup) matters — text-overflow
bugs are invisible to XML-validity and line-intersection checks alike.

## Formula questions (6) and verification method

`xrate-formula-001` through `-005` (real-exchange-rate conversion, PPP
application, and common-error-diagnosis variants) and
`openecon-formula-001` (interest-parity/fixed-rate real-interest-rate
application). Every correct answer and every numeric distractor was
independently recomputed in Python from the question's own stated numbers
and each distractor's claimed mistake, confirmed to match the displayed
number exactly, **before** the questions were written into the final JSON
(not just checked after the fact) — see the verification transcript below.

```
xrate-formula-001: Pf$=20.0, correct ratio=0.9  | dist: 11.25 (mult error), 1.111 (inverted ratio)
xrate-formula-002: correct e=1.56  | dist: 0.641 (inverted), 1.2 (real/nominal confusion), 1.083 (divide instead of multiply)
xrate-formula-003: correct e=130.0  | dist: 1300.0 (decimal slip), 0.0077 (inverted ratio), 15480 (subtraction instead of division)
xrate-formula-004: correct=14.0%  | dist: 4% (ignores XR change), -6.0% (sign-flip), 10.0% (forgets to add US inflation)
xrate-formula-005: correct Pf$=80.0  | dist: 33.8 (student's mult error), 52 (skips conversion), 123.08 (converts wrong price)
openecon-formula-001: correct r=-3%  | dist: 2% (wrong inflation figure), 3% (sign-flip), 11% (add instead of subtract)
```

**Formula-convention note (see `docs/source-notes.md` for the full
standing note):** `class11` uses two different, but each internally
consistent and explicitly source-stated, exchange-rate sign conventions
across its own slides — lowercase `e` (foreign currency per dollar,
slides 3-13) and uppercase `E` (domestic currency per foreign currency,
slides 21-25, confirmed by slide 21's own speaker notes). The five
`exchange-rates`-topic formula questions use the lowercase-`e` convention;
the one `open-economy-policy`-topic formula question uses the uppercase-`E`
convention and states that explicitly in its `correctExplanation`, so the
two conventions are never silently mixed within a single topic.

## Distractor-quality checks performed

Per the task's explicit distractor-audit requirement, every new question's
four choices were checked for length/style giveaway patterns. An automated
per-question word-count comparison initially flagged **18 of the 41**
questions where the correct answer was noticeably longer than the average
distractor (one case nearly 2x the average). All 18 were rewritten —
trimming the correct answer and/or expanding distractors — to bring every
question's correct-answer-to-average-distractor-length ratio to within
~35% (most within ~15%), while preserving each choice's exact meaning and
every `wrongExplanation`'s validity. A second automated pass confirmed no
question remained above the 30% length-imbalance threshold after fixes.
This finding and fix are documented as a new durable rule in
`docs/question-authoring-guide.md` ("Balance answer-choice plausibility and
length") and a new checklist section in `docs/qa-checklist.md`.

Manual spot-checks across a sample spanning all four question types
(`xrate-standard-007`, `openecon-standard-009`, `openecon-graph-002`,
`xrate-formula-004`, `openecon-formula-001`, `xrate-vocab-003`) confirmed:
parallel grammatical structure across choices, no distractor that's
"obviously silly," at least two plausible distractors per question, no
technical-vocabulary-only-on-the-correct-answer pattern, and no
qualifier-word giveaways (e.g., "best captures the nuanced relationship")
exclusive to the correct answer.

## Answer-length/style giveaway check result

**Fixed.** 18/41 questions initially flagged, all rewritten; 0/41 flagged
on the final automated re-check (one borderline case, `xrate-formula-005`
at 35% above average, was also tightened as a final pass). See the
"Distractor-quality checks performed" section above for the method.

## Coverage / duplication audit

- **Exact-duplicate question text:** none — confirmed by
  `scripts/validate-data.mjs`'s built-in near-duplicate-text warning
  (normalized case/whitespace), which reported zero warnings across all 250
  questions.
- **Near-duplicate scan (7-8 word shared-phrase shingles)** across all 41
  new questions' stems and `correctExplanation` text found only three
  minor, expected overlaps, all short technical phrases needed to precisely
  name a mechanism (e.g., "what happens to the equilibrium exchange rate"
  shared between the two intentionally paired FOREX supply/demand
  questions `xrate-graph-001`/`-002`) rather than copied narrative
  sentence architecture — consistent with the question-authoring guide's
  existing carve-out for unavoidable technical vocabulary. No
  `correctExplanation` shared any 8-word phrase with another new question's
  explanation.
- **Stale source/topic IDs:** none — every new question's `topic` matches
  its `xrate-`/`openecon-` ID prefix, and every `sourceIds` entry is
  exactly `["class11"]`.
- **Over-concentration check:** no single Class 11 slide or sub-concept is
  tested more than 2-3 times; the batch spans all four major concept
  clusters (FOREX market, real exchange rates/PPP, fixed vs. floating/OCA,
  policy trilemma/capital controls) roughly evenly.
- **Overlap with the existing 209-question bank:** `exchange-rates` and
  `open-economy-policy` are genuinely new topic areas with no prior
  standalone coverage, but a targeted grep for exchange-rate/FOREX/currency
  terminology in the pre-existing bank found 4 `class9`-cited
  `monetary-policy-postmidterm` questions (`monpolicy-vocab-004`,
  `monpolicy-standard-006`, `monpolicy-standard-009`,
  `monpolicy-graph-003`) that already test Class 9's brief introduction of
  the "exchange rate channel" (rising `r` → currency appreciates → net
  exports fall). This is expected, legitimate overlap, not a duplication
  bug: Class 11 explicitly revisits and substantially deepens this same
  mechanism (the actual FOREX supply-and-demand market model, real vs.
  nominal exchange rates, PPP, interest rate parity) rather than repeating
  Class 9's brief treatment, and none of the new `xrate-*` questions
  reuses an existing question's scenario, wording, or answer-choice
  structure — `xrate-standard-001`/`-008` and `xrate-graph-001`/`-002`
  test the same underlying mechanism from a different angle (isolating the
  FOREX market's demand and supply curves individually, with an inline SVG
  diagram, versus the older questions' single combined "which curve
  shifts" framing) and are grounded in and cited to `class11`, not
  `class9`. No exact- or near-duplicate question text was found by
  `scripts/validate-data.mjs`'s duplicate-text check across all 250
  questions.

## `needsReview` count: 0

No slide in this batch required guessing at unreadable or ambiguous
content; the three chart-only slides (South America inflation scatter,
"Fixed versus Floating" comparison graphic, developing-countries
capital-controls chart) were excluded from grounding entirely rather than
flagged.

## Validation result

```
node scripts/validate-data.mjs
```

```
Checked 250 questions, 11 topics, 11 sources.
Vocabulary/definition questions: 58.
Formula/quantitative practice questions: 58.
Graph interpretation questions: 29 (17 with an inline diagram).
All checks passed with no errors or warnings.
```

Additional manual checks (all passed): no duplicate IDs; no invalid
topic/source ID references; no stale pre-midterm or old-bank topic/source
IDs referenced; no `answerIndex`/explanation mismatches; no malformed
diagrams (all 5 new SVGs parse as valid XML); no unsupported
`questionType` values; no Midterm Review references anywhere in the app,
data, or docs; `git diff --stat` on `data/questions.json`,
`data/sources.json`, and `data/topics.json` shows pure additions (zero
deletions), confirming no existing question, topic, or source was altered;
no raw `private-materials/` files staged for commit.

## QA / playtest result

Verified in a locally-served copy of the app (Chrome, via `python3 -m
http.server`): app loads with zero console errors or warnings (only the
expected `[Econ 10b question bank validation] 250 questions passed all
checks (58 vocab)` info log); dashboard shows 250 Total Questions and
correctly lists both new topics with their question counts (21 and 20); no
Midterm Review card or reference appears anywhere. Full Bank (250), Shuffle
Mixed Practice (250), Formula Practice (58), Graph Practice (29), and topic-
level Practice Topic all confirmed working. Answer-choice shuffling
confirmed working for a sample of new questions (correct choice appeared at
varying positions across `openecon-vocab-001`, `openecon-formula-001`,
and all three `openecon-graph-*` questions, not always index 0 as authored)
and graded correctly against the shuffled position, with the matching
explanation rendered for each. `openecon-formula-001` (the batch's one
formula question outside the `exchange-rates` topic) graded correctly after
shuffling. All three `open-economy-policy` diagram questions
(`openecon-graph-001` OCA crossing chart, `openecon-graph-002` trilemma
triangle, `openecon-graph-003` UK/Sweden `r`-vs.-output diagram) were
visually confirmed rendering correctly in the browser, including the
trilemma-triangle label-overflow fix described above. Progress tracking was
confirmed via direct `localStorage["econ10bStudyGame:v1"]` inspection: all
5 answered new questions recorded correctly under their question IDs with
accurate `lastAnswerIndex`/`lastCorrect` values, and the dashboard's
Attempted/Accuracy/Weakest-Topic tiles and New/Unseen count (245) updated
correctly. `Storage.resetProgress()`'s logic was verified by direct code
read (unchanged from the prior audit's verified behavior) and by manually
clearing the same `localStorage` key the reset handler targets, rather than
by clicking the Reset Progress button in the browser, since that control
triggers a native `confirm()` dialog that browser-automation tooling is
directed not to trigger. The app remains fully static — no build step, no
backend, GitHub Pages-compatible.

## Skipped material and why

- Slide 13 ("Inflation and Currency Depreciation in South America,
  1995-2004") — scatter chart, only a "45º line" label extracted, no usable
  data points.
- Slide 15 ("Fixed versus Floating") — comparison graphic, no extractable
  body text beyond the title.
- Slide 35 ("Percentage of Developing Countries with Capital Controls") —
  chart, no extractable axis/series data.
- The bare "Soft vs. hard fixed rates" phrase on slide 14 was not quizzed
  on its own, since the deck names but never defines or elaborates that
  specific sub-distinction anywhere in the extracted text.

No other final-lecture content was intentionally skipped; every other
major concept cluster in the deck (FOREX market mechanics, real exchange
rates, PPP and the law of one price, monetary policy's exchange-rate
channel, optimum currency areas, the broad costs/benefits of fixing, the
policy trilemma, and capital controls) has at least one question.
