const Data = (() => {
  const REQUIRED_FIELDS = [
    "id",
    "topic",
    "subtopic",
    "difficulty",
    "sourceIds",
    "sourceLabel",
    "needsReview",
    "question",
    "choices",
    "answerIndex",
    "correctExplanation",
    "wrongExplanations",
    "tags",
  ];

  async function loadData() {
    const [questions, topics, sources] = await Promise.all([
      fetch("./data/questions.json").then((r) => r.json()),
      fetch("./data/topics.json").then((r) => r.json()),
      fetch("./data/sources.json").then((r) => r.json()),
    ]);
    validate(questions, topics, sources);
    return { questions, topics, sources };
  }

  function validate(questions, topics, sources) {
    const topicIds = new Set(topics.map((t) => t.id));
    const sourceIds = new Set(sources.map((s) => s.id));
    const seenIds = new Set();
    let warningCount = 0;

    const warn = (msg) => {
      console.warn(`[Econ 10b question bank validation] ${msg}`);
      warningCount += 1;
    };

    questions.forEach((q, index) => {
      const label = q.id || `#${index}`;

      REQUIRED_FIELDS.forEach((field) => {
        if (q[field] === undefined) {
          warn(`${label}: missing required field "${field}"`);
        }
      });

      if (q.id) {
        if (seenIds.has(q.id)) warn(`${label}: duplicate question id`);
        seenIds.add(q.id);
      }

      if (q.topic && !topicIds.has(q.topic)) {
        warn(`${label}: references unknown topic id "${q.topic}"`);
      }

      (q.sourceIds || []).forEach((sid) => {
        if (!sourceIds.has(sid)) {
          warn(`${label}: references unknown source id "${sid}"`);
        }
      });

      if (Array.isArray(q.choices) && Array.isArray(q.wrongExplanations)) {
        if (q.choices.length !== q.wrongExplanations.length) {
          warn(`${label}: choices length (${q.choices.length}) does not match wrongExplanations length (${q.wrongExplanations.length})`);
        }
        if (
          typeof q.answerIndex !== "number" ||
          q.answerIndex < 0 ||
          q.answerIndex >= q.choices.length
        ) {
          warn(`${label}: answerIndex ${q.answerIndex} is out of range for ${q.choices.length} choices`);
        } else {
          q.wrongExplanations.forEach((exp, i) => {
            if (i === q.answerIndex) {
              if (exp !== null) {
                warn(`${label}: wrongExplanations[${i}] should be null at the correct answer's index`);
              }
            } else if (!exp || !String(exp).trim()) {
              warn(`${label}: missing wrongExplanation for incorrect choice at index ${i}`);
            }
          });
        }
      }
    });

    if (warningCount === 0) {
      console.info(`[Econ 10b question bank validation] ${questions.length} questions passed all checks.`);
    } else {
      console.warn(`[Econ 10b question bank validation] ${warningCount} issue(s) found across ${questions.length} questions.`);
    }
  }

  return { loadData };
})();
