
const mongoose = require('../../config/database')
const { Schema } = require('../../config/database');

const Todo = mongoose.model('Todo', new Schema({
    title: { type: String, required: true, unique: false },
    completed: { type: Boolean, required: false, unique: false },
    userId: { type: Number, required: false, unique: false },
}));

module.exports = Todo;