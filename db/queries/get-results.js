const db = require('../connection');
const { totalQuestions } = require('./total-questions');


const getAllResults = function(quizId) {
  const data = {};
  const queryParams = [quizId];
  let queryString = `SELECT COUNT(results.id) AS score, users.name AS user, quizzes.title AS quiz, (SELECT COUNT(*)
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
  GROUP BY users.name, quizzes.title;`;

  return db.query(queryString, queryParams)

};

module.exports = { getAllResults };
