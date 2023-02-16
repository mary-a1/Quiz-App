const db = require('../connection');
const { addReview } = require('./add-review');


const addResult = (quizId, playerId, review, answersSelected) => {
  const queryParams = [playerId];

  // Start the query
  let queryString = `
  INSERT INTO results (player_id, question_id, chosen_answer)
  VALUES `;

  // Add inserts
  for (const [key, value] of Object.entries(answersSelected)) {
    queryParams.push(key);
    queryString.push(value);
    const queryParamsPosition = queryParams.length;
    queryString += `($1, ${queryParamsPosition - 1}, ${queryParamsPosition}), `;
  }

  // End the query
  queryString = `${queryString.slice(0, -3)} RETURNING quiz_id;`;


  return db.query(queryString, queryParams)
    .then((quizId) => {
      const queryParams = [quizId, playerId, review];
      addReview(queryParams);
    })
    .catch(err => {
      console.error(err);
    });
};


module.exports = { addResult };
