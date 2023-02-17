const db = require('../connection');

const getQuiz = function(quizId) {
  const queryParams = [quizId];
  const queryString = `
  SELECT * FROM quizzes
  JOIN questions ON quizzes.id = quiz_id
  WHERE quizzes.id = $1
  ORDER BY questions.id`;

  return db.query(queryString, queryParams);
};

module.exports = { getQuiz };
