/*
 * All routes for logout are defined here
 * Since this file is loaded in server.js into /logout,
 *   these routes are mounted onto /logout
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
