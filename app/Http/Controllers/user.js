const User = require("../../Models/user")

function index(req, res, next) {
    User.find({}, function (err, users) {
        res.send({ users: users.map(user => { return { id: user.id, name: user.name } }) });
    });
}

module.exports = { index }