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
  res.render('register');
});


router.post('/', (req, res) => {
  // console.log(req.body);
  signUp.addUser(req.body)
    .then(user => {
      req.session.user_id = user.id;
      res.redirect('/quiz');
    })
    .catch((err) => {
      // console.log("error", err);
      return res.status(400).send(`ERROR : email address already exists`);
    });
});

module.exports = router;
