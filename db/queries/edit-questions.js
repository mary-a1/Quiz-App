const db = require('../connection');

const editQuestions = function(quizId, quizQuestions) {
  const queryParams = [...Object.values(quizQuestions), quizId];
  const quizIdIndex = queryParams.length;

  // Start the query
  let queryString = [`
  UPDATE questions`];

  // Middle of the query: Add the questions
  for (let i = 2; i <= queryParams.length; i += 6) {
    queryString += `SET description = `
  }

  // End the query
  queryString += `;`;

  return db.query(queryString, queryParams);
};

module.exports = { editQuestions };
