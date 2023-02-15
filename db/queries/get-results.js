const db = require('../connection');

const getAllResults = function(quizId) {
  const queryParams = [quizId];
  let queryString = `
  SELECT COUNT(*) AS score, users.name AS user
  FROM questions AS questions
  JOIN results AS results
  ON question_id = questions.id
  JOIN users AS users
  ON player_id = users.id
  WHERE results.chosen_answer = questions.correct_answer AND
  questions.quiz_id = $1
  GROUP BY users.id
  ORDER BY score;`;

  return db.query(queryString, queryParams)
    .then((data) => {
      return data.rows;
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = { getAllResults };
