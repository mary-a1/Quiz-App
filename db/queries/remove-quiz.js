const db = require('../connection');

const removeQuiz = function(quizId) {
  const queryParams = [quizId];
  const queryString = `
  DELETE FROM quizzes JOIN questions ON id = creator_id WHERE id = $1`;
  return db.query(queryString, queryParams);
};

module.exports = { removeQuiz };
