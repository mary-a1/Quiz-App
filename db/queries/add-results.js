const db = require('../connection');
const { editResult } = require('./edit-results');
const { appendResult } = require('./append-results');


const addResult = (playerId, review, answersSelected) => {
  const questionIds = Object.keys(answersSelected);

  // Check if user attempted the quiz
  const queryString = `SELECT * FROM results WHERE question_id = $1 AND player_id = $2`;
  const queryParams = [questionIds[0], playerId];

  return db.query(queryString, queryParams)
    .then((result) => {
      if (result.rows.length === 0) {
        return appendResult(playerId, review, answersSelected, questionIds);
      } else {
        return editResult(playerId, review, answersSelected, questionIds);
      }
    });
};


module.exports = { addResult };
