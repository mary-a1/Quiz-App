/*
 * All routes for Quiz are defined here
 * Since this file is loaded in server.js into /quiz,
 *   these routes are mounted onto /quiz
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

// check if user is logged in (cookie stuff)

router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  res.render('quiz', { user });
});

module.exports = router;
