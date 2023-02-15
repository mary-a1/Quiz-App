const db = require('../connection');

const getQuiz = function(quizId) {
  const queryParams = [quizId];
  const queryString = `
  SELECT * FROM quizzes
  JOIN questions ON quizzes.id = quiz_id
  WHERE quizzes.id = $1`;

  return db.query(queryString, queryParams)
    .then((result) => {
      return result.rows;
    });
};

module.exports = { getQuiz };
