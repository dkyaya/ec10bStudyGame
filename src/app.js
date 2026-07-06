const state = {
  questions: [],
  order: [],
  index: 0,
  score: 0,
  answered: false,
};

const el = {
  progress: document.getElementById("progress"),
  score: document.getElementById("score"),
  question: document.getElementById("question"),
  choices: document.getElementById("choices"),
  explanation: document.getElementById("explanation"),
  next: document.getElementById("next"),
  quiz: document.getElementById("quiz"),
  results: document.getElementById("results"),
  finalScore: document.getElementById("finalScore"),
  restart: document.getElementById("restart"),
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

async function loadQuestions() {
  const response = await fetch("./data/questions.json");
  state.questions = await response.json();
  startGame();
}

function startGame() {
  state.order = shuffle(state.questions.map((_, i) => i));
  state.index = 0;
  state.score = 0;
  el.results.hidden = true;
  el.quiz.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  el.explanation.hidden = true;
  el.next.disabled = true;

  const total = state.order.length;
  const qIndex = state.order[state.index];
  const q = state.questions[qIndex];

  el.progress.textContent = `Question ${state.index + 1} of ${total}`;
  el.score.textContent = `Score: ${state.score}`;
  el.question.textContent = q.question;
  el.choices.innerHTML = "";

  q.choices.forEach((choiceText, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choiceText;
    btn.addEventListener("click", () => selectAnswer(i, q));
    el.choices.appendChild(btn);
  });
}

function selectAnswer(choiceIndex, question) {
  if (state.answered) return;
  state.answered = true;

  const buttons = [...el.choices.children];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.answer) btn.classList.add("correct");
    if (i === choiceIndex && choiceIndex !== question.answer) {
      btn.classList.add("incorrect");
    }
  });

  if (choiceIndex === question.answer) {
    state.score += 1;
    el.score.textContent = `Score: ${state.score}`;
  }

  el.explanation.textContent = question.explanation;
  el.explanation.hidden = false;
  el.next.disabled = false;
}

function nextQuestion() {
  if (state.index + 1 < state.order.length) {
    state.index += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  el.quiz.hidden = true;
  el.results.hidden = false;
  el.finalScore.textContent = `${state.score} / ${state.order.length}`;
}

el.next.addEventListener("click", nextQuestion);
el.restart.addEventListener("click", startGame);

loadQuestions();
