# Midterm Expansion Quality Audit — Results — 2026-07-12

Companion results doc to
`docs/update-notes/2026-07-12-midterm-expansion-quality-audit-plan.md`.
This audit covered exactly the 52 questions in `data/questions.json` whose
`id` begins with `midterm-var-` — no other question in the 340-question
bank was touched, including the 17 `*-examprep-*` midterm_review questions
(read-only reference material for this audit's comparisons).

## Counts audited

- **52 / 52 `midterm-var-*` questions audited** for source-fidelity,
  self-containment, non-verbatim/non-mad-libs wording, correctness,
  distractor defensibility, explanation fidelity, and fit for a study game.
- **27 / 27 formula questions** independently re-verified for arithmetic —
  both the correct answer and every numeric distractor — via a standalone
  script that recomputed each value directly from the *final* question text
  (not from any authoring notes), plus a second script that independently
  re-derived several results from scratch a second time.
- **7 / 7 graph questions** audited for curve identity, shift direction,
  and equilibrium-implication correctness, including a first-principles
  linear supply-and-demand derivation to verify the one genuinely novel
  comparative-statics claim in the batch (`midterm-var-loanable-005`'s
  claim that a vertical saving-supply curve produces a *larger* interest-
  rate response than an upward-sloping one to the same-sized shift).
- **15 / 15 standard and 3 / 3 vocab questions** checked for source
  grounding, distractor plausibility, and explanation quality.
- **52 / 52 questions** checked against the difficulty/topic/subtopic/tags
  rubric.
- **Systematic duplicate/mad-libs check**: beyond a manual clause-by-clause
  comparison against the raw source and all 17 `*-examprep-*` siblings, a
  standalone n-gram overlap script was run to find shared 7-word-or-longer
  phrases between every `midterm-var-*` question's full text (stem +
  choices + all explanations) and every other question in the batch and in
  the sibling set — this caught several near-verbatim explanation-text
  copies that a first manual pass had missed.

## Fixes made

**18 of 52 questions required a fix.** All were source-transformation
(non-verbatim wording) or labeling issues; **no arithmetic errors were
found anywhere in the batch** in either the correct answers or the numeric
distractors.

### Mad-libs / sentence-architecture fixes (8 full rewrites)

Despite already using fresh numbers per the pre-existing rule, these 8
questions had copied a sibling `*-examprep-*` question's own sentence
architecture (not the raw source's) nearly word-for-word — in several
cases the final one or two sentences of the question stem, and/or the
`correctExplanation`/`wrongExplanations`, were near-verbatim matches. Each
was rewritten with a restructured scenario, reordered clauses, and
independently reworded explanations, while preserving the exact same
tested concept, numbers, and correct answer:

1. `midterm-var-cpi-001` — question + all explanations rewritten (matched
   `formula-examprep-realrepayment-001`'s closing two sentences and a
   wrongExplanation nearly verbatim).
2. `midterm-var-gdp-001` — question + all explanations rewritten (matched
   `formula-examprep-valueadded-001`'s chain-narrative template and closing
   question sentence word-for-word).
3. `midterm-var-growth-001` — question + all explanations rewritten
   (matched `formula-examprep-productivitycounterfactual-001`'s entire
   template with only numbers/years swapped).
4. `midterm-var-growth-003` — question + all explanations rewritten
   (matched `formula-examprep-productivitycounterfactual-002`'s entire
   template with only numbers/years swapped).
5. `midterm-var-growth-006` — question + all explanations rewritten
   (matched `formula-examprep-realgdpgrowth-001`'s entire template with
   only numbers/years swapped).
6. `midterm-var-saving-007` — question + all explanations rewritten
   (matched `formula-examprep-nationalsaving-001`'s middle and closing
   sentences word-for-word).
7. `midterm-var-financialmarkets-001` — question + all explanations
   rewritten (matched `formula-examprep-stockpv-001`'s closing two
   sentences nearly word-for-word).
8. `midterm-var-capitalflows-002` — question, **choices**, and all
   explanations rewritten (matched `graph-examprep-foreignshock-001`'s
   scenario template, closing clause, and answer-choice wording/order
   closely enough that this was the most extensive rewrite in the batch).

### Mad-libs fixes requiring a second pass (5 questions)

The first fix pass for these questions addressed the flagged issue (a
dangling self-reference or a shared question-stem template) but, on the
subsequent n-gram overlap check, their `correctExplanation`/
`wrongExplanations` turned out to still be near-verbatim copies of the
sibling's explanation text — a distinct residual issue not caught by the
first manual pass. All five were fixed in a second, explicit rewrite of the
explanation fields:

9. `midterm-var-cpi-005` — `correctExplanation` had copied
   `formula-examprep-cpiindex-001`'s "Indexing scales a nominal amount by
   the ratio of the new price index to the old one:" clause verbatim;
   rewritten.
10. `midterm-var-saving-001` — one `wrongExplanations` entry ("This is just
    the size of the deficit, not the economy's...") was a near-verbatim
    match to `formula-examprep-closedeconomy-si-001`'s equivalent entry;
    reworded.
11. `midterm-var-loanable-006` — `correctExplanation` and all
    `wrongExplanations` were near-verbatim matches to
    `graph-examprep-verticalsaving-001`'s explanation text; rewritten.
12. `midterm-var-capitalflows-002` — a further explanation rewrite beyond
    the first-pass fix, after the n-gram check still found overlapping
    phrasing with `graph-examprep-foreignshock-001`.
13. `midterm-var-saving-009` — `correctExplanation` and all
    `wrongExplanations` were near-verbatim matches to
    `formula-examprep-nationalsaving-002`'s explanation text; rewritten.

### Lighter sentence-architecture softening (4 questions)

These shared an opening/closing template with a sibling but did not have
verbatim explanation-text copies; the question stem was restructured while
leaving arithmetic, choices, and explanations unchanged:

14. `midterm-var-saving-002` — shared opening template with `saving-001`,
    `saving-003`, and the sibling `formula-examprep-closedeconomy-si-001`.
15. `midterm-var-saving-003` — same shared-template family as above.
16. `midterm-var-gdp-006` — question restructured for template overlap
    with `formula-examprep-inventorysale-001` (this question's
    explanations were also caught in the second-pass fix, see above list —
    counted once here for its total fix scope).

(`midterm-var-cpi-005`'s question stem was also restructured in this
category before its explanations required the deeper second-pass fix
listed above.)

### Self-containment fixes (2 questions)

17. `midterm-var-gdp-003` — removed a literal "the five-firm coffee chain
    **above**" self-reference; the scenario is now fully restated within
    the question itself, since a student can reach any question
    individually via Shuffle Mixed Practice, Formula Practice, topic
    practice, etc., not just in the order questions happen to appear in
    `data/questions.json`.
18. `midterm-var-loanable-006` — removed a dangling "**Continuing** the
    vertical-saving-curve economy" opener that implied prior context never
    actually established within the question; it now states its own
    vertical-curve setup directly (this question's fix is also counted in
    the second-pass explanation-rewrite list above).

### Difficulty fix (1 question)

- `midterm-var-saving-001`: `difficulty` changed from `medium` to `hard`.
  This is a reverse-calculation question (given investment and the budget
  deficit, solve for private saving), and the stated difficulty rubric
  classifies reverse calculations as `hard`; every other reverse-calculation
  question in the batch was already correctly labeled `hard`, so this was
  the one inconsistency.

### Topic/subtopic fixes (2 questions)

- `midterm-var-loanable-002` and `midterm-var-loanable-003`: `topic`
  changed from `loanable-funds` to `saving-investment`, and `subtopic`
  changed to `"Saving Identities"` (matching the sibling `saving-007`/
  `saving-008`/`saving-009` questions). Both questions test only the
  private-saving and public-saving *formulas* directly (diagnosing a
  Y-C-vs-Y-T-C mistake and a G-T-vs-T-G sign-flip mistake) with no
  interest-rate, equilibrium, or investment-demand content — they fit
  `saving-investment`'s topic description ("private/public/national
  saving") more precisely than `loanable-funds`'s ("real interest rates,
  saving and investment equilibrium... crowding out, and investment-demand
  shifts").

### No fixes needed

The remaining 34 of 52 questions — including all 3 vocab questions, 5 of 7
graph questions, and the large majority of formula and standard
questions — were already correctly worded, correctly computed, correctly
labeled, and sufficiently distinct in scenario and sentence architecture
from both the raw source and every sibling question. No distractor was
found to be also defensible; no `questionType` was found to be
mislabeled (the "diagnose a mistake" question family's uniform use of
`questionType: "standard"` regardless of embedded-arithmetic complexity
was checked and confirmed to be a deliberate, consistent design choice
rather than an inconsistency — see the plan doc's high-risk-area notes).

## Duplicate/variant-quality audit

No exact duplicates were found. No `midterm-var-*` question was found to be
a near-duplicate of another `midterm-var-*` question (each family — e.g.,
the nine `saving-*`, eight `cpi-*`, or nine `loanable-*` questions — spans
genuinely distinct task types: compute, infer-missing-input, diagnose-
mistake, compare-cases, and graph-interpretation, per the plan's variant
taxonomy). The 18 fixes above resolved every case where a `midterm-var-*`
question was too similar to an *existing* `*-examprep-*` sibling; after
those fixes, the standalone n-gram overlap script's only remaining shared
phrases across the whole 52-question batch are short, necessary technical
phrases that precisely name a specific formula or identity (e.g., "what
happens to the equilibrium real interest rate and the level of
investment," which itself mirrors the source document's own practice-
problem phrasing: "State what happens to the equilibrium real interest
rate and quantity of investment") — not narrative sentence architecture,
and therefore not a violation.

## Questions added/removed

**None.** All 18 fixes were in-place rewrites of existing question content
(question text, choices, explanations, difficulty, topic, and/or subtopic
fields), preserving every original `midterm-var-*` question ID and
`sourceIds`/`sourceLabel`/`questionType`. The batch remains exactly 52
questions.

## Final counts

- Total questions: **340** (unchanged)
- `midterm-var-*` questions: **52** (unchanged)
- Midterm Review questions (`sourceIds` includes `midterm_review`): **69**
  (unchanged) — 38 formula, 18 standard, 9 graph, 4 vocab
- Vocabulary/definition questions: **42** (unchanged)
- Formula/quantitative questions: **78** (unchanged)
- Graph interpretation questions: **46** (unchanged), still **11** with an
  inline diagram
- Topics: **17** (unchanged)
- Sources: **13** (unchanged)
- `needsReview: true` count: **0** (unchanged — every issue found was
  resolvable via rewrite or relabeling; no question required the flag)

## Validation result

```
$ node scripts/validate-data.mjs
Checked 340 questions, 17 topics, 13 sources.
Vocabulary/definition questions: 42.
Formula/quantitative practice questions: 78.
Graph interpretation questions: 46 (11 with an inline diagram).
All checks passed with no errors or warnings.
```

See `docs/update-notes/2026-07-12-midterm-expansion-quality-audit-plan.md`
for the audit's scope, method, and advance risk flags. See
`docs/question-authoring-guide.md`'s expanded "mad-libs" section and
`docs/qa-checklist.md`'s new "shared-phrase check" item for the two
process improvements this audit produced.
