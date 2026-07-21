const Render = (() => {
  const STATUS_LABELS = {
    "not-started": "Not Started",
    "in-progress": "In Progress",
    "needs-review": "Needs Review",
    strong: "Strong",
    mastered: "Mastered",
  };

  function renderHomeSummary(container, questions, weakestTopic) {
    container.innerHTML = "";
    const progress = Scoring.overallProgress(questions);

    const totalCard = Utils.el("div", "stat-card");
    totalCard.appendChild(Utils.el("div", "stat-value", String(progress.total)));
    totalCard.appendChild(Utils.el("div", "stat-label", "Total Questions"));

    const attemptedCard = Utils.el("div", "stat-card");
    attemptedCard.appendChild(Utils.el("div", "stat-value", String(progress.attempted)));
    attemptedCard.appendChild(Utils.el("div", "stat-label", "Attempted"));

    const accuracyCard = Utils.el("div", "stat-card");
    accuracyCard.appendChild(
      Utils.el("div", "stat-value", progress.attempted ? `${progress.accuracy}%` : "—")
    );
    accuracyCard.appendChild(Utils.el("div", "stat-label", "Accuracy"));

    const weakCard = Utils.el("div", "stat-card stat-card-weak");
    weakCard.appendChild(
      Utils.el("div", "stat-value stat-value-small", weakestTopic ? weakestTopic.topic.name : "—")
    );
    weakCard.appendChild(Utils.el("div", "stat-label", "Weakest Topic"));

    [totalCard, attemptedCard, accuracyCard, weakCard].forEach((c) => container.appendChild(c));
  }

  function renderWeakestBanner(container, weakestTopic) {
    container.innerHTML = "";
    if (!weakestTopic) {
      container.hidden = true;
      return;
    }
    container.hidden = false;
    container.appendChild(Utils.el("span", "weakest-banner-icon", "▲"));
    container.appendChild(
      Utils.el(
        "span",
        "weakest-banner-text",
        `Keep an eye on "${weakestTopic.topic.name}" — ${weakestTopic.accuracy}% accuracy so far.`
      )
    );
  }

  function renderContinueButton(button, action) {
    button.textContent = `Continue Studying · ${action.label} (${action.count})`;
    button.disabled = action.count === 0;
  }

  function buildModeList(questions, hasNeedsReview) {
    const missed = Scoring.missedQuestions(questions).length;
    const unseen = Scoring.unseenQuestions(questions).length;
    const needsReviewCount = Scoring.needsReviewQuestions(questions).length;
    const vocabCount = Scoring.vocabQuestions(questions).length;
    const formulaCount = Scoring.formulaQuestions(questions).length;
    const graphCount = Scoring.graphQuestions(questions).length;

    const modes = [
      {
        key: "full",
        title: "Full Bank",
        desc: "Every question in the bank, start to finish.",
        count: questions.length,
        disabled: questions.length === 0,
      },
      {
        key: "shuffle",
        title: "Shuffle Mixed Practice",
        desc: "A random mix pulled from every topic — great for testing overall recall.",
        count: questions.length,
        hasLengthSelector: true,
        disabled: questions.length === 0,
      },
      {
        key: "missed",
        title: "Review Missed",
        desc: "Only the questions you've gotten wrong so far.",
        count: missed,
        disabled: missed === 0,
      },
      {
        key: "unseen",
        title: "New / Unseen",
        desc: "Questions you haven't tried yet.",
        count: unseen,
        disabled: unseen === 0,
      },
    ];

    if (vocabCount > 0) {
      modes.push({
        key: "vocab",
        title: "Vocabulary / Definitions",
        desc: "Term- and definition-focused questions, shuffled — great for drilling key vocabulary.",
        count: vocabCount,
      });
    }

    if (formulaCount > 0) {
      modes.push({
        key: "formula",
        title: "Formula Practice",
        desc: "Calculation and word-problem questions, shuffled — practice the formulas taught so far.",
        count: formulaCount,
      });
    }

    if (graphCount > 0) {
      modes.push({
        key: "graph",
        title: "Graph Practice",
        desc: "Graph-reading, shift, and interpretation questions, shuffled — practice translating between graphs and economic stories.",
        count: graphCount,
      });
    }

    if (hasNeedsReview) {
      modes.push({
        key: "needsReview",
        title: "Needs Review",
        desc: "Flagged by the question bank as needing a closer look.",
        count: needsReviewCount,
        disabled: needsReviewCount === 0,
      });
    }

    return modes;
  }

  function renderStudyModeCards(container, questions, hasNeedsReview, recommendedMode, sessionLength, onSelect) {
    container.innerHTML = "";
    const modes = buildModeList(questions, hasNeedsReview);

    modes.forEach((mode) => {
      const classes = ["mode-card"];
      if (mode.disabled) classes.push("mode-card-disabled");
      if (mode.key === recommendedMode) classes.push("mode-card-recommended");
      const card = Utils.el("div", classes.join(" "));

      if (mode.key === recommendedMode) {
        card.appendChild(Utils.el("span", "mode-card-badge", "Recommended"));
      }

      card.appendChild(Utils.el("h3", "mode-card-title", mode.title));
      card.appendChild(Utils.el("p", "mode-card-desc", mode.desc));
      card.appendChild(
        Utils.el("span", "mode-card-count", `${mode.count} question${mode.count === 1 ? "" : "s"}`)
      );

      if (mode.hasLengthSelector) {
        const lenRow = Utils.el("div", "length-row");
        lenRow.setAttribute("role", "group");
        lenRow.setAttribute("aria-label", "Session length");
        [
          ["10", 10],
          ["20", 20],
          ["All", "all"],
        ].forEach(([label, value]) => {
          const isActive = sessionLength === value;
          const lenBtn = Utils.el("button", `length-btn${isActive ? " length-btn-active" : ""}`, label);
          lenBtn.type = "button";
          lenBtn.setAttribute("aria-pressed", String(isActive));
          lenBtn.addEventListener("click", (evt) => {
            evt.stopPropagation();
            onSelect("setSessionLength", value);
          });
          lenRow.appendChild(lenBtn);
        });
        card.appendChild(lenRow);
      }

      const btn = Utils.el("button", "btn btn-mode-action", mode.disabled ? "Nothing here yet" : "Start");
      btn.disabled = mode.disabled;
      if (!mode.disabled) btn.addEventListener("click", () => onSelect(mode.key));
      card.appendChild(btn);

      container.appendChild(card);
    });
  }

  function renderFocusNext(container, weakTopics, onDrill) {
    container.innerHTML = "";
    weakTopics.forEach((tp) => {
      const card = Utils.el("div", "focus-card");
      card.appendChild(Utils.el("h4", "focus-card-name", tp.topic.name));
      card.appendChild(
        Utils.el("p", "focus-card-stat", `${tp.accuracy}% accuracy · ${tp.missed} missed`)
      );
      const btn = Utils.el("button", "btn btn-secondary", "Drill this topic");
      btn.addEventListener("click", () => onDrill(tp.topic.id));
      card.appendChild(btn);
      container.appendChild(card);
    });
  }

  function renderStatusBadge(status) {
    return Utils.el("span", `status-badge status-${status}`, STATUS_LABELS[status] || status);
  }

  function renderTopicCards(container, questions, topics, onPractice, onReviewMissed) {
    container.innerHTML = "";
    const progressList = Scoring.topicProgress(questions, topics);

    progressList.forEach((tp) => {
      const card = Utils.el("div", "topic-card");

      const header = Utils.el("div", "topic-card-header");
      header.appendChild(Utils.el("h3", "topic-card-name", tp.topic.name));
      header.appendChild(renderStatusBadge(tp.status));
      card.appendChild(header);

      if (tp.topic.description) {
        card.appendChild(Utils.el("p", "topic-card-desc", tp.topic.description));
      }

      const meta = Utils.el("div", "topic-card-meta");
      meta.appendChild(Utils.el("span", null, `${tp.total} questions`));
      meta.appendChild(Utils.el("span", null, `${tp.attempted} attempted`));
      meta.appendChild(
        Utils.el("span", null, tp.accuracy !== null ? `${tp.accuracy}% accuracy` : "No attempts yet")
      );
      if (tp.missed > 0) {
        meta.appendChild(Utils.el("span", "topic-card-missed-chip", `${tp.missed} missed`));
      }
      card.appendChild(meta);

      const barTrack = Utils.el("div", "progress-bar-track");
      const barFill = Utils.el("div", "progress-bar-fill");
      barFill.style.width = `${Utils.pct(tp.attempted, tp.total)}%`;
      barTrack.appendChild(barFill);
      card.appendChild(barTrack);

      const actions = Utils.el("div", "topic-card-actions");
      const practiceBtn = Utils.el("button", "btn btn-secondary", "Practice Topic");
      practiceBtn.addEventListener("click", () => onPractice(tp.topic.id));
      actions.appendChild(practiceBtn);

      const missedBtn = Utils.el("button", "btn btn-outline", "Review Missed");
      missedBtn.disabled = tp.missed === 0;
      if (tp.missed > 0) missedBtn.addEventListener("click", () => onReviewMissed(tp.topic.id));
      actions.appendChild(missedBtn);

      card.appendChild(actions);
      container.appendChild(card);
    });
  }

  function renderQuizProgress(fillEl, index, total) {
    fillEl.style.width = `${Utils.pct(index + 1, total)}%`;
  }

  function renderQuizMeta(container, question, index, total, topicLabel) {
    container.innerHTML = "";
    const topicName = Utils.el("span", "meta-topic", topicLabel || question.topic);
    const sub = Utils.el("span", "meta-sub", question.subtopic);
    const diff = Utils.el(
      "span",
      `meta-diff meta-diff-${question.difficulty}`,
      question.difficulty
    );
    const source = Utils.el("span", "meta-source", question.sourceLabel);
    const progress = Utils.el("span", "meta-progress", `Question ${index + 1} of ${total}`);
    const nodes = [topicName, sub, diff, source, progress];
    if (question.questionType === "vocab") {
      nodes.push(Utils.el("span", "meta-vocab-badge", "Vocab"));
    }
    if (question.questionType === "formula") {
      nodes.push(Utils.el("span", "meta-formula-badge", "Formula"));
    }
    if (question.questionType === "graph") {
      nodes.push(Utils.el("span", "meta-graph-badge", "Graph"));
    }
    nodes.forEach((n) => container.appendChild(n));
  }

  function renderQuizDiagram(container, diagram) {
    container.innerHTML = "";
    if (!diagram || diagram.type !== "svg" || !diagram.svg) {
      container.hidden = true;
      return;
    }
    container.hidden = false;
    const figure = Utils.el("figure", "diagram-figure");
    figure.setAttribute("role", "img");
    figure.setAttribute("aria-label", diagram.alt || "Diagram");
    const wrap = Utils.el("div", "diagram-svg-wrap");
    wrap.innerHTML = diagram.svg;
    figure.appendChild(wrap);
    if (diagram.alt) {
      figure.appendChild(Utils.el("figcaption", "diagram-caption", diagram.alt));
    }
    container.appendChild(figure);
  }

  function renderQuizQuestion(elements, question, savedAnswerIndex, onAnswer) {
    renderQuizDiagram(elements.diagram, question.diagram);
    elements.questionText.textContent = question.question;
    elements.choicesContainer.innerHTML = "";
    elements.feedback.hidden = true;
    elements.feedback.innerHTML = "";

    const answered = savedAnswerIndex !== null && savedAnswerIndex !== undefined;

    question.choices.forEach((choiceText, i) => {
      const btn = Utils.el("button", "choice-btn", choiceText);
      btn.dataset.index = String(i);

      if (answered) {
        btn.disabled = true;
        if (i === question.answerIndex) {
          btn.classList.add("correct");
          btn.appendChild(Utils.el("span", "choice-icon", " ✓"));
        } else if (i === savedAnswerIndex) {
          btn.classList.add("incorrect");
          btn.appendChild(Utils.el("span", "choice-icon", " ✕"));
        } else {
          btn.classList.add("choice-btn-disabled-other");
        }
        if (i === savedAnswerIndex) btn.classList.add("choice-btn-selected");
      } else {
        btn.addEventListener("click", () => onAnswer(i));
      }
      elements.choicesContainer.appendChild(btn);
    });

    if (answered) {
      showFeedback(elements, question, savedAnswerIndex);
    }
  }

  function showFeedback(elements, question, answerIndex) {
    elements.feedback.hidden = false;
    elements.feedback.innerHTML = "";

    const correct = answerIndex === question.answerIndex;
    const banner = Utils.el(
      "div",
      `feedback-banner ${correct ? "feedback-correct" : "feedback-incorrect"}`,
      correct ? "✓ Correct!" : "✕ Not quite."
    );
    elements.feedback.appendChild(banner);

    const correctBlock = Utils.el("div", "feedback-block feedback-block-correct");
    correctBlock.appendChild(Utils.el("p", "feedback-heading", "Why the correct answer is right"));
    correctBlock.appendChild(
      Utils.el("p", "feedback-label", question.choices[question.answerIndex])
    );
    correctBlock.appendChild(Utils.el("p", "feedback-text", question.correctExplanation));
    elements.feedback.appendChild(correctBlock);

    const wrongWrap = Utils.el("div", "feedback-block feedback-block-wrong-group");
    wrongWrap.appendChild(Utils.el("p", "feedback-heading", "Why the other answers are wrong"));
    question.wrongExplanations.forEach((exp, i) => {
      if (i === question.answerIndex) return;
      const row = Utils.el("div", "feedback-wrong-row");
      row.appendChild(Utils.el("p", "feedback-label", question.choices[i]));
      row.appendChild(Utils.el("p", "feedback-text", exp));
      wrongWrap.appendChild(row);
    });
    elements.feedback.appendChild(wrongWrap);
  }

  function scoreMessage(accuracy) {
    if (accuracy === 100) return "Perfect score! You've fully mastered this set.";
    if (accuracy >= 90) return "Excellent work — you're very close to mastery.";
    if (accuracy >= 70) return "Solid effort. A bit more practice and this set will be locked in.";
    if (accuracy >= 50) return "Good start. Review the misses below and give it another pass.";
    return "Keep going — reading the explanations below will help a lot next time.";
  }

  function renderResults(container, sessionQuestions, topics, callbacks) {
    container.innerHTML = "";

    let correctCount = 0;
    sessionQuestions.forEach((q) => {
      const stat = Storage.getQuestionStat(q.id);
      if (stat && stat.lastCorrect) correctCount += 1;
    });
    const total = sessionQuestions.length;
    const accuracy = Utils.pct(correctCount, total);

    const scoreBlock = Utils.el("div", "results-score");
    scoreBlock.appendChild(Utils.el("div", "results-score-value", `${correctCount} / ${total}`));
    scoreBlock.appendChild(Utils.el("div", "results-score-pct", `${accuracy}% correct`));
    scoreBlock.appendChild(Utils.el("div", "results-score-message", scoreMessage(accuracy)));
    container.appendChild(scoreBlock);

    const topicIdsInSession = new Set(sessionQuestions.map((q) => q.topic));
    const relevantTopics = topics.filter((t) => topicIdsInSession.has(t.id));
    const tpList = Scoring.topicProgress(sessionQuestions, relevantTopics);

    const topicBreakdown = Utils.el("div", "results-section");
    topicBreakdown.appendChild(Utils.el("h3", null, "Topic Breakdown"));
    tpList.forEach((tp) => {
      const row = Utils.el("div", "results-topic-row");
      row.appendChild(Utils.el("span", "results-topic-name", tp.topic.name));
      row.appendChild(
        Utils.el(
          "span",
          "results-topic-stat",
          `${tp.correct}/${tp.attempted} (${tp.accuracy !== null ? tp.accuracy + "%" : "—"})`
        )
      );
      topicBreakdown.appendChild(row);
    });
    container.appendChild(topicBreakdown);

    const missed = sessionQuestions.filter((q) => {
      const stat = Storage.getQuestionStat(q.id);
      return stat && stat.lastCorrect === false;
    });

    if (missed.length > 0) {
      const missedBlock = Utils.el("div", "results-section");
      missedBlock.appendChild(Utils.el("h3", null, `Missed Questions (${missed.length})`));
      const grouped = Scoring.groupQuestionsByTopic(missed, topics);
      grouped.forEach((group) => {
        missedBlock.appendChild(Utils.el("p", "results-missed-topic-name", group.topic.name));
        group.questions.forEach((q) => {
          missedBlock.appendChild(Utils.el("div", "results-missed-item", q.question));
        });
      });
      container.appendChild(missedBlock);
    }

    const nextAction = Scoring.recommendedNextAction(sessionQuestions, tpList);
    const recBlock = Utils.el("div", "results-recommendation");
    recBlock.appendChild(Utils.el("span", "results-recommendation-label", "Suggested next step"));
    recBlock.appendChild(Utils.el("span", "results-recommendation-text", nextAction.label));
    container.appendChild(recBlock);

    const actionsRow = Utils.el("div", "results-actions");
    if (missed.length > 0) {
      const reviewBtn = Utils.el("button", "btn btn-primary", "Review Missed");
      reviewBtn.addEventListener("click", () => callbacks.onReviewMissed(missed));
      actionsRow.appendChild(reviewBtn);
    }
    const shuffleBtn = Utils.el("button", "btn btn-secondary", "Shuffle Mixed Practice");
    shuffleBtn.addEventListener("click", () => callbacks.onShuffle());
    actionsRow.appendChild(shuffleBtn);

    const homeBtn = Utils.el("button", "btn btn-text", "Back to Topic Dashboard");
    homeBtn.addEventListener("click", () => callbacks.onBackHome());
    actionsRow.appendChild(homeBtn);

    container.appendChild(actionsRow);
  }

  return {
    renderHomeSummary,
    renderWeakestBanner,
    renderContinueButton,
    renderStudyModeCards,
    renderFocusNext,
    renderTopicCards,
    renderQuizProgress,
    renderQuizMeta,
    renderQuizQuestion,
    renderResults,
  };
})();
