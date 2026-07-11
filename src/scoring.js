const Scoring = (() => {
  function overallProgress(questions) {
    let attempted = 0;
    let correct = 0;
    questions.forEach((q) => {
      const stat = Storage.getQuestionStat(q.id);
      if (stat && stat.attempts > 0) {
        attempted += 1;
        if (stat.lastCorrect) correct += 1;
      }
    });
    return {
      total: questions.length,
      attempted,
      correct,
      accuracy: Utils.pct(correct, attempted),
    };
  }

  function topicStatus({ total, attempted, accuracy }) {
    if (attempted === 0) return "not-started";
    if (attempted === total && accuracy >= 90) return "mastered";
    if (attempted >= 3 && accuracy < 70) return "needs-review";
    if (attempted >= 3 && accuracy >= 80) return "strong";
    return "in-progress";
  }

  function topicProgress(questions, topics) {
    return topics.map((topic) => {
      const topicQuestions = questions.filter((q) => q.topic === topic.id);
      let attempted = 0;
      let correct = 0;
      let missed = 0;
      topicQuestions.forEach((q) => {
        const stat = Storage.getQuestionStat(q.id);
        if (stat && stat.attempts > 0) {
          attempted += 1;
          if (stat.lastCorrect) correct += 1;
          else missed += 1;
        }
      });
      const total = topicQuestions.length;
      const accuracy = attempted > 0 ? Utils.pct(correct, attempted) : null;
      return {
        topic,
        total,
        attempted,
        correct,
        missed,
        accuracy,
        status: topicStatus({ total, attempted, accuracy: accuracy || 0 }),
      };
    });
  }

  function missedQuestions(questions) {
    return questions.filter((q) => {
      const stat = Storage.getQuestionStat(q.id);
      return stat && stat.attempts > 0 && stat.lastCorrect === false;
    });
  }

  function missedQuestionsInTopic(questions, topicId) {
    return missedQuestions(questions).filter((q) => q.topic === topicId);
  }

  function unseenQuestions(questions) {
    return questions.filter((q) => {
      const stat = Storage.getQuestionStat(q.id);
      return !stat || stat.attempts === 0;
    });
  }

  function needsReviewQuestions(questions) {
    return questions.filter((q) => q.needsReview);
  }

  function vocabQuestions(questions) {
    return questions.filter((q) => q.questionType === "vocab");
  }

  function formulaQuestions(questions) {
    return questions.filter((q) => q.questionType === "formula");
  }

  function graphQuestions(questions) {
    return questions.filter((q) => q.questionType === "graph");
  }

  function topicQuestions(questions, topicId) {
    return questions.filter((q) => q.topic === topicId);
  }

  function weakestTopics(topicProgressList, limit) {
    return topicProgressList
      .filter((tp) => tp.attempted >= 3)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, limit === undefined ? topicProgressList.length : limit);
  }

  function recommendedContinueAction(questions) {
    const missed = missedQuestions(questions);
    if (missed.length > 0) {
      return { mode: "missed", label: "Review Missed", count: missed.length };
    }
    const unseen = unseenQuestions(questions);
    if (unseen.length > 0) {
      return { mode: "unseen", label: "New / Unseen", count: unseen.length };
    }
    return { mode: "shuffle", label: "Shuffle Mixed Practice", count: questions.length };
  }

  function groupQuestionsByTopic(list, topics) {
    const byTopicId = new Map();
    list.forEach((q) => {
      if (!byTopicId.has(q.topic)) byTopicId.set(q.topic, []);
      byTopicId.get(q.topic).push(q);
    });
    return topics
      .filter((t) => byTopicId.has(t.id))
      .map((t) => ({ topic: t, questions: byTopicId.get(t.id) }));
  }

  function recommendedNextAction(sessionQuestions, sessionTopicProgress) {
    const missed = sessionQuestions.filter((q) => {
      const stat = Storage.getQuestionStat(q.id);
      return stat && stat.lastCorrect === false;
    });
    if (missed.length > 0) {
      return { type: "missed", label: `Review your ${missed.length} missed question${missed.length === 1 ? "" : "s"}` };
    }
    const weakest = weakestTopics(sessionTopicProgress, 1)[0];
    if (weakest && weakest.accuracy < 80) {
      return {
        type: "topic",
        label: `Drill "${weakest.topic.name}" (${weakest.accuracy}% accuracy)`,
        topicId: weakest.topic.id,
      };
    }
    return { type: "shuffle", label: "Keep sharp with shuffled mixed practice" };
  }

  function recommendation(topicProgressList) {
    const attemptedEnough = topicProgressList.filter((tp) => tp.attempted >= 2);
    if (attemptedEnough.length === 0) return null;
    const weakest = attemptedEnough.reduce((worst, tp) =>
      tp.accuracy < worst.accuracy ? tp : worst
    );
    if (weakest.accuracy >= 80) return null;
    return `Review "${weakest.topic.name}" — your accuracy there is ${weakest.accuracy}%.`;
  }

  return {
    overallProgress,
    topicProgress,
    topicStatus,
    topicQuestions,
    missedQuestions,
    missedQuestionsInTopic,
    unseenQuestions,
    needsReviewQuestions,
    vocabQuestions,
    formulaQuestions,
    graphQuestions,
    weakestTopics,
    recommendedContinueAction,
    groupQuestionsByTopic,
    recommendedNextAction,
    recommendation,
  };
})();
