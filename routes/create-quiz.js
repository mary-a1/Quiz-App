/*
 * All routes for create quiz through quizzes are defined here
 * Since this file is loaded in server.js into /new,
 *   these routes are mounted onto /new
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const createQueries = require('../db/queries/add-quiz');

// Get request to create quiz page
router.get('/', (req, res) => {
  res.render('create-quiz');
});

// Post request after submitting form
router.post('/', (req, res) => {
  // Search parameters
  const quizInputs = req.body;
  const quizInputsKeys = Object.keys(quizInputs);
  const quizParams = {
    title: quizInputs.title,
    subject: quizInputs.subject,
    thumbnail_url: quizInputs.thumbnail_url,
    public: quizInputs.public,
    questions: []
  };
  // Loop through the quiz inputs and order them in the right way
  for (let i = 0; i < quizInputsKeys.length; i += 6) {
    quizParams.questions.push({
      [quizInputsKeys[i]]: quizInputs[quizInputsKeys[i]],
      [quizInputsKeys[i + 1]]: quizInputs[quizInputsKeys[i + 1]],
      [quizInputsKeys[i + 2]]: quizInputs[quizInputsKeys[i + 2]],
      [quizInputsKeys[i + 3]]: quizInputs[quizInputsKeys[i + 3]],
      [quizInputsKeys[i + 4]]: quizInputs[quizInputsKeys[i + 4]],
      [quizInputsKeys[i + 5]]: quizInputs[quizInputsKeys[i + 5]]
    });
  }
  // CREATOR ID HARDCODED
  quizParams.creatorId = '1';
  createQueries.addQuiz(quizParams)
    .then((myQuizzes) => {
      // NOT RENDERING (FINISH THIS)
      console.log('------------------------------------------------------------------------------------------------')
      return res.render('search');
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
