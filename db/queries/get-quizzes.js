const db = require('../connection');

const getAllQuizzes = function(options = {}, limit = 10) {
  // Start the query
  const queryParams = [];
  let queryString = `
  SELECT quizzes.id, title, thumbnail_url, avg(quiz_reviews.rating) as average_rating
  FROM quizzes JOIN quiz_reviews ON quizzes.id = quiz_id`;

  // Optional parameters
  if (options.title) {
    queryParams.push(`%${options.title}%`);
    queryString += ` WHERE title LIKE $${queryParams.length}`;
  }
  if (options.subject) {
    queryParams.push(`%${options.subject}%`);
    queryString += (options.title) ? " AND" : " WHERE";
    queryString += ` subject LIKE $${queryParams.length}`;
  }
  // End off the query string by ordering it based on rating
  queryString += ` GROUP BY quizzes.id`;

  if (options.min_rating) {
    queryParams.push(options.min_rating);
    queryString += ` HAVING avg(quiz_reviews.rating) >= $${queryParams.length}`;
  }

  // End of query
  queryParams.push(limit);
  queryString += `
  ORDER BY average_rating
  LIMIT $${queryParams.length};`;

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getAllQuizzes };