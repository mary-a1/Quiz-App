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
  // Query info
  const quizParams = req.body;
  quizParams.creatorId = req.session.user;

  createQueries.addQuiz(quizParams)
    .then(() => {
      // Just need to redirect to my quizzes. The my quizzes page will gather the quiz data itself
      res.redirect('/myquizzes' /* UPDATE THIS ONCE MY QUIZZES PAGE IS ADDED*/);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
