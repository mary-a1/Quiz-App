const db = require('../connection');

const editQuestions = function(quizQuestions) {
  const numberOfQuestions = Object.values(quizQuestions).length / 7;

  for (let i = 1; i <= numberOfQuestions; i++) {
    const queryString = `
    UPDATE questions
    SET
    description = $1,
    answer_one = $2,
    answer_two = $3,
    answer_three = $4,
    answer_four = $5,
    correct_answer = $6
    WHERE id = $7`;

    const queryParams = [
      quizQuestions[`q${i}`],
      quizQuestions[`q${i}a`],
      quizQuestions[`q${i}b`],
      quizQuestions[`q${i}c`],
      quizQuestions[`q${i}d`],
      quizQuestions[`question-${i}`],
      quizQuestions[`qId${i}`]];

    db.query(queryString, queryParams);
  }
};

module.exports = { editQuestions };
