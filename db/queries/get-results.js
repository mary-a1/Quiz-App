const db = require('../connection');

const getAllResults = function(quizId) {
  const queryParams = [quizId];

  let queryString = `SELECT COUNT(results.id) AS score, users.name AS user, quizzes.title AS quiz, quizzes.creator_id, (SELECT COUNT(*)
  FROM questions
  WHERE quiz_id = $1) AS total_questions
  FROM results AS results
  JOIN questions AS questions ON question_id = questions.id
  JOIN users AS users ON player_id = users.id
  JOIN quizzes AS quizzes ON quiz_id = quizzes.id
  WHERE results.id IN (
    SELECT results.id
    FROM results AS results
    JOIN questions AS questions ON question_id = questions.id
    JOIN users AS users ON player_id = users.id
    WHERE questions.quiz_id = $1
    GROUP BY results.id
    ORDER BY results.id DESC
    LIMIT (
      SELECT COUNT(questions.id)
      FROM questions
      JOIN quizzes ON quiz_id = quizzes.id
      WHERE questions.quiz_id = $1
    )
  )
  AND results.chosen_answer = questions.correct_answer
  GROUP BY users.name, quizzes.title, quizzes.creator_id;`;

  return db.query(queryString, queryParams)
    .then((results) => {
      if (results.rows.length === 0) {
        const queryParams = [quizId];
        const queryString = `SELECT title, creator_id FROM quizzes WHERE id = $1;`
        return db.query(queryString, queryParams);
      }
      return results.rows
    })

};

module.exports = { getAllResults };
