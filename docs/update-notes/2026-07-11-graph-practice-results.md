# Graph Practice Results — 2026-07-11

Companion to `docs/update-notes/2026-07-11-graph-practice-plan.md`. Outcome of
adding graph-interpretation/graph-translation questions and a Graph Practice mode.

## Summary

- Graph questions added: **37**
- Inline SVG diagrams added: **10** (original, hand-authored, theme-adaptive SVG
  markup; the remaining 27 graph questions are fully self-contained text-described
  graph situations — see the plan doc for why not every question needed a diagram)
- `needsReview` count among new questions: **0**
- Final question count: **271** (was 234 before this update)
- Final vocab count: **38** (unchanged by this update)
- Final formula count: **40** (unchanged by this update)
- Final graph count: **37** (new)
- Topics: **17** (unchanged — no new topics created)
- Sources: **12** (unchanged — every graph question cites an existing source)
- `node scripts/validate-data.mjs`: **0 errors, 0 warnings** on the final
  271-question bank

## Graph questions by topic

| Topic | Count | IDs |
|---|---|---|
| `loanable-funds` | 8 | `graph-loanablefunds-001` through `-008` |
| `capital-flows` | 6 | `graph-capitalflows-001` through `-006` |
| `money-banking` | 5 | `graph-money-001` through `-005` |
| `comparative-advantage-trade` | 4 | `graph-ppc-001` through `-004` |
| `supply-demand-equilibrium` | 4 | `graph-supplydemand-001` through `-004` |
| `labor-markets` | 4 | `graph-labor-001` through `-004` |
| `inequality-globalization-sbtc` | 2 | `graph-labor-005`, `graph-labor-006` |
| `monetary-policy` | 2 | `graph-monetarypolicy-001`, `graph-monetarypolicy-002` |
| `economic-growth` | 1 | `graph-growth-001` |
| `growth-accounting-compound-growth` | 1 | `graph-growth-002` |
| **Total** | **37** | |

Combining the two PPC/supply-demand topics (8) and the two labor-market topics (6),
this matches the plan's targets: 8 PPC/supply-demand (target 6-8), 6 labor market
(target 5-7), 8 loanable funds (target 7-10), 6 capital flows (target 5-8), 7
money/monetary policy combined (target 5-8), and 2 optional growth questions
(target 2-4, used the low end since Class 4 has limited extractable graph content
— see the plan doc).

## Graph questions by source

| Source | Count |
|---|---|
| `class5` | 14 (all `loanable-funds` and `capital-flows` questions) |
| `class1` | 7 (all `graph-ppc-*` and `graph-supplydemand-*`, some jointly with `ds1`) |
| `ds3` | 4 (all `graph-money-001` through `-004`, one jointly with `class6`) |
| `class3` | 6 (all `graph-labor-*`, some jointly with `ds2`) |
| `ds1` | 2 (joint with `class1`: `graph-ppc-003`, `graph-supplydemand-002`) |
| `ds2` | 1 (joint with `class3`: `graph-labor-004`) |
| `class6` | 1 (joint with `ds3`: `graph-money-005`) |
| `guest_lecture_ecb` | 2 (both `graph-monetarypolicy-*`) |
| `class4` | 2 (both optional growth questions) |

(Counts overlap where a question cites two sources jointly, e.g. a concept from one
source combined with a technique or worked-example convention from another.)

## Diagrams added

10 original SVG diagrams, one per representative "read the base diagram" or "read a
shift" question across each topic area:

| Question ID | Diagram |
|---|---|
| `graph-ppc-001` | PPC with an efficient point A, an inefficient point B, and an unattainable point C |
| `graph-supplydemand-001` | Basic supply/demand equilibrium (D, S, E, P*, Q*) |
| `graph-supplydemand-004` | Both demand and supply shift right (asymmetric), E to E' |
| `graph-labor-003` | Labor demand shifts right, supply fixed, E to E' |
| `graph-loanablefunds-002` | Saving shifts left (budget deficit), investment demand fixed |
| `graph-loanablefunds-003` | Investment demand shifts right (technology), saving fixed |
| `graph-capitalflows-001` | Basic upward-sloping capital-inflow curve |
| `graph-capitalflows-002` | Capital-inflow curve shifts left (risk increase) |
| `graph-money-001` | Basic money market (downward Md, vertical Ms) |
| `graph-money-002` | Money supply shifts right (Fed open-market purchase), E to E' |

Each diagram is implemented via the new `diagram` field (`{ type: "svg", alt,
svg }`), validated by both `src/data.js` and `scripts/validate-data.mjs`, and
rendered by `src/render.js` in a `<figure role="img" aria-label="...">` with a
visible `<figcaption>` repeating the alt text. All strokes use the app's CSS custom
properties (`var(--text)`, `var(--accent)`, `var(--good)`, `var(--text-muted)`) so
diagrams automatically match light/dark mode. SVGs have no fixed width/height
attribute — sizing comes entirely from `.diagram-svg-wrap svg { width: 100%; height:
auto; max-width: 340px }` in `styles/main.css`, so they scale responsively on
mobile.

## Skipped or excluded graph content

- **Class 4's chart-only slides** (real GDP per person/growth charts, aggregate
  production function diagrams, poverty-trap/institutions charts) — these are
  picture-only slides with no extractable axis/curve data; not used as the basis
  for any question. The 2 Class 4 questions that WERE added (diminishing returns to
  capital's shape, compound growth's accelerating divergence) are grounded in
  explicit, unambiguous verbal descriptions in the slide text instead of an
  extracted diagram.
- **Bond pricing "graphs"** (Class 6 slides 18-19) — these are worked numeric
  tables (already covered by the existing `class6-bondprice-001` formula question),
  not axis-labeled curve-shift diagrams; not re-treated as graph content.
- **Reserve ratio / money multiplier as a standalone "graph"** — this is a formula
  relationship (reserves × multiplier), not a curve-shift diagram on its own; the
  one question that does touch the reserve ratio (`graph-money-005`) frames it
  correctly as a shift of the vertical money-supply LINE (a genuine graph question),
  not as a graph of the multiplier itself.
- **All chart/photo-only slides across every deck** (FRED/BEA economic data charts,
  the Piketty inequality chart, debt-to-GDP-by-country chart, executive-
  compensation charts, etc.) — no extractable axis/curve data in any of these; none
  were used, consistent with how chart-only content has been excluded from every
  prior update.
- **Guest lecture content beyond the interest rate corridor** — the ECB guest
  lecture's other content (money functions, mandate, QE/QT mechanics, digital euro)
  is institutional/conceptual rather than graph-based; only the corridor concept
  (explicitly described with a ceiling/floor/center-of-corridor structure) was
  treated as graph content, per the plan's "only if clearly taught and suitable"
  guidance.

No graph question required a `needsReview` flag — every question's curve shape,
shift direction, and equilibrium outcome was checked against either an explicit
diagram description in the source slides/solutions or an unambiguous verbal
description of the underlying relationship.

## Validation and QA

- `node scripts/validate-data.mjs`: 271 questions, 17 topics, 12 sources, 38 vocab,
  40 formula, 37 graph (10 with an inline diagram), **0 errors, 0 warnings**.
- See the CHANGELOG entry for this update for the full app-load and playtest
  verification (Graph Practice mode card and count, Graph badge, diagram rendering
  and mobile responsiveness, answer-choice shuffling with graph questions, and
  regression checks on Vocabulary/Formula modes).
