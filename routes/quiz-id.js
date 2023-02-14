/*
 * All routes to show quiz by id are defined here
 * Since this file is loaded in server.js into /quiz/:id,
 *   these routes are mounted onto /quiz/:id
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

// check if user is logged in (cookie stuff)

router.get('/:id', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  res.render('quiz-id', { user });
});

module.exports = router;
