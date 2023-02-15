/*
 * All routes for allresults are defined here
 * Since this file is loaded in server.js into /allresults,
 *   these routes are mounted onto /allresults
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const allResults = require('../db/queries/get-results');


router.get('/:id', (req, res) => {
  // Check if logged in for header
  const quizId = req._parsedOriginalUrl.pathname.split('/')[2];
  const user = req.session.user;

  allResults.getAllResults(quizId)
    .then((quizzes) => {
      const templateVar = { quizzes, user };
      res.render('allresults', templateVar);
    });
});

router.post('/', (req, res) => {
});

module.exports = router;
