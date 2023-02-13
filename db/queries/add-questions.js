const db = require('../connection');

const addQuestions = function(id, quizQuestions) {
  const queryParams = [id];
  let queryParamsLength = queryParams.length;

  // Start the query
  let queryString = `
  INSERT INTO questions (quiz_id, description, answer_one, answer_two, answer_three, answer_four, correct_answer)
  VALUES`;

  for (const question in quizQuestions) {
    // Start the query string
    queryString += (question > 0) ? `, ($1` : `($1`;

    // Add to queryParams
    for (const value of Object.values(quizQuestions[question])) {
      queryParams.push(value);
      queryParamsLength++;
      queryString += `, ${queryParamsLength}`;
    }

    // Close the query string
    queryString += `)`;
  }

  // End the query
  queryString += `;`;

  return db.query(queryString, queryParams);
};

module.exports = { addQuestions };
