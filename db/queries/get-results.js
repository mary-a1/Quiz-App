const db = require('../connection');

// -------------------------------------FIX THIS QUERY----------------------------------------------------------------

const getAllResults = function(ids) {
  // Start the query string
  const queryParams = [ids];
  let queryString = `
  SELECT COUNT(results.*) as score
  FROM results JOIN questions ON question_id = questions.id
  WHERE results.chosen_answer = questions.correct_answer AND`;

  // Put together the player ids
  // const playerIds = ids.join(',');
  queryString += `results.player_id IN ($1)`;

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
