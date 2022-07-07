
const mongoose = require('../../config/database')
const { Schema } = require('../../config/database');

const Post = mongoose.model('Post', new Schema({
    title: { type: String, required: true, unique: false },
    body: { type: String, required: false, unique: false },
    userId: { type: Number, required: false, unique: false },
}));

module.exports = Post;