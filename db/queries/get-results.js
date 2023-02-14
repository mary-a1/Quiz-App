const db = require('../connection');

const getAllResults = function(ids) {
  // Start the query string
  const queryParams = ids;
  let queryString = `
  SELECT COUNT(results.*) as score, alias
  FROM results JOIN questions ON question_id = questions.id
  WHERE results.chosen_answer = questions.correct_answer AND`;

  // Put together the player ids
  const playerIds = ids.join(',');
  queryString += `results.player_id IN (${playerIds})`;

  // End the query string
  queryString += `ORDER BY score;`;

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getAllResults };
