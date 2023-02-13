const db = require('../connection');

const getAllQuizzes = function(options = [], limit = 10) {
  return db.query('SELECT title, thumbnail_url FROM quizzes;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllQuizzes };

