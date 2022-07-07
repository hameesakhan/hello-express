const createHttpError = require("http-errors");
const User = require("../../Models/user")

function index(req, res, next) {
    User.find({}, function (err, users) {
        res.send({ users });
    });
}

function store(req, res, next) {
    let user = new User(req.body);

    User.insertMany([user]);

    res.send({ user });
}

function show(req, res, next) {
    User.findById(req.params.userId, (err, user) => {
        if (user) {
            res.send({ user });
        }
    }).catch(err => {
        res.send({ err })
    })
}

function update(req, res, next) {
    User.findById(req.params.userId, (err, user) => {
        if (user) {
            user.name = req.body.name;
            user.save();
            res.send({ user });
        }
    }).catch(err => {
        res.send({ err })
    })
}

function destory(req, res, next) {
    User.findByIdAndDelete(req.params.userId, (err) => {
        res.send({ success: true });
    })
}

module.exports = { index, store, show, update, destory }