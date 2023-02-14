const db = require('../connection');

const listQuizzes = () => {
  const queryString = `
  SELECT *
  FROM quizzes`;

  return db.query(queryString)
    .then((data) => {
      console.log("data-rows", data.rows);
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};
module.exports = { listQuizzes };
