const createHttpError = require("http-errors");
const Todo = require("../../Models/todo")

function index(req, res, next) {
    Todo.find({}, function (err, todos) {
        res.send({ todos });
    });
}

function store(req, res, next) {
    let todo = new Todo(req.body);

    Todo.insertMany([todo]);

    res.send({ todo });
}

function show(req, res, next) {
    Todo.findById(req.params.todoId, (err, todo) => {
        if (todo) {
            res.send({ todo });
        }
    }).catch(err => {
        res.send({ err })
    })
}

function update(req, res, next) {
    Todo.findById(req.params.todoId, (err, todo) => {
        if (todo) {
            todo.title = req.body.title;
            todo.body = req.body.body;
            todo.userId = req.body.userId;
            todo.save();
            res.send({ todo });
        }
    }).catch(err => {
        res.send({ err })
    })
}

function destory(req, res, next) {
    Todo.findByIdAndDelete(req.params.todoId, (err) => {
        res.send({ success: true });
    })
}

module.exports = { index, store, show, update, destory }