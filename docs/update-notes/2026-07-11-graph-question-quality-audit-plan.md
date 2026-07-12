# Graph Question Quality Audit Plan — 2026-07-11

Companion follow-up to the same-day `2026-07-11-graph-practice-plan.md` /
`-results.md` update, which added `questionType: "graph"`, a Graph Practice mode,
and 37 new graph questions. This audit is a focused quality pass over exactly those
37 questions — it does not touch the pre-existing 234-question bank, and it does
not touch `standard`/`vocab`/`formula` questions except where they interact with
graph-mode rendering or validation code shared across question types.

## Exact question IDs being audited (37)

**PPC / supply-demand (8)**: `graph-ppc-001`, `graph-ppc-002`, `graph-ppc-003`,
`graph-ppc-004`, `graph-supplydemand-001`, `graph-supplydemand-002`,
`graph-supplydemand-003`, `graph-supplydemand-004`

**Labor markets (6)**: `graph-labor-001`, `graph-labor-002`, `graph-labor-003`,
`graph-labor-004`, `graph-labor-005`, `graph-labor-006`

**Loanable funds (8)**: `graph-loanablefunds-001` through `graph-loanablefunds-008`

**Capital flows (6)**: `graph-capitalflows-001` through `graph-capitalflows-006`

**Money market / monetary policy / growth (9)**: `graph-money-001` through
`graph-money-005`, `graph-monetarypolicy-001`, `graph-monetarypolicy-002`,
`graph-growth-001`, `graph-growth-002`

## Counts before this audit

- Graph questions: **37**
- Graph questions with an inline `diagram`: **10**
  (`graph-ppc-001`, `graph-supplydemand-001`, `graph-supplydemand-004`,
  `graph-labor-003`, `graph-loanablefunds-002`, `graph-loanablefunds-003`,
  `graph-capitalflows-001`, `graph-capitalflows-002`, `graph-money-001`,
  `graph-money-002`)
- Graph questions with `needsReview: true`: **0**

## Source files used

- `HarvardS10b_Class1.pptx` — PPC, supply/demand equilibrium and shift diagrams
- `HarvardS10b_Class3.pptx` — labor demand/supply, globalization, SBTC diagrams
- `HarvardS10b_Class4.pptx` — diminishing returns to capital, compound growth
- `HarvardS10b_Class5.pptx` — loanable funds market, capital-inflow curve
- `HarvardS10b_Class6_7.pptx` — money/banking (checked for money-market graph
  content; confirmed in the original authoring pass that Class 6 itself has no
  axis-labeled money demand/supply diagram — money-market graph grounding comes
  from DS3 instead)
- `Guest Lecture Slides - Price Stability and Monetary Policy.pptx` — interest rate
  corridor
- `DS1_solutions.pdf` — PPC (two-country, technology shift), demand shifters
- `DS2_solutions.pdf` — labor market shift examples (opticians, pilots)
- `DS3.pdf` + `DS3_solutions.pdf` — money demand/supply, Fed open-market operations

All of these were freshly re-extracted (via `python-pptx` / `pdftotext -layout`)
during the original graph-question authoring pass earlier the same day, and the
extracted text is being re-read line-by-line against each question during this
audit rather than relying on memory of having written the questions.

## Specific graph-reasoning checks to perform

Per question, cross-checked against the "special graph reasoning caution" list:

1. **Curve shift direction** — does the stated shift direction match the source's
   own description of the event's effect?
2. **Movement along a curve vs. a shift of the curve** — is the axis variable
   (e.g., the interest rate, the wage) correctly distinguished from off-axis
   determinants that shift the whole curve?
3. **Axis labels** — do the named axes match what the source diagram actually
   plots (e.g., real interest rate vs. nominal, quantity vs. price)?
4. **Equilibrium before/after** — are the pre- and post-shift equilibrium points
   correctly described as moving in the stated direction?
5. **Price/wage/rate direction** — does the question correctly state whether the
   price, wage, or interest rate rises or falls?
6. **Quantity/employment/investment direction** — likewise for the quantity-side
   variable.
7. **Capital-inflow curve: risk-shift vs. movement-along** — is a change in
   perceived risk (a shift) correctly distinguished from a change in the domestic
   interest rate itself (a movement along the curve)?
8. **Budget deficits and crowding out** — does a deficit increase correctly map to
   a *leftward* shift in the saving curve (not the investment curve), with the
   interest rate change read off a *movement along* the fixed investment demand
   curve?
9. **Technology and investment demand** — does a technology improvement correctly
   shift the *investment demand* curve right (not the saving curve)?
10. **Money supply vs. money demand** — under an open-market operation, does the
    money *supply* (vertical) curve shift, with money *demand* (downward-sloping)
    held fixed, and vice versa for demand-side shocks (real income, payment
    technology, risk)?
11. **Labor demand vs. labor supply** — is a productivity/output-price shock
    correctly identified as a demand-side shifter, and a population/participation
    change correctly identified as a supply-side shifter?
12. **Source framing match** — does the specific claim (e.g., "capital inflows
    mean more investment and lower interest rates," "excess liquidity pushes the
    rate to the floor") match the source's own stated framing, not just generic
    textbook intuition that might diverge from how this specific course teaches
    it?

## Diagram/rendering checks to perform

For each of the 10 diagram-bearing questions:

- Does the SVG's curve shape/position match the shift direction claimed in the
  question and explanations?
- Are axis labels and curve labels (S, D, I, Md, Ms, KI, etc.) correct and
  unambiguous?
- Where a shift is shown (original vs. dashed shifted curve), is the dashed curve
  actually positioned in the direction the explanation claims?
- Are equilibrium markers (E, E') positioned at the actual intersection of the
  drawn lines, not just visually "near" it?
- Does the `alt` text accurately and completely describe the diagram (axes,
  curves, shift, new equilibrium)?
- Is the visible caption (same text as `alt`) reasonably concise, not a wall of
  text?
- Does the SVG use the app's CSS custom properties (`var(--text)`,
  `var(--accent)`, `var(--good)`, `var(--text-muted)`) rather than hardcoded
  colors, so it adapts to light/dark mode?
- Would the label text remain legible at a ~340px-wide mobile rendering?

## High-risk areas flagged in advance

Based on the subtlety of the underlying economics, these clusters get the closest
scrutiny in this audit:

- **`graph-loanablefunds-004` and `graph-capitalflows-004`** — both are
  "identify the error in interpretation" questions built specifically around the
  movement-vs-shift distinction; these are the easiest place for a subtle logic
  slip to hide.
- **`graph-loanablefunds-006`** — combines two different determinants of
  investment cost (the interest rate, which is on-axis, and the price of capital
  goods, which is off-axis) in one question; higher chance of an inconsistent
  claim.
- **`graph-loanablefunds-007`, `graph-capitalflows-005`, `graph-capitalflows-006`**
  — the three questions connecting the loanable-funds diagram to the open-economy
  S + KI = I / NX + KI = 0 identities; these chain multiple causal steps together.
- **`graph-money-005`** — connects the required-reserve-ratio/money-multiplier
  formula to the money-supply curve's position; a formula-to-graph translation
  question, which is a newer, less-tested question pattern than a plain shift
  question.
- **`graph-monetarypolicy-001` / `-002`** — the interest-rate-corridor questions
  are grounded in the ECB guest lecture, a source with much less graph-specific
  language than Class 5; double-checking the "excess liquidity → floor" and
  "corridor vs. floor system" claims against the actual lecture notes is a
  priority.
- **All 10 diagram-bearing questions** — since the SVGs were hand-authored
  (coordinate math done once, not independently re-derived at authoring time
  beyond a single verification pass), re-checking that each shift's visual
  direction actually matches its accompanying text is a priority.

See `docs/update-notes/2026-07-11-graph-question-quality-audit-results.md` for the
outcome of this audit once complete.
