/*
 * All routes to show quiz by id are defined here
 * Since this file is loaded in server.js into /quiz/:id,
 *   these routes are mounted onto /quiz/:id
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/get-quiz-by-id')

// check if user is logged in (cookie stuff)

router.get('/:id', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  // console.log(req.session);
  quizQueries.getQuizById()
    .then((quiz) => {
      // console.log(quiz);
      const templateVar = { quiz, user };
      res.render('quiz-id', templateVar);
      // res.json(quiz);
    })
    .catch(error => {
      console.error(error);
      res.send(error)
    });

});

module.exports = router;
