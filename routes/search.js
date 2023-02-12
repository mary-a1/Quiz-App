/*
 * All routes for searching through quizzes are defined here
 * Since this file is loaded in server.js into /search,
 *   these routes are mounted onto /search
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const searchQueries = require('../db/queries/search');

// Get request to search page
router.get('/', (req, res) => {
  res.render('search');
});

// Get request after submitting form
router.get('/', (req, res) => {
  console.log('------------------------------------------------------------------------------------------------');
  console.log(res);
  res.json({ res });
});

module.exports = router;
