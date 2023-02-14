/*
 * All routes for homepage are defined here
 * Since this file is loaded in server.js into /,
 *   these routes are mounted onto /
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const allQuizzes = require('../db/queries/get-quizzes');
const aQuiz = require('../db/queries/quiz');

router.get('/', (req, res) => {
  // Check if logged in for header
  const isLoggedIn = req.session.user;
  // Search parameters
  const searchParams = req.body;
  allQuizzes.getAllQuizzes(searchParams)
    .then((quizzes) => {
      res.render('index', { quizzes });
    });
});

// Post request after submitting form
router.post('/', (req, res) => {
  // Check if logged in
  const isLoggedIn = req.session.user;
  const quizId = req.body;
  if (!isLoggedIn) {
    return res.redirect('/login');
  } else {
    // Just need to redirect to my quizzes. The my quizzes page will gather the quiz data itself
    return res.redirect(`/quiz/:${quizId}` /* UPDATE THIS ONCE MY QUIZZES PAGE IS ADDED*/);
  }
});


module.exports = router;
