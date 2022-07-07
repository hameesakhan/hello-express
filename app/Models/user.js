
const mongoose = require('../../config/database')
const { Schema } = require('../../config/database');

const User = mongoose.model('User', new Schema({
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false },
}));

module.exports = User;