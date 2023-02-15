const db = require('../connection');

const editQuestions = function(quizQuestions) {
  const queryParams = [...Object.values(quizQuestions)];
  const quizIdindex = queryParams.length;

  // Start the query
  let queryString = `
  INSERT INTO questions (id, quiz_id, description, answer_one, answer_two, answer_three, answer_four, correct_answer)
  VALUES`;

  // Middle of the query: Add the questions
  for (let i = 1; i <= queryParams.length; i += 7) {
    queryString += (i > 2) ? ', ' : ' ';
    queryString += `($${quizIdindex}, $${i}, $${i + 1}, $${i + 2}, $${i + 3}, $${i + 4}, $${i + 5}, , $${i + 6})`;
  }

  // End the query
  queryString += `ON DUPLICATE KEY UPDATE
  id=VALUES(id);`;

  console.log('------------------------------------------------------------------------------------------------');
  console.log(queryString);
  console.log('------------------------------------------------------------------------------------------------');
  console.log(queryParams);
  console.log('------------------------------------------------------------------------------------------------');



  return db.query(queryString, queryParams);
};

module.exports = { editQuestions };
