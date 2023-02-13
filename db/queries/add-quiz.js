const db = require('../connection');
const { addQuestions } = require('./add-questions');

const addQuiz = function(quiz) {
  const queryParams = [quiz.creatorId, quiz.title, quiz.subject, quiz.public, quiz.thumbnail_url];
  const queryString = `
  INSERT INTO quizzes (creator_id, title, type, public, thumbnail_url)
  VALUES
  ($1, $2, $3, $4, $5) RETURNING id;`;
  return db.query(queryString, queryParams)
    .then((id) => {
      return addQuestions(id, quiz.quizQuestions);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { addQuiz };
