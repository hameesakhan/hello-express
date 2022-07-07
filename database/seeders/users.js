const User = require("../../app/Models/user");
const { v4: uuidv4 } = require('uuid');

User.createCollection();
User.insertMany([
    { id: uuidv4(), name: 'ABC' },
    { id: uuidv4(), name: 'DEF' },
], function (error, docs) {
    console.log(error, docs);
})