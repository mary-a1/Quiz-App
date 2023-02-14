/*
 * All routes for registering/signing up are defined here
 * Since this file is loaded in server.js into /register,
 *   these routes are mounted onto /register
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const signUp = require('../db/queries/register');

router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  res.render('register', { user });
});


router.post('/', (req, res) => {
  // console.log(req.body);
  signUp.addUser(req.body)
    .then(user => {
      req.session.user = user.id;
      res.redirect('/');
    })
    .catch((err) => {
      // console.log("error", err);
      return res.status(400).send(`ERROR : email address already exists`);
    });
});

module.exports = router;
