const db = require('../connection');


const getQuizById = (quizId) => {
  const queryParams = [quizId];
  const queryString =`
  SELECT
  quizzes.title,
  quizzes.type,
  quizzes.public,
  quizzes.thumbnail_url,
  questions.id AS question_id,
  questions.description,
  questions.answer_one,
  questions.answer_two,
  questions.answer_three,
  questions.answer_four,
  questions.correct_answer
  FROM quizzes
  JOIN questions ON quiz_id = quizzes.id
  WHERE quizzes.id = $1`;

  return db.query(queryString, queryParams)
    .then((result)=> {
      console.log(result.rows);
      return result.rows;
    })
    .catch(err => {
      console.error(err);
    });

};


module.exports = { getQuizById };
