'use strict'


var express = require('express');
var router = express.Router();
const { login, restricted, logout, showLogin } = require('../app/Http/Controllers/auth.js');
const { index: indexUsers } = require('../app/Http/Controllers/user.js');
const { restrict } = require('../app/Http/Middleware/auth.js');
const { AUTH_PREFIX } = require('../app/Providers/route.js');

/* GET home page. */
router.get('/', function (req, res, next) { res.render('index', { title: 'Express' }); });

router.get(AUTH_PREFIX.concat('/'), function (req, res) { res.redirect(AUTH_PREFIX.concat('/login')); });
router.get(AUTH_PREFIX.concat('/login'), showLogin);
router.post(AUTH_PREFIX.concat('/login'), login);
router.get(AUTH_PREFIX.concat('/restricted'), restrict, restricted);
router.get(AUTH_PREFIX.concat('/logout'), logout);

/* GET users listing. */
router.get('/users', indexUsers);

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

module.exports = router;
