const db = require('../connection');

const addQuiz = function(quiz) {
  const quizParams = [quiz.creator_id, quiz.title, quiz.subject, quiz.public, quiz.thumbnail_url];
  const queryString = `
  INSERT INTO quizzes (creator_id, title, type, public, thumbnail_url)
  VALUES
  ($1, $2, $3, $4, $5) RETURNING *;`;
  return db.query(queryString, quizParams)
    .then((data) => {
      return data.rows[0];
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { addQuiz };
