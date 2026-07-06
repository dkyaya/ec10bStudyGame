const Storage = (() => {
  const KEY = "econ10bStudyGame:v1";

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { questionStats: {} };
      const parsed = JSON.parse(raw);
      if (!parsed.questionStats) parsed.questionStats = {};
      return parsed;
    } catch (err) {
      console.warn("Could not read saved progress, starting fresh.", err);
      return { questionStats: {} };
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (err) {
      console.warn("Could not save progress.", err);
    }
  }

  let state = load();

  function recordAttempt(questionId, answerIndex, correct) {
    const stat = state.questionStats[questionId] || {
      attempts: 0,
      correctCount: 0,
      lastAnswerIndex: null,
      lastCorrect: null,
      lastAttemptedAt: null,
    };
    stat.attempts += 1;
    if (correct) stat.correctCount += 1;
    stat.lastAnswerIndex = answerIndex;
    stat.lastCorrect = correct;
    stat.lastAttemptedAt = new Date().toISOString();
    state.questionStats[questionId] = stat;
    save(state);
    return stat;
  }

  function getQuestionStat(questionId) {
    return state.questionStats[questionId] || null;
  }

  function getAllStats() {
    return state.questionStats;
  }

  function resetProgress() {
    state = { questionStats: {} };
    save(state);
  }

  return { recordAttempt, getQuestionStat, getAllStats, resetProgress };
})();
