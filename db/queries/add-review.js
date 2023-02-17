const db = require('../connection');


const addReview = (queryParams) => {
  let queryString = `INSERT INTO quiz_reviews (quiz_id, player_id, rating)
  VALUES ($1, $2, $3)
  ON CONFLICT (quiz_id, player_id) DO UPDATE
  SET rating = EXCLUDED.rating;`;

  return db.query(queryString, queryParams);
};


module.exports = { addReview };
