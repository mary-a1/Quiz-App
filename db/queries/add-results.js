const db = require('../connection');
const { editResult } = require('./edit-results');
const { appendResult } = require('./append-results');


const addResult = (playerId, review, answersSelected) => {
  const questionIds = Object.keys(answersSelected);

  // Check if user attempted the quiz
  const queryString = `SELECT * FROM results WHERE question_id = $1 AND player_id = $2`;
  const queryParams = [questionIds[0], playerId];
  console.log('----------------------------------------------------');
  console.log(queryString);
  console.log('----------------------------------------------------');

  return db.query(queryString, queryParams)
    .then((result) => {

      console.log('----------------------------------------------------');
      console.log(result.rows);
      console.log('----------------------------------------------------');
      if (result.rows.length === 0) {
        return appendResult(playerId, review, answersSelected, questionIds);
      } else {
        return editResult(playerId, review, answersSelected, questionIds);
      }

    });
};


module.exports = { addResult };
