# Graph Practice Plan — 2026-07-11

Plan for adding graph-interpretation/graph-translation questions and a Graph
Practice mode to the Econ 10b study game. This does not touch the existing
234-question bank's content — it only adds new questions with
`questionType: "graph"` and the supporting mode/code.

## Source materials re-reviewed for this pass

Re-extracted fresh (not relying on memory from prior sessions) via `python-pptx`
(`.pptx`) and `pdftotext -layout` (`.pdf`):

- `HarvardS10b_Class1.pptx` (38 slides)
- `HarvardS10b_Class3.pptx` (39 slides)
- `HarvardS10b_Class4.pptx` (39 slides)
- `HarvardS10b_Class5.pptx` (44 slides)
- `DS1_solutions.pdf`
- `DS2_solutions.pdf`

Already had full text in context from the 2026-07-11 midterm-materials update
earlier the same day: `HarvardS10b_Class6_7.pptx`, `Guest Lecture Slides - Price
Stability and Monetary Policy.pptx`, `DS3.pdf` + `DS3_solutions.pdf`.

## Graph concepts considered, and which were used

### Class 1 / DS1 — used extensively
Class 1's slides 15/17-19 give an explicit PPC (intercepts = max production of one
good, slope = opportunity cost, outward shift = growth). Slides 26-33 give four
explicit, fully-labeled supply/demand shift diagrams with the shift-to-equilibrium
outcome spelled out in the bullet text itself (e.g., "An increase in demand will
lead to an increase in both equilibrium price and quantity"), plus a combined
supply-and-demand-shift example (the iPods slide). DS1 adds a two-country combined
PPC problem and three demand-shifter examples (olive oil, butter/white bread, rye
bread) with explicit shift-and-equilibrium-effect language. **Used**: PPC point/
slope/shift questions, single-curve and combined-curve supply/demand shift
questions (with fresh, non-verbatim scenarios per the 2026-07-11 audit's lesson).

### Class 3 / DS2 — used extensively
Class 3 slides 6-10 give the labor demand curve (VMP-based, downward-sloping) and
labor supply curve (upward-sloping, reservation-wage-based) with explicit shifters
for each. Slide 12 shows long-run labor demand growth (technology/capital/human
capital shifting demand right, raising both wage and employment). Slides 21 and 24
give two side-by-side labor-market diagrams each (globalization's effect on an
import-competing vs. an exporting industry; skill-biased technological change's
effect on unskilled vs. skilled labor demand) — ideal for "compare two graphs"
questions. DS2 adds two worked labor-market-shift examples (opticians, pilots)
with explicit shift-direction and equilibrium-effect language. **Used**: labor
demand/supply curve identification, event-to-shift questions (fresh scenarios, not
opticians/pilots), and two hard-tier compare-two-graphs questions (globalization,
SBTC).

### Class 4 — used minimally, by design
Class 4 has almost no axis-labeled, extractable graph content — most chart slides
are picture-only (no extractable data) and the deck is otherwise formula-based
(compound growth, Rule of 72) or bullet-list-based (8 determinants of
productivity, institutions). Two concepts are clearly and unambiguously described
in words even without an extractable diagram: diminishing returns to capital
("output increases at a decreasing rate" — a concave production-function shape)
and the accelerating divergence of compound growth trajectories over time (the
2%/4%/6%-over-210-years example). **Used**: exactly 2 optional questions on these
two concepts, per the task's "optional 2-4 growth/productivity graph questions
only if source-grounded" allowance. No other Class 4 content was used for graph
questions.

### Class 5 — used extensively (the richest graph source in the bank)
Slides 20-22 give the loanable funds diagram (S upward-sloping, I downward-sloping
in the real interest rate) with two fully-labeled shift examples spelled out in
the bullets: a budget deficit increase ("Reduces national saving... Movement up
the investment demand curve... Higher interest rate... Private investment is
crowded out") and a technology improvement ("Increases the demand for loanable
funds... Higher interest rate... Higher level of savings and investment").
Slides 35-42 give the capital-flows framework: the capital inflow curve responds
to the domestic real interest rate (slide 37), risk shifts the capital-inflow
curve left (slide 38, explicit), and the S + KI = I / NX + KI = 0 identities with
their graph implication ("Capital inflows mean more investment and lower interest
rates," slide 40). **Used**: extensively for both `loanable-funds`/
`saving-investment` and `capital-flows` graph questions, including movement-vs-
shift distinctions, error-identification questions, and identity-to-graph
questions.

### Class 6/7 and DS3 — used for money-market questions
Class 6's own slides don't include an axis-labeled money demand/supply diagram
(money is covered via definitions, the deposit multiplier, and the quantity
equation, not a supply/demand-style graph). **DS3**, however, is explicitly
graph-oriented: Q1 tests the money demand curve's downward slope (against the
interest rate), Q2/Q3 test Fed open-market operations shifting the money supply
and what does/doesn't shift money demand, and Exercise 12.7's sub-parts
explicitly ask students to "analyze graphically" money-demand shift scenarios.
**Used**: DS3 for money demand/supply curve and shift questions (fresh scenarios,
distinct from the existing `ds3-*` text-based questions from the prior update).

### Guest lecture (ECB) — used narrowly
The guest lecture is almost entirely institutional/conceptual (money functions,
mandate, reserves, QE/QT, digital euro) with one genuine graph-like concept: the
pre-2007 interest rate corridor (marginal lending rate ceiling, deposit rate
floor, overnight rate pinned near the center) and its contrast with the post-2008
floor/ample-reserves system (rate pinned at the floor). **Used**: 2 questions on
the corridor concept specifically; no other guest-lecture content was treated as
graph material, per the task's "only if clearly taught and suitable" guidance.

### Skipped entirely
- Bond pricing "graphs" (Class 6 slides 18-19) — these are worked numeric tables,
  not axis-labeled shift diagrams, and are already covered by existing `formula`-
  type questions; not re-treated as graph content here.
- Any chart/photo-only slide across all decks (FRED/BEA charts, the Piketty
  inequality chart, debt-to-GDP-by-country chart, etc.) — no extractable axis/
  curve data, so none were used, consistent with how these were excluded from
  every prior update.
- Reserve ratio / money multiplier "graph" — this is a formula (already covered
  by `class6-moneymultiplier-001`), not a curve-shift diagram; no genuine graph
  content to add here per the task's "if graph-based" qualifier.

## Target question count by topic

| Area | Target (task) | Planned |
|---|---|---|
| PPC / supply-demand (`comparative-advantage-trade`, `supply-demand-equilibrium`) | 6-8 | 8 |
| Labor market (`labor-markets`, `inequality-globalization-sbtc`) | 5-7 | 6 |
| Loanable funds / saving-investment (`saving-investment`, `loanable-funds`) | 7-10 | 8 |
| Capital flows / open economy (`capital-flows`) | 5-8 | 6 |
| Money market / monetary policy (`money-banking`, `monetary-policy`) | 5-8 | 7 |
| Growth/productivity (optional) (`economic-growth`, `growth-accounting-compound-growth`) | 2-4 | 2 |
| **Total** | 30-45 | **37** |

No new topics are created — every graph question is assigned to one of the 17
existing topics, consistent with "Graph Practice is a filtered mode, not a
separate topic."

## Inline SVG diagrams

Full SVG diagram support **was implemented** in this pass (not deferred):
- New optional `diagram` field on the question schema: `{ type: "svg", alt:
  "...", svg: "<svg>...</svg>" }`.
- Validated in both `src/data.js` (in-browser) and `scripts/validate-data.mjs`
  (CLI): if present, `type` must be `"svg"`, non-empty `alt` text is required, and
  (for `svg` type) a non-empty `svg` string is required.
- Rendered in `src/render.js` above the question stem, inside a `<figure
  role="img" aria-label="...">` wrapper with a visible `<figcaption>` repeating
  the alt text (both an accessible label for screen readers and a plain-text
  description visible to every student). SVGs are responsive (`max-width: 100%;
  height: auto`) and capped at 340px wide so they stay readable without
  dominating the screen on mobile.

Every diagram is **original, hand-authored SVG markup** — simple straight-line
supply/demand-style crossing diagrams or a concave PPC curve, using the app's own
CSS custom properties (`var(--text)`, `var(--accent)`, `var(--good)`, etc.) for
strokes so they automatically adapt to light/dark mode. None are copied
screenshots or recreations of any specific slide's exact pixel layout — they are
original diagrams illustrating the same standard textbook shapes (which are not
copyrightable in themselves) that the course teaches.

Given the effort of hand-authoring meaningful SVG markup, diagrams were added to
a representative subset of ~10 questions (roughly one "read the base diagram" and
one "read a shift" example per topic area) rather than all 37 graph questions.
The remaining questions are carefully-written **text-described graph
questions** — the stem fully describes the axes, curves, and shift in words, so
the question is just as testable and self-contained without a rendered image.
This matches the task's own fallback allowance ("If adding SVG support is too
much, use text-described graph questions for this pass") — SVG support itself
was not too much to add, but hand-illustrating all 37 questions was judged to be
low-value relative to the added authoring time, since the text descriptions
already fully specify the graph situation.

See `docs/update-notes/2026-07-11-graph-practice-results.md` for the final counts
and any `needsReview` items once question authoring is complete.
