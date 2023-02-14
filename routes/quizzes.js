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


router.get('/', (req, res) => {

  myQuizzes.listQuizzes()
    .then((myQuizzes) => {
      // Check if logged in for header
      const user = req.session.user;

      const templateVar = { myQuizzes, user };
      res.render('quizzes', templateVar);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
