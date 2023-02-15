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
  const user = req.session.user;
  // console.log(req.session);
  // if (!user) {   // Check if logged in for header
  //   res.send("Pleas log in or register first.");
  //   return;
  // }

  const quizId = req._parsedOriginalUrl.pathname.split('/')[2];

  quizQueries.getQuizById(quizId)
    .then((quiz) => {
      const templateVar = { quiz, user };
      res.render('quiz-id', templateVar);
    })
    .catch(error => {
      console.error(error);
      res.send(error)
    });

});

module.exports = router;
