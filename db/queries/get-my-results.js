const db = require('../connection');

const getAllMyResults = function(userId) {
  const queryParams = [userId];
  let queryString = `
  SELECT COUNT(*) AS score, quizzes.title, quizzes.thumbnail_url
  FROM questions AS questions
  JOIN results AS results
  ON question_id = questions.id
  JOIN quizzes AS quizzes
  ON quiz_id = quizzes.id
  WHERE results.chosen_answer = questions.correct_answer AND
  results.player_id = $1
  GROUP BY quizzes.id
  ORDER BY score;`;

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getAllMyResults };
