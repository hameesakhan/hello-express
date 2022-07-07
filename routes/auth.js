'use strict'

/**
 * Module dependencies.
 */

var express = require('express');
var router = express.Router();

const { login, restricted, logout, showLogin } = require('../controllers/auth.js');
const { restrict } = require('./middlewares/routeMiddlewares.js');

router.get('/', function (req, res) {
  res.redirect('/auth/login');
});

router.get('/login', showLogin);
router.post('/login', login);
router.get('/restricted', restrict, restricted);
router.get('/logout', logout);

module.exports = router;
