const db = require('../connection');
const { addReview } = require('./add-review');


const addResult = (playerId, review, answersSelected) => {
  const queryParams = [playerId];

  // Start the query
  let queryString = `
  INSERT INTO results (player_id, question_id, chosen_answer)
  VALUES `;

  // Add inserts
  for (const [key, value] of Object.entries(answersSelected)) {
    queryParams.push(key);
    queryParams.push(value);
    const queryParamsPosition = queryParams.length;
    queryString += `($1, $${queryParamsPosition - 1}, $${queryParamsPosition}), `;
  }

  // End the query
  queryString = `
  ON CONFLICT (player_id, question_id) DO UPDATE
  SET chosen_answer = EXCLUDED.chosen_answer
  ${queryString.slice(0, -2)} RETURNING question_id;`;

  return db.query(queryString, queryParams)
    .then((result) => {
      const queryParams = [result.rows[0].question_id];
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


module.exports = { addResult };
