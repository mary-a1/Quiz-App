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
  allQuizzes.getAllQuizzes()
    .then((quizzes) => {
      res.render('index', { quizzes });
    });
});

// Post request after submitting form
router.post('/', (req, res) => {
  const quizId = req.body;

  aQuiz.getQuiz(quizId)
    .then((quizId) => {
      // Just need to redirect to my quizzes. The my quizzes page will gather the quiz data itself
      res.redirect('/quiz/:id' /* UPDATE THIS ONCE MY QUIZZES PAGE IS ADDED*/);
    })
    .catch((err) => {
      console.error(err);
    });
});


module.exports = router;
