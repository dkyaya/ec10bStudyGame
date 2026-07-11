# New Materials Results — 2026-07-11

Companion to `docs/update-notes/2026-07-11-new-materials-plan.md`. Actual outcome of
the 2026-07-11 update: new midterm-prep materials, Formula Practice mode, and
additional formula/quantitative word problems.

## Summary

- Starting question count: 138
- New questions added: 95 (62 new source-ingestion questions + 33 dedicated
  formula-practice questions from Part G)
- Final question count: 233
- New sources added: 4 (`class6`, `guest_lecture_ecb`, `ds3`, `quiz2`)
- New topics added: 3 (`money-banking`, `financial-markets`, `monetary-policy`)
- Total topics: 17 (was 14)
- Total sources: 12 (was 8)
- Vocabulary (`questionType: "vocab"`) questions: 32 (was 21; +11 new)
- Formula (`questionType: "formula"`) questions: 40 (was 0; all new — 7 generated
  naturally from new-material sources, 33 from the dedicated Part G batch)
- `needsReview: true` questions: 0 (unchanged — no new question required the flag)
- `node scripts/validate-data.mjs`: **0 errors, 0 warnings** on the final 233-question
  bank

## Source-to-question audit table

### `class6` — `HarvardS10b_Class6_7.pptx`

- Questions generated: 20 (12 `money-banking`, 8 `financial-markets`)
- Vocab questions: 2 (`class6-money-uses-001`, `class6-diversification-001`)
- Formula questions: 5 (`class6-moneymultiplier-001`, `class6-quantityequation-001`,
  `class6-pv-001`, `class6-bondprice-001`, `class6-riskpremium-001`)
- `needsReview`: 0
- Question IDs: `class6-money-def-001`, `class6-money-uses-001`,
  `class6-reserveratio-001`, `class6-100pctreserve-001`,
  `class6-moneymultiplier-001`, `class6-quantityequation-001`,
  `class6-quantityequation-longrun-001`, `class6-bankingpanics-001`,
  `class6-shadowbanking-001`, `class6-financialintermediation-001`,
  `class6-selffinance-001`, `class6-m1m2-001`, `class6-pv-001`,
  `class6-bondprice-001`, `class6-coupon-determinants-001`,
  `class6-municipalbonds-001`, `class6-riskpremium-001`, `class6-emh-001`,
  `class6-diversification-001`, `class6-financialmarkets-role-001`
- Skipped/uncertain material: slide 28's 2007-9 financial-crisis term list
  (leverage, securitization, MBS, CDOs, CDS, shadow banking, counterparty/systemic
  risk) has no accompanying definitions in this deck, so it was not used to write
  definition questions. Slides 22, 25, and 27 (title-only or link-only) were also
  excluded. See `docs/source-notes.md` for full detail.

### `guest_lecture_ecb` — `Guest Lecture Slides - Price Stability and Monetary Policy.pptx`

- Questions generated: 22 (all `monetary-policy`)
- Vocab questions: 4 (`ecb-money-functions-001`, `ecb-m1m2m3-001`, `ecb-mandate-001`,
  `ecb-monetarybase-001`)
- Formula questions: 0 (this deck's content is conceptual/institutional, not
  calculation-based)
- `needsReview`: 0
- Question IDs: `ecb-money-functions-001`, `ecb-money-statebacking-001`,
  `ecb-m1m2m3-001`, `ecb-loanscreatedeposits-001`, `ecb-loanscreatedeposits-002`,
  `ecb-mandate-001`, `ecb-target-001`, `ecb-why2pct-001`, `ecb-coldprogression-001`,
  `ecb-inflationredistribution-001`, `ecb-inflationriskpremium-001`,
  `ecb-debtdeflation-001`, `ecb-deflationaryspiral-001`, `ecb-secondround-001`,
  `ecb-lookthrough-001`, `ecb-whybanksneedreserves-001`, `ecb-monetarybase-001`,
  `ecb-reserveinjection-001`, `ecb-overnightrate-control-001`, `ecb-corridor-001`,
  `ecb-qeqt-001`, `ecb-digitaleuro-001`
- Skipped/uncertain material: the cover photo (slide 1), the ECB Governing Council
  photo (slide 10), and the repeated "Contents" section-divider slides had no
  substantive content and were not used.

### `ds3` — `DS3.pdf` + `DS3_solutions.pdf` (paired)

- Questions generated: 8 (all `money-banking`)
- Vocab questions: 0
- Formula questions: 0 (this discussion sheet is conceptual/graphical — shifts vs.
  movements along a curve — not a calculation set)
- `needsReview`: 0
- Question IDs: `ds3-moneydemand-slope-001`, `ds3-fed-openmarket-001`,
  `ds3-fed-reserveratio-001`, `ds3-shift-vs-movement-001`,
  `ds3-shifter-realincome-001`, `ds3-mobilepayments-scenario-001`,
  `ds3-fedresponse-liquidity-001`, `ds3-riskyassets-scenario-001`
- Skipped/uncertain material: none — all four DS3 question items (including
  Exercise 12.7's three sub-parts) were used; the sheet is short, so the question
  count was kept proportionate rather than padded.

### `quiz2` — `Quiz 2_ Principles of Economics_ Macroeconomics.pdf`

- Questions generated: 12 (reusing existing topics: `capital-flows`,
  `saving-investment`, `sources-of-growth`, `loanable-funds` — no new topic needed)
- Vocab questions: 5 (`quiz2-lifecycle-saving-001`, `quiz2-crowdingout-001`,
  `quiz2-ricardianequivalence-001`, `quiz2-capitalinflows-def-001`,
  `quiz2-capitaloutflows-def-001`)
- Formula questions: 2 (`quiz2-openeconomy-savinginvestment-001`,
  `quiz2-privatepublicnational-saving-001`)
- `needsReview`: 0
- Question IDs: `quiz2-openeconomy-savinginvestment-001`,
  `quiz2-privatepublicnational-saving-001`, `quiz2-debtpaydown-wealth-001`,
  `quiz2-lifecycle-saving-001`, `quiz2-ussr-growth-001`, `quiz2-crowdingout-001`,
  `quiz2-costofinvestment-001`, `quiz2-lowerrealrate-capitalflows-001`,
  `quiz2-ricardianequivalence-001`, `quiz2-capitalinflows-def-001`,
  `quiz2-capitaloutflows-def-001`, `quiz2-capitalinflows-vs-exports-001`
- Skipped/uncertain material: Question 2's income/spending data table did not
  extract as text (rendered as an image); `quiz2-privatepublicnational-saving-001`
  uses a freshly constructed numeric scenario testing the same identities instead.
  See the Canvas Quiz 2 interpretation note in `docs/source-notes.md` for how the
  misleading result-label layout and the missing table were both handled.

## Formula Practice batch (Part G) — grounded in existing sources only

- Questions generated: 33, all `questionType: "formula"`, IDs prefixed `formula-`
- Difficulty mix: 11 easy, 16 medium, 6 hard
- Topics covered: `econ-analysis-basics`, `comparative-advantage-trade`,
  `supply-demand-equilibrium`, `gdp-accounting`, `gdp-cpi-inflation`,
  `saving-investment`, `loanable-funds`, `capital-flows`,
  `productivity-real-wages`, `growth-accounting-compound-growth`, `labor-markets`
- Source grounding: `class1`, `class2`, `class3`, `class4`, `class5`, `ds1`, `ds2`,
  `ps1_solutions` — all pre-existing sources, cited only because they teach the
  formula being tested; every question uses fresh numbers/scenarios, never a
  source's own worked-example figures
- `needsReview`: 0
- Every arithmetic answer (and every numeric distractor) was independently
  recomputed and checked against the stated correct answer before merging into
  `data/questions.json` — see the verification pass described in this update's
  commit history / conversation log
- Question IDs: `formula-oppcost-001`, `formula-oppcost-002`, `formula-ppc-001`,
  `formula-ppc-002`, `formula-supplydemand-001`, `formula-supplydemand-002`,
  `formula-gdp-001`, `formula-gdp-002`, `formula-gdp-003`, `formula-cpi-001`,
  `formula-cpi-002`, `formula-deflate-001`, `formula-index-001`,
  `formula-realint-001`, `formula-realint-002`, `formula-saving-001`,
  `formula-saving-002`, `formula-saving-003`, `formula-saving-004`,
  `formula-wealth-001`, `formula-wealth-002`, `formula-usercost-001`,
  `formula-loanable-001`, `formula-loanable-002`, `formula-openecon-001`,
  `formula-openecon-002`, `formula-laborprod-001`, `formula-gdppercapita-001`,
  `formula-growth-001`, `formula-growth-002`, `formula-growth-003`,
  `formula-vmp-001`, `formula-vmp-002`

## All 40 `questionType: "formula"` questions (combined)

7 came from new-material sources (5 `class6`, 2 `quiz2`) plus the 33 in the
dedicated Part G batch above = 40 total. Full list: `class6-moneymultiplier-001`,
`class6-quantityequation-001`, `class6-pv-001`, `class6-bondprice-001`,
`class6-riskpremium-001`, `quiz2-openeconomy-savinginvestment-001`,
`quiz2-privatepublicnational-saving-001`, plus all 33 `formula-*` IDs listed above.

## Skipped or excluded material (all sources)

- `private-materials/README.local.md` and `.DS_Store` — not course content, excluded
  from consideration entirely (see the planning note).
- `class6` slide 28's undefined crisis-term list, and slides 22/25/27
  (title-only/link-only) — excluded, documented in `docs/source-notes.md`.
- `guest_lecture_ecb` slides 1, 10, and the repeated "Contents" dividers — excluded
  (no substantive content).
- `quiz2` Question 2's data table — inaccessible (image), worked around with a fresh
  scenario testing the same identities rather than skipped entirely.

No file and no question required a `needsReview: true` flag in this update.
