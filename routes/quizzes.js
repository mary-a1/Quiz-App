/*
 * All routes for a user's quizzes up are defined here
 * Since this file is loaded in server.js into /quizzes,
 *   these routes are mounted onto /register
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const myQuizzes = require('../db/queries/quizzes');
const removeQuiz = require('../db/queries/remove-quiz');


router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  if (user) {
    myQuizzes.listQuizzes(user)
      .then((myQuizzes) => {
        const templateVar = { myQuizzes, user };
        res.render('quizzes', templateVar);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.redirect('/login');
  }
});


router.post('/:id', (req, res) => {
  // Get id of the quiz
  const id = req.params.id;
  // Make query to remove quiz
  removeQuiz.removeQuiz(id)
    .then(() => {
      res.redirect("/myquizzes");
    });
});

module.exports = router;
