/*
 * All routes for login are defined here
 * Since this file is loaded in server.js into /login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Set up the middleware
const express = require('express');
const router = express.Router();
const getUser = require('../db/queries/login');
// const bcrypt = require("bcryptjs");


router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  res.render('login', { user });
});

//missing encryption for password

router.post('/', (req, res) => {
  // console.log(req.body);
  getUser.userLogin(req.body)
    .then((rows) => {
      // console.log(rows);
      if (req.body.password === rows[0].password) {
        // console.log("password matches");
        req.session.user_id = rows[0].id;
        return res.redirect('/');
      } else {
        return res.status(403).send("ERROR: please enter a correct password.");
      }
    });
});

module.exports = router;
