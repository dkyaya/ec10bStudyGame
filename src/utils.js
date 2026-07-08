const Utils = (() => {
  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function pct(numerator, denominator) {
    if (!denominator) return 0;
    return Math.round((numerator / denominator) * 100);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function takeLimit(array, limit) {
    if (limit === "all" || limit === undefined || limit === null) return array;
    return array.slice(0, limit);
  }

  // Returns a new question object with choices (and their matching
  // wrongExplanations/answerIndex) shuffled into a fresh order. The source
  // question is never mutated — choices/wrongExplanations are rebuilt as new
  // arrays and spread into a new object, so callers can safely re-shuffle the
  // same question again for a later session without any drift.
  function shuffleChoicesForSession(question) {
    const order = shuffle(question.choices.map((_, i) => i));
    return {
      ...question,
      choices: order.map((i) => question.choices[i]),
      wrongExplanations: order.map((i) => question.wrongExplanations[i]),
      answerIndex: order.indexOf(question.answerIndex),
    };
  }

  return { shuffle, pct, byId, el, takeLimit, shuffleChoicesForSession };
})();
