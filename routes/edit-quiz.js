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
    .then((myQuiz) => {
      const templateVar = { myQuiz: myQuiz.rows, user };
      (user === myQuiz.rows[0].creat_id) ? res.render('edit-quiz', templateVar) : res.redirect('/login');
    });
});

// Post request after submitting form
router.post('/:id', (req, res) => {
  const updatedQuiz = req.body;
  updatedQuiz.quizId = req.params.id;
  editQueries.editQuiz(updatedQuiz)
    .then(() => {
      res.redirect('/myquizzes');
    });

});

module.exports = router;
