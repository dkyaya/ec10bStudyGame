# New Question Quality Audit Results — 2026-07-11

Companion to `docs/update-notes/2026-07-11-new-question-quality-audit-plan.md`.
Outcome of the focused quality audit over the 95 questions added by the same-day
"New Midterm Materials and Formula Practice Mode" update.

## Summary

- Questions audited: **95** (the full in-scope set: 20 `class6-*`, 22 `ecb-*`
  (`guest_lecture_ecb`), 8 `ds3-*`, 12 `quiz2-*`, 33 `formula-*`)
- Source-grounding fixes: **1** (`formula-supplydemand-002` tested an ungrounded
  concept — price ceilings/shortages are not covered in the cited `class1` source)
- Verbatim-wording fixes: **7** (`ds3-moneydemand-slope-001`, `ds3-fed-openmarket-001`,
  `quiz2-costofinvestment-001`, `quiz2-lowerrealrate-capitalflows-001`,
  `quiz2-ricardianequivalence-001`, `quiz2-capitalinflows-def-001`, and
  `ds3-fedresponse-liquidity-001`'s broken "scenario above" cross-reference)
- Arithmetic fixes: **0** (43 independent recomputations across all 40 formula-type
  in-scope questions found zero errors — the original arithmetic was correct)
- Correctness/ambiguity fixes: **1** (`ds3-fedresponse-liquidity-001`'s distractor D
  was also directionally correct, creating a two-correct-answer question)
- Wording/explanation fixes: included within the verbatim-wording rewrites above (no
  separate wording-only fixes were needed beyond those)
- Difficulty fixes: **2** (`class6-shadowbanking-001`, `class6-riskpremium-001`:
  `medium` → `easy`)
- `questionType` fixes: **6** (`ecb-target-001`, `ecb-coldprogression-001`,
  `ecb-debtdeflation-001`, `ecb-secondround-001`, `class6-reserveratio-001`,
  `class6-100pctreserve-001`: `standard` → `vocab`)
- Grounding-citation precision fixes: **1** (`formula-loanable-002`: added `class1`
  as a co-source for its linear-equation-solving technique)
- Minor scenario-naming fix: **1** (`formula-growth-003`: renamed "Poorland" to
  "Farland" to avoid reusing one of `ds2`'s own two example country names)
- Questions added: **1** (`class6-stocks-001`, filling a coverage gap — Class 6's
  stocks/dividends/capital-gains content had no dedicated question)
- Questions removed: **0**
- **Total distinct fixes applied: 19** (18 in-place fixes + 1 addition; several
  questions received more than one type of fix, e.g. a verbatim-wording rewrite that
  also touched wording quality)
- Final question count: **234** (was 233; +1 net)
- Final `needsReview` count: **0** (no in-scope question required the flag — every
  issue found was directly fixable)
- `node scripts/validate-data.mjs`: **0 errors, 0 warnings** on the final 234-question
  bank

## What was checked and how

- **Source grounding**: every `class6-*`/`ecb-*`/`ds3-*` question's tested concept
  was checked against a fresh re-extraction of the corresponding `.pptx`/`.pdf` text
  (not against memory of the prior session). `quiz2-*` questions were checked against
  the corrected Canvas Quiz 2 interpretation (see below) and standard course
  economics, since the underlying data table for one original quiz question is not
  recoverable. `formula-*` questions had their cited `sourceIds` checked against each
  source's actual `coverageSummary` and, where in doubt, against a fresh
  re-extraction (this caught the `formula-supplydemand-002` gap).
- **Arithmetic**: every formula-type in-scope question (40 total: 33 `formula-*` +
  5 `class6-*` + 2 `quiz2-*`) had its calculation independently recomputed in a fresh
  Python script (43 discrete checks), separate from the arithmetic verification done
  during the original authoring pass. Zero mismatches.
- **No-verbatim check**: every `ds3-*` and `quiz2-*` question's stem and all four
  choices were compared side-by-side against the actual extracted source PDF text
  (not just checked for "does this feel similar"). This is what caught the seven
  verbatim/near-verbatim issues — the most serious being `quiz2-capitalinflows-def-001`,
  a 100% verbatim copy of the original quiz question, which happened to be exactly
  the question meant to reinforce the user's missed "capital inflows" concept.
- **Distractor/explanation quality**: read every `wrongExplanations` entry for
  specificity and correctness; this surfaced the `ds3-fedresponse-liquidity-001`
  ambiguity (a distractor's own explanation admitted it was "directionally right,"
  which was the tell that it wasn't actually a clean wrong answer).
- **Difficulty/questionType**: compared each question's label against structurally
  similar sibling questions in the same batch and against the rubric/examples in
  `docs/question-authoring-guide.md`.
- **Topic/subtopic/tags**: reviewed for correctness and consistency; no topic
  reassignments were needed (all were already correctly assigned to `money-banking`,
  `financial-markets`, `monetary-policy`, or the reused existing topics).
- **Coverage/duplication**: clustered all 95 questions by concept within each source
  and topic; found good spread with no true near-duplicates (consistent with
  `validate-data.mjs`'s near-duplicate-text check passing with zero warnings both
  before and after this audit). The only concept concentration found (5 of 12
  `quiz2-*` questions touch capital flows) is intentional, per the task's explicit
  instruction to reinforce that missed concept. One coverage gap was found (Class 6's
  stocks/dividends/capital-gains content) and filled with one new question.

## Fix details by question

| Question ID | Fix type | What changed |
|---|---|---|
| `ds3-moneydemand-slope-001` | Verbatim wording | Rewrote stem and all choices — reused DS3 Q1's own answer-choice phrasing almost word-for-word |
| `ds3-fed-openmarket-001` | Verbatim wording | Rewrote stem and all choices — reused DS3 Q2's exact question stem and all four choices |
| `ds3-fedresponse-liquidity-001` | Correctness + self-containment | Distractor D was also a valid way to reach the stated goal (ambiguous two-correct-answer question); fixed to be unambiguously wrong. Also removed a broken "the scenario above" cross-reference |
| `quiz2-costofinvestment-001` | Verbatim wording | Rewrote — the four answer-choice pairings exactly matched the original quiz's own four choices |
| `quiz2-lowerrealrate-capitalflows-001` | Verbatim wording | Rewrote — stem and increase/decrease answer patterns closely mirrored the original quiz question |
| `quiz2-ricardianequivalence-001` | Verbatim wording | Rewrote stem — was an almost word-for-word copy of the original quiz question's descriptive clause |
| `quiz2-capitalinflows-def-001` | Verbatim wording (most severe) | Rewrote — was a 100% verbatim copy of the original quiz question's stem and all four choices |
| `formula-supplydemand-002` | Source grounding | Rewrote entirely — tested price ceilings/shortages, which are not covered anywhere in the cited `class1` source (confirmed via fresh re-extraction); replaced with a grounded supply-shift question |
| `formula-loanable-002` | Grounding-citation precision | Added `class1` to `sourceIds`/`sourceLabel` for the linear-equation-solving technique |
| `formula-growth-003` | Minor scenario-naming precaution | Renamed "Poorland" to "Farland" |
| `class6-shadowbanking-001` | Difficulty | `medium` → `easy` |
| `class6-riskpremium-001` | Difficulty | `medium` → `easy` |
| `ecb-target-001` | `questionType` | `standard` → `vocab` |
| `ecb-coldprogression-001` | `questionType` | `standard` → `vocab` |
| `ecb-debtdeflation-001` | `questionType` | `standard` → `vocab` |
| `ecb-secondround-001` | `questionType` | `standard` → `vocab` |
| `class6-reserveratio-001` | `questionType` | `standard` → `vocab` |
| `class6-100pctreserve-001` | `questionType` | `standard` → `vocab` |
| `class6-stocks-001` | Added (new) | Fills a coverage gap in Class 6's stocks content (dividends/capital gains) |

All other 76 in-scope questions were read against source text (and, where
applicable, had their arithmetic recomputed) and found to be accurate, well-grounded,
and appropriately labeled — no changes were needed.

## Validation and QA

- `node scripts/validate-data.mjs`: 234 questions, 17 topics, 12 sources, 38 vocab
  questions (was 32; +6 from the `questionType` reclassifications), 40 formula
  questions (unchanged — `formula-supplydemand-002`'s rewrite kept its type), **0
  errors, 0 warnings**.
- App load, Formula Practice mode, Vocabulary mode, and answer-choice shuffling were
  re-verified after the fixes — see the CHANGELOG entry for this audit for details.
