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

router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  // Search parameters
  const seralizedSearchParams = req._parsedOriginalUrl.query;
  const searchParams = (seralizedSearchParams) ? JSON.parse('{"' + decodeURI(seralizedSearchParams.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}') : {};

  allQuizzes.getAllQuizzes(searchParams)
    .then((quizzes) => {
      const templateVar = { quizzes: quizzes.rows, user };
      res.render('index', templateVar);
    });
});

// Post request after submitting form
router.post('/:id', (req, res) => {
  // Check if logged in
  const isLoggedIn = req.session.user;
  const quizId = req.params.id;
  if (!isLoggedIn) {
    return res.redirect('/login');
  } else {
    return res.redirect(`/quiz/${quizId}`);
  }
});


module.exports = router;
