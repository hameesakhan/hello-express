'use strict'


var express = require('express');
var router = express.Router();
const { AUTH_PREFIX } = require('../app/Providers/route.js');
const { restrict } = require('../app/Http/Middleware/auth.js');


/* GET home page. */
router.get('/', function (req, res, next) { res.render('index', { title: 'Express' }); });

const { login, restricted, logout, showLogin } = require('../app/Http/Controllers/auth.js');
router.get(AUTH_PREFIX.concat('/'), function (req, res) { res.redirect(AUTH_PREFIX.concat('/login')); });
router.get(AUTH_PREFIX.concat('/login'), showLogin);
router.post(AUTH_PREFIX.concat('/login'), login);
router.get(AUTH_PREFIX.concat('/restricted'), restrict, restricted);
router.get(AUTH_PREFIX.concat('/logout'), logout);

const { index: indexUsers, store: storeUser, show: showUser, update: updateUser, destory: destoryUser } = require('../app/Http/Controllers/user.js');
router.get('/users', indexUsers);
router.post('/users', storeUser);
router.get('/users/:userId', showUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', destoryUser);

const { index: indexPosts, store: storePost, show: showPost, update: updatePost, destory: destoryPost } = require('../app/Http/Controllers/post.js');
router.get('/posts', indexPosts);
router.post('/posts', storePost);
router.get('/posts/:postId', showPost);
router.put('/posts/:postId', updatePost);
router.delete('/posts/:postId', destoryPost);

const { index: indexTodos, store: storeTodo, show: showTodo, update: updateTodo, destory: destoryTodo } = require('../app/Http/Controllers/todo.js');
router.get('/todos', indexTodos);
router.post('/todos', storeTodo);
router.get('/todos/:todoId', showTodo);
router.put('/todos/:todoId', updateTodo);
router.delete('/todos/:todoId', destoryTodo);

module.exports = router;
