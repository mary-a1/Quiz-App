const db = require('../connection');

const getAllQuizzes = function(options = {}, limit = 10) {
  // Start the query
  const queryParams = [];
  let queryString = `
  SELECT quizzes.id, title, thumbnail_url, avg(quiz_reviews.rating) as average_rating
  FROM quizzes LEFT JOIN quiz_reviews ON quizzes.id = quiz_id
  WHERE quizzes.public = true`;

  // Optional parameters
  if (options.title) {
    queryParams.push(`%${options.title.toLowerCase()}%`);
    queryString += ` AND LOWER(title) LIKE $${queryParams.length}`;
  }
  if (options.type) {
    queryParams.push(`%${options.type.toLowerCase()}%`);
    queryString += ` AND LOWER(type) LIKE $${queryParams.length}`;
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

  console.log(queryString);
  console.log(queryParams);

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getAllQuizzes };
