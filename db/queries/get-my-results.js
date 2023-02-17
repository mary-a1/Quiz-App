const db = require('../connection');

const getAllMyResults = function(userId) {
  const queryParams = [userId];
  let queryString = `
  SELECT (
    SELECT  COUNT(*)
    FROM results
    JOIN questions ON questions.id = question_id
    WHERE results.player_id = $1
    AND results.chosen_answer = questions.correct_answer
    AND quizzes.id = questions.quiz_id
    ) AS score, (SELECT COUNT(*)
  FROM questions
  WHERE quiz_id = quizzes.id) AS total_questions,
    quizzes.title, quizzes.thumbnail_url
      FROM quizzes AS quizzes
      JOIN questions AS questions
      ON quiz_id = quizzes.id
      JOIN results AS results
      ON question_id = questions.id
      WHERE results.player_id = $1
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
