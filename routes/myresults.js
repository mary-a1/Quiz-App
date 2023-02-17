/*
 * my routes for myresults are defined here
 * Since this file is loaded in server.js into /myresults,
 *   these routes are mounted onto /myresults
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const myResults = require('../db/queries/get-my-results');


router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  myResults.getAllMyResults(user)
    .then((results) => {
      console.log('----------------------------------------------------------------');
      console.log(results);
      console.log('----------------------------------------------------------------');

      const templateVar = { results: results, user };
      res.render('allresults', templateVar);
    });

});

module.exports = router;
