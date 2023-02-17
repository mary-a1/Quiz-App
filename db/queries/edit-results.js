
const db = require('../connection');
const { addReview } = require('./add-review');

const editResult = function(playerId, review, answersSelected, questionIds) {
  const numberOfQuestions = questionIds.length;

  let i = 0;
  while (i < numberOfQuestions - 1) {
    const key = questionIds[i];
    const queryParams = [playerId, key, answersSelected[`${key}`]];
    let queryString = `
            UPDATE results SET
            player_id = $1,
            question_id = $2,
            chosen_answer = $3;`;
    db.query(queryString, queryParams);
    i++;
  }
  const key = questionIds[numberOfQuestions - 1];
  const queryParams = [playerId, key, answersSelected[`${key}`]];
  let queryString = `
          UPDATE results SET
          chosen_answer = $3
          WHERE player_id = $1
          AND question_id = $2;`;
  db.query(queryString, queryParams)
    .then(() => {
      const queryParams = [questionIds[0]];
      const queryString = `SELECT quiz_id FROM questions WHERE id = $1`;
      return db.query(queryString, queryParams);
    })
    .then((result) => {
      const quizId = result.rows[0].quiz_id;
      const queryParams = [quizId, playerId, review];
      return addReview(queryParams);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { editResult };
