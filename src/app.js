(async function () {
  const screens = {
    home: Utils.byId("home-screen"),
    quiz: Utils.byId("quiz-screen"),
    results: Utils.byId("results-screen"),
  };

  const homeEls = {
    summary: Utils.byId("home-summary"),
    weakestBanner: Utils.byId("weakest-banner"),
    continueBtn: Utils.byId("continueBtn"),
    modes: Utils.byId("study-modes"),
    focusNextBlock: Utils.byId("focus-next-block"),
    focusNext: Utils.byId("focus-next"),
    topicCards: Utils.byId("topic-cards"),
  };

  const quizEls = {
    progressFill: Utils.byId("quiz-progress-fill"),
    meta: Utils.byId("quiz-meta"),
    questionText: Utils.byId("quiz-question"),
    choicesContainer: Utils.byId("quiz-choices"),
    feedback: Utils.byId("quiz-feedback"),
    prevBtn: Utils.byId("prevBtn"),
    nextBtn: Utils.byId("nextBtn"),
    finishBtn: Utils.byId("finishBtn"),
    homeBtn: Utils.byId("quizHomeBtn"),
  };

  const resultsEls = {
    container: Utils.byId("results-content"),
  };

  const resetBtn = Utils.byId("resetProgressBtn");

  let questions = [];
  let topics = [];
  let sessionLength = "all";

  let session = {
    questions: [],
    index: 0,
  };

  function showScreen(name) {
    Object.keys(screens).forEach((key) => {
      screens[key].hidden = key !== name;
    });
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function renderHome() {
    const topicProgressList = Scoring.topicProgress(questions, topics);
    const weakest = Scoring.weakestTopics(topicProgressList, 1)[0] || null;
    const recommended = Scoring.recommendedContinueAction(questions);
    const hasNeedsReview = questions.some((q) => q.needsReview);

    Render.renderHomeSummary(homeEls.summary, questions, weakest);
    Render.renderWeakestBanner(homeEls.weakestBanner, weakest);
    Render.renderContinueButton(homeEls.continueBtn, recommended);
    Render.renderStudyModeCards(
      homeEls.modes,
      questions,
      hasNeedsReview,
      recommended.mode,
      sessionLength,
      onModeSelect
    );

    const weakTopics = Scoring.weakestTopics(topicProgressList, 3);
    homeEls.focusNextBlock.hidden = weakTopics.length === 0;
    if (weakTopics.length > 0) {
      Render.renderFocusNext(homeEls.focusNext, weakTopics, startTopicSession);
    }

    Render.renderTopicCards(homeEls.topicCards, questions, topics, startTopicSession, reviewMissedInTopic);

    homeEls.continueBtn.onclick = () => onModeSelect(recommended.mode);
  }

  function onModeSelect(mode, payload) {
    if (mode === "setSessionLength") {
      sessionLength = payload;
      renderHome();
      return;
    }

    let list;
    switch (mode) {
      case "full":
        list = [...questions];
        break;
      case "shuffle":
        list = Utils.takeLimit(Utils.shuffle(questions), sessionLength);
        break;
      case "missed":
        list = Scoring.missedQuestions(questions);
        break;
      case "unseen":
        list = Scoring.unseenQuestions(questions);
        break;
      case "needsReview":
        list = Scoring.needsReviewQuestions(questions);
        break;
      case "vocab":
        list = Utils.shuffle(Scoring.vocabQuestions(questions));
        break;
      default:
        list = [...questions];
    }

    if (list.length === 0) {
      alert("No questions available for this study mode yet.");
      return;
    }
    startSession(list);
  }

  function startTopicSession(topicId) {
    const list = Scoring.topicQuestions(questions, topicId);
    if (list.length === 0) return;
    startSession(list);
  }

  function reviewMissedInTopic(topicId) {
    const list = Scoring.missedQuestionsInTopic(questions, topicId);
    if (list.length === 0) return;
    startSession(list);
  }

  function startSession(list) {
    // Reshuffle answer choices fresh for every session, including a "Review
    // Missed" session launched from the results screen (whose list is drawn
    // from the previous session's already-shuffled question copies).
    const shuffledList = list.map((q) => Utils.shuffleChoicesForSession(q));
    session = { questions: shuffledList, index: 0 };
    showScreen("quiz");
    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    const question = session.questions[session.index];
    const topicLabel = (topics.find((t) => t.id === question.topic) || {}).name;
    Render.renderQuizProgress(quizEls.progressFill, session.index, session.questions.length);
    Render.renderQuizMeta(quizEls.meta, question, session.index, session.questions.length, topicLabel);

    const answeredThisSession = session.answeredIndex ? session.answeredIndex[question.id] : undefined;
    const savedAnswer = answeredThisSession !== undefined ? answeredThisSession : null;

    Render.renderQuizQuestion(quizEls, question, savedAnswer, (choiceIndex) => {
      const correct = choiceIndex === question.answerIndex;
      Storage.recordAttempt(question.id, choiceIndex, correct);
      if (!session.answeredIndex) session.answeredIndex = {};
      session.answeredIndex[question.id] = choiceIndex;
      renderCurrentQuestion();
    });

    quizEls.prevBtn.disabled = session.index === 0;
    const isLast = session.index === session.questions.length - 1;
    quizEls.nextBtn.hidden = isLast;
    quizEls.finishBtn.hidden = !isLast;
  }

  quizEls.prevBtn.addEventListener("click", () => {
    if (session.index > 0) {
      session.index -= 1;
      renderCurrentQuestion();
    }
  });

  quizEls.nextBtn.addEventListener("click", () => {
    if (session.index < session.questions.length - 1) {
      session.index += 1;
      renderCurrentQuestion();
    }
  });

  quizEls.finishBtn.addEventListener("click", () => {
    showResults();
  });

  quizEls.homeBtn.addEventListener("click", () => {
    showScreen("home");
    renderHome();
  });

  function showResults() {
    showScreen("results");
    Render.renderResults(resultsEls.container, session.questions, topics, {
      onReviewMissed: (missedList) => startSession(missedList),
      onShuffle: () => onModeSelect("shuffle"),
      onBackHome: () => {
        showScreen("home");
        renderHome();
      },
    });
  }

  resetBtn.addEventListener("click", () => {
    const confirmed = confirm(
      "This will erase all saved progress (attempts, scores, and history) on this device. Continue?"
    );
    if (!confirmed) return;
    Storage.resetProgress();
    showScreen("home");
    renderHome();
  });

  async function init() {
    try {
      const data = await Data.loadData();
      questions = data.questions;
      topics = data.topics;
      renderHome();
      showScreen("home");
    } catch (err) {
      console.error("Failed to load question bank:", err);
      homeEls.summary.textContent =
        "Could not load the question bank. Please check your connection and reload.";
    }
  }

  init();
})();
