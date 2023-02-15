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
const bcrypt = require("bcryptjs");

router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  res.render('register', { user });
});

router.post('/', (req, res) => {
  const queryParams = { ...req.body };
  queryParams.password = bcrypt.hashSync(req.body.password, 10);
  signUp.addUser(queryParams)
    .then(user => {
      req.session.user = user.id;
      res.redirect('/');
    })
    .catch(() => {
      return res.status(400).send(`ERROR : email address already exists`);
    });
});

module.exports = router;
