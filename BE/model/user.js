// This model using for mongoose. While app is running on mysql as default 
// if u want to using mongoose for app please change folder imported in controllers from ../models -> ../model 
// and change code in that right for your model
// u also create connnection in app.js for using mongoose

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
