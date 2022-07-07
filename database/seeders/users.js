const User = require("../../app/Models/user");
const { v4: uuidv4 } = require('uuid');

User.createCollection();
User.insertMany([
    { name: 'ABC', email: 'abc@def.gh', password: 'password' },
    { name: 'IJK', email: 'ijk@lmn.op', password: 'password' },
], function (error, docs) {
    console.log(error, docs);
})