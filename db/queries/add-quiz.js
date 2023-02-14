const db = require('../connection');
const { addQuestions } = require('./add-questions');

const addQuiz = function(quiz) {
  const queryParams = [quiz.creatorId, quiz.title, quiz.subject, quiz.public, quiz.thumbnail_url];
  const queryString = `
  INSERT INTO quizzes (creator_id, title, type, public, thumbnail_url)
  VALUES
  ($1, $2, $3, $4, $5) RETURNING id;`;
  const quizQuestions = (({ creatorId, title, subject, public, thumbnail_url, ...o }) => o)(quiz);
  return db.query(queryString, queryParams)
    .then((result) => {
      const quizId = result.rows[0].id;
      return addQuestions(quizId, quizQuestions);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { addQuiz };
