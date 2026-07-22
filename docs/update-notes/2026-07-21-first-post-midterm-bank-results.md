# 2026-07-21 First Post-Midterm Question Bank — Results

## Summary

The first post-midterm question bank was generated from the two newly
uploaded course materials identified in the matching plan note
(`2026-07-21-first-post-midterm-bank-plan.md`). The bank grew from 0 to
**105 questions**, across **6 new topics** and **2 new sources**.

## Selected sources

| Source ID | Filename | Title |
|---|---|---|
| `class8` | `HarvardS10b_Class8.pptx` | Class 8: Unemployment, Recessions, the Keynesian Model, and Fiscal Policy |
| `class9` | `HarvardS10b_Class9_Preliminary.pdf` | Class 9: Central Banks, the Federal Reserve, and Monetary Policy |

## Excluded (old pre-midterm/midterm) sources

All 14 other files in `private-materials/` (`HarvardS10b_Class1-6_7.pptx`,
`DS1_solutions.pdf`, `DS2_solutions.pdf`, `DS3.pdf`/`DS3_solutions.pdf`,
`Problem Set1_Solutions.pdf`, `Quiz 2_...pdf`,
`MidtermStudyMaterials_Summer2026.doc`, `Economic Crisis.pdf`, and the ECB
guest-lecture deck) — all predate the 2026-07-21 reset and were already
used to build the wiped pre-midterm/midterm bank. None was reused as a
source for this batch, per the user's explicit instruction.

## Topics added

| Topic ID | Name | Questions |
|---|---|---|
| `unemployment` | Unemployment: Measurement, Costs, and Types | 16 |
| `business-cycles-output-gaps` | Business Cycles, Output Gaps, and Okun's Law | 18 |
| `keynesian-cross-model` | The Keynesian Cross Model of Short-Run Output | 20 |
| `fiscal-policy` | Fiscal Policy and Stabilization | 16 |
| `money-market` | The Fed, Money Supply, and Money Demand | 14 |
| `monetary-policy-postmidterm` | Monetary Policy Transmission and the Financial Crisis Response | 21 |

## Questions added

**105 questions added; final total question count: 105** (from a base of 0).

### questionType breakdown

| Type | Count |
|---|---|
| `standard` | 41 |
| `vocab` | 26 |
| `formula` | 27 |
| `graph` | 11 (9 with an inline SVG `diagram`) |

### Difficulty breakdown

| Difficulty | Count | Share |
|---|---|---|
| `easy` | 16 | 15% |
| `medium` | 53 | 50% |
| `hard` | 36 | 34% |

Within the 15-20% / 45-55% / 30-40% target range from the post-midterm
difficulty standard. Three vocab questions (`fiscal-vocab-002` "Automatic
Stabilizers," `moneymkt-vocab-003` "Reserve Requirement," and
`cycles-vocab-003` "Natural Rate of Unemployment") were reclassified from
an initial `medium` down to `easy` during the difficulty-mix pass, since on
review they were single-definition recall rather than boundary/contrast
questions — this moved the easy share from an initial 12% up into the
target range without changing question content.

### Source breakdown

| Source ID | Question count |
|---|---|
| `class8` | 71 |
| `class9` | 35 |

(One question, `monpolicy-graph-001`, cites both sources — it's the one
question in the batch that explicitly connects a Class 9 mechanism to a
Class 8 diagram, so it's counted under both.)

## Deviation from the plan: money-market's formula count

The plan proposed 2 `formula` questions for `money-market`. During
authoring, it became clear that `class9`'s money-supply/demand section is
entirely conceptual — no worked numeric example, no stated reserve-ratio
figure, nothing to compute. Per the type-quota-honesty rule (already
documented in `docs/question-authoring-guide.md`'s "Writing questions from
theory-heavy, non-quantitative sources" section: "don't force a `formula`
or `graph` classification just because the source has numbers... leave the
count at zero and say so"), `money-market` was left at **0 formula
questions**, and those 2 slots were reallocated to
`monetary-policy-postmidterm` (which does have grounded quantitative
content: the Keynesian-r model and the Taylor rule), raising that topic's
formula count from a planned 5 to an actual 7. Total question count and
overall type mix were unaffected by this reallocation — see
`docs/source-notes.md`'s matching note for the source-side writeup.

## Graph / SVG questions

11 graph questions total; 9 include an original, hand-authored inline SVG
diagram (the other 2 are fully self-contained text-described graph
questions, per the authoring guide's "a graph question does not require a
diagram to be valid" rule):

- `unemployment-graph-001` — minimum-wage labor-market floor diagram (SVG)
- `cycles-graph-001` — actual-vs-potential-output-over-time diagram (SVG)
- `keynes-graph-001` / `keynes-graph-002` — Keynesian-cross diagrams (SVG)
- `moneymkt-graph-001` through `004` — money-demand and money-supply-shift
  diagrams (SVG)
- `monpolicy-graph-001` — Keynesian-cross diagram framed around monetary
  transmission (SVG)
- `monpolicy-graph-002` — nominal/real-rate time-series diagram (SVG)
- `monpolicy-graph-003` — exchange-rate-channel curve-shift reasoning
  (text-described, no diagram — the deck doesn't present a market-for-
  dollars diagram with extractable axis data, so no SVG was invented for it)

All diagrams are original hand-authored SVG markup (straight `<line>`
elements, `var(--text)`/`var(--accent)`/`var(--good)`/`var(--text-muted)`
theme-aware colors, `viewBox="0 0 260 190"`), not traced from any slide
screenshot, per the authoring guide's diagram rules.

## Formula verification method

Every formula question's correct answer and all three numeric distractors
were computed programmatically in Python (not by hand), with `assert`
statements checking the expected values before the question was finalized.
This caught and prevented several potential arithmetic errors during
authoring (e.g., confirming Okun's Law sign conventions, verifying the
Taylor rule's two-term interaction, and independently deriving each
"common-error" distractor from an actual alternate (wrong) formula
application rather than an arbitrary nearby number). The fresh Keynesian-r
economy used in `monpolicy-formula-003`/`004` (C0=900, mpc=0.7, IP0=250,
G=320, T=180, NX=30) was independently constructed rather than reusing
`class9`'s own worked example (C0=1000, mpc=0.75, IP0=300, G=300, T=200,
NX=20), per the no-verbatim-numeric-example rule.

## needsReview count

**0.** No content in either `class8` or `class9` was ambiguous or
unreadable enough to require the flag — diagram-only/photo-only slides
were simply skipped as sources rather than guessed at (see
`docs/source-notes.md` for the specific skipped slides).

## Validation result

```
node scripts/validate-data.mjs
```

```
Checked 105 questions, 6 topics, 2 sources.
Vocabulary/definition questions: 26.
Formula/quantitative practice questions: 27.
Graph interpretation questions: 11 (9 with an inline diagram).
All checks passed with no errors or warnings.
```

Additional manual checks (all passed):
- No duplicate question IDs (105 unique IDs).
- No near-duplicate question text (normalized-substring scan found zero
  pairs).
- No question references a topic or source ID outside the 6 active topics
  / 2 active sources (no stale pre-midterm IDs referenced).
- Every `answerIndex` is in range and every non-correct `wrongExplanations`
  entry is non-empty, with the correct index's entry `null`.
- No malformed `diagram` objects; all 9 diagrams have `type: "svg"`,
  non-empty `alt` text, and non-empty `svg` markup.
- No `questionType` outside `"standard"`/`"vocab"`/`"formula"`/`"graph"`.
- No `fiscal-policy` question cites `class9` (the deck's own fiscal-policy
  content gap is respected — see the plan note's "Extraction issues").
- No `money-market` question has `questionType: "formula"` (the
  type-quota-honesty reallocation above).

## QA / playtest result

Ran a full interactive pass against a local static server using a headless
Playwright browser (no project-specific run skill existed for this repo,
so the generic browser-driven pattern was used):

- App loads with **zero console errors** across every flow tested.
- Home dashboard shows **105 Total Questions**, 0 Attempted, all 6 new
  topics render with correct names/descriptions/question counts.
- **No "Midterm Review" text or card appears anywhere** on the page.
- **Full Bank** and **Shuffle Mixed Practice** both start sessions
  successfully with all 105 questions available.
- **Answer-choice shuffling verified**: launched Full Bank in two separate
  fresh sessions and confirmed the same first question's four choices
  rendered in a different order each time.
- **Formula Practice grading verified after shuffling**: answered 6
  consecutive formula questions by matching each session's shuffled choice
  text back to the data file's `answerIndex`-designated correct choice —
  all 6 were graded "Correct!" by the app, confirming shuffling and grading
  stay correctly linked.
- **Graph Practice** opens correctly; a sampled graph question
  (`monpolicy-graph-001`) rendered its inline SVG diagram cleanly above the
  stem with its caption underneath, and answer feedback rendered normally.
- **Vocabulary / Definitions** mode opens and shows a vocab-tagged question
  with the "Vocab" badge.
- **Topic practice** opens correctly for a sampled topic (`unemployment`)
  and only shows that topic's questions.
- **Reset Progress** button triggers the expected confirmation dialog
  ("This will erase all saved progress...") and completes without error
  when accepted.
- App remains fully static — no new build step, no backend, no new
  dependencies added to the shipped app (Playwright was used only as a
  local testing tool, not added to the repo).

## Skipped material and why

- Diagram/photo-only slides in both decks (business-cycle wave graphics,
  FRED charts, a Fed-leaders photo, an FOMC-minutes screenshot, a Fed
  balance-sheet chart, a Covid-19 policy-response chart, and several
  title/divider slides) were not used as a source of any factual claim —
  see `docs/source-notes.md` for the specific slide-by-slide list.
- `class9`'s implied "fiscal policy" section (listed in its own agenda) has
  no extractable content and was skipped entirely as a fiscal-policy
  source; `class8` already covers fiscal policy in full, so no coverage was
  actually lost.
- The real BLS employment-data tables in `class8` (June 2026/2020/2019)
  were read and confirmed but not used verbatim in any formula
  question — all formula questions use freshly invented figures, per the
  no-verbatim-numeric-example rule.
