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
const bcrypt = require("bcryptjs");


router.get('/', (req, res) => {
  // Check if logged in for header
  const user = req.session.user;
  const loginFail = req.query.error === 'loginfailed';
  res.render('login', { user, loginFail });
});

router.post('/', (req, res) => {
  getUser.userLogin(req.body)
    .then((rows) => {
      if ((rows[0] !== undefined) && bcrypt.compareSync(req.body.password, rows[0].password)) {
        req.session.user = rows[0].id;
        return res.redirect('/');
      } else {
        return res.redirect('/login?error=loginfailed');
      }
    });
});

module.exports = router;
