const mongoose = require("mongoose");

mongoose.connection(
  process.env.MONGODB_URI || "mongodb://localhost:27017/demo-business-site"
);

module.exports = mongoose.connection;
