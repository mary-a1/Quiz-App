/*
 * All routes for edit quiz through quizzes are defined here
 * Since this file is loaded in server.js into /new,
 *   these routes are mounted onto /new
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const editQueries = require('../db/queries/edit-quiz');
const getQuizQueries = require('../db/queries/get-quiz');


// Get request to edit quiz page
router.get('/:id', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  const quizId = req.params.id;
  getQuizQueries.getQuiz(quizId)
    .then((myQuizzes) => {
      const templateVar = { myQuizzes, user };
      (user) ? res.render('edit-quiz', templateVar) : res.redirect('/login');
    });

});

// Post request after submitting form
router.post('/', (req, res) => {
  // Query info
  const quizParams = req.body;
  quizParams.creatorId = req.session.user;

  editQueries.editQuiz(quizParams)
    .then(() => {
      res.redirect('/myquizzes');
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
