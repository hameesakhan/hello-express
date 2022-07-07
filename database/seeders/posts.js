const Post = require("../../app/Models/post");
const { v4: uuidv4 } = require('uuid');

Post.createCollection();
Post.insertMany([
    { title: "ASDLKJA", body: 'fsadj lkfjdsakf jdsafkjdslafj askdljfl', userId: null },
    { title: "fdasf salf ", body: 'fdsja klfsadjfk dsaflkj aslfjs a', userId: null },
    { title: "fdjsal kfdsakfl jsa", body: 'fdj safdusafi odsaiuf asu', userId: null },
], function (error, docs) {
    console.log(error, docs);
})