const db = require('../connection');

const removeQuiz = function(quizId) {
  const queryParams = [quizId];
  let queryString = `DELETE FROM questions WHERE id = $1;`;
  return db.query(queryString, queryParams)
    .then(() => {
      queryString = `DELETE FROM quizzes WHERE id = $1;`;
      return db.query(queryString, queryParams);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { removeQuiz };
