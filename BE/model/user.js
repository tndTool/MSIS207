const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  Name: { type: String },
  Email: { type: String },
  Password: { type: String },
});

module.exports = mongoose.model("User", User);
