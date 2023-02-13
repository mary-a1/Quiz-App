const db = require('../connection');

const getAllQuizzes = function(options = [], limit = 10) {
  const queryString = `
  SELECT title, thumbnail_url, avg(quiz_reviews.rating) as average_rating
  FROM quizzes JOIN quiz_reviews ON quizzes.id = quiz_id
  GROUP BY quizzes.id;`;
  return db.query(queryString)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getAllQuizzes };

