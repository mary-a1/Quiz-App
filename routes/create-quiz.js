/*
 * All routes for create quiz through quizzes are defined here
 * Since this file is loaded in server.js into /quiz/new,
 *   these routes are mounted onto /quiz/new
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
  const quizParams = req.body;
  // CREATOR ID HARDCODED
  quizParams.creatorId = '1';
  
  console.log(quizParams);
  createQueries.addQuiz(quizParams)
    .then((myQuizzes) => {
      // NOT RENDERING (FINISH THIS)
      // res.render('index', { quizzes });
      res.render('search');
    });
});

module.exports = router;
