const db = require('../connection');
const { editQuestions } = require('./edit-questions');

const editQuiz = function(updatedQuiz) {
  const queryParams = [updatedQuiz.title, updatedQuiz.subject, updatedQuiz.public, updatedQuiz.thumbnail_url, updatedQuiz.quizId];
  const queryString = `
  UPDATE quizzes
  SET title = $1, type = $2, public = $3, thumbnail_url = $4
  WHERE id = $5;`;
  const quizQuestions = (({ title, subject, public, thumbnail_url, quizId, ...o }) => o)(updatedQuiz);

  return db.query(queryString, queryParams)
    .then(() => {
      return editQuestions(quizQuestions);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { editQuiz };
