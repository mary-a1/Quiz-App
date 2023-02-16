const db = require('../connection');

const listQuizzes = (id) => {
  const queryParams = [id];
  const queryString = `
  SELECT * FROM quizzes WHERE creator_id = $1 ORDER BY public`;

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};
module.exports = { listQuizzes };
