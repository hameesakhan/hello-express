const createHttpError = require("http-errors");
const Post = require("../../Models/post")

function index(req, res, next) {
    Post.find({}, function (err, posts) {
        res.send({ posts });
    });
}

function store(req, res, next) {
    let post = new Post(req.body);

    Post.insertMany([post]);

    res.send({ post });
}

function show(req, res, next) {
    Post.findById(req.params.postId, (err, post) => {
        if (post) {
            res.send({ post });
        }
    }).catch(err => {
        res.send({ err })
    })
}

function update(req, res, next) {
    Post.findById(req.params.postId, (err, post) => {
        if (post) {
            post.title = req.body.title;
            post.body = req.body.body;
            post.userId = req.body.userId;
            post.save();
            res.send({ post });
        }
    }).catch(err => {
        res.send({ err })
    })
}

function destory(req, res, next) {
    Post.findByIdAndDelete(req.params.postId, (err) => {
        res.send({ success: true });
    })
}

module.exports = { index, store, show, update, destory }