import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema({
  Name: { 
    type: String, 
    required: true,
  },
  Email: { 
    type: String, 
    required: true,
    unique:true,
  },
  Password: { 
    type: String, 
    required: true,
  },
  isAdmin: {
    type: Boolean,
  },
  Firstname: {type: String},
  Lastname: {type: String}
});

export default mongoose.model("User", User);
