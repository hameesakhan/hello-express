
const mongoose = require('../../config/database')
const { Schema } = require('../../config/database');

const User = mongoose.model('User', new Schema({ name: String }));
module.exports = User;