const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

res.render('homepage', {
  posts,
  loggedIn: req.session.loggedIn
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

res.render('single-post', {
  post,
  loggedIn: req.session.loggedIn
});

module.exports = router;