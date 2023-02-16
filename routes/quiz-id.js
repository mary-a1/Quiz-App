/*
 * All routes to show quiz by id are defined here
 * Since this file is loaded in server.js into /quiz/:id,
 *   these routes are mounted onto /quiz/:id
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const quizQueries = require('../db/queries/get-quiz-by-id');
const addResult = require('../db/queries/add-results');

router.get('/:id', (req, res) => {
  const user = req.session.user;

  const quizId = req._parsedOriginalUrl.pathname.split('/')[2];

  quizQueries.getQuizById(quizId)
    .then((quiz) => {
      const templateVar = { quiz, user };
      res.render('quiz-id', templateVar);
    })
    .catch(error => {
      console.error(error);
      res.send(error);
    });

});

// Post request after submitting quiz
router.post('/', (req, res) => {
  const playerId = req.session.user;
  const results = JSON.parse(req.body.quiz_info);
  const review = results.review;
  const answersSelected = (({ review, ...o }) => o)(results);

  addResult.addResult(playerId, review, answersSelected)
    .then(() => {
      return res.redirect('myresults');
    });
});

module.exports = router;
