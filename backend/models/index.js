// Stores the Postgres tables as models that are used in the program. Import them all from the index file
const Post = require("./postModel");
// const User = require("./userModel");
// const Comment = require("./commentModel");

Post.sync();
// User.sync();
// Comment.sync();

module.exports = { Post };
