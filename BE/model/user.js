import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  Name: { type: String },
  Email: { type: String },
  Password: { type: String },
  Firstname: {type: String},
  Lastname: {type: String}
});

export default mongoose.model("User", User);
