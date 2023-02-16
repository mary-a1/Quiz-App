const db = require('../connection');


const addReview = (queryParams) => {
  let queryString = `INSERT INTO quiz_reviews (quiz_id, player_id, rating) VALUES ($1, $2, $3)`;
  return db.query(queryString, queryParams);
};


module.exports = { addReview };
