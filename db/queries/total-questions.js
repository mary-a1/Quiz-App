const db = require('../connection');

const totalQuestions = function(quizId) {
  const queryParams = [quizId];
  let queryString = `SELECT COUNT(*)
  FROM questions
  WHERE quiz_id = $1`;

  return db.query(queryString, queryParams);
};

module.exports = { totalQuestions };
