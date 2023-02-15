const db = require('../connection');

const addQuestions = function(id, quizQuestions) {
  const queryParams = [id, ...Object.values(quizQuestions)];

  // Start the query
  let queryString = `
  INSERT INTO questions (quiz_id, description, answer_one, answer_two, answer_three, answer_four, correct_answer)
  VALUES`;

  // Middle of the query: Add the questions
  for (let i = 2; i <= queryParams.length; i += 6) {
    queryString += (i > 2) ? ', ' : ' ';
    queryString += `($${1}, $${i}, $${i + 1}, $${i + 2}, $${i + 3}, $${i + 4}, $${i + 5})`;
  }

  // End the query
  queryString += `;`;

  return db.query(queryString, queryParams);
};

module.exports = { addQuestions };
