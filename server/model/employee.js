import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Employee = new Schema({
      Name: { 
        type: String,
        required: true,
      },
      Gender: {
        type: String,
        required: true,
      },
      Email: { 
        type: String, 
        required: true,
        unique: true,
      },
      Phone: { 
        type: String, 
        required: true,
        unique: true,
      },
      Birthday: {
        type: Date,
        required: true,
      },
      Address: {
        type: String,
        required: true,
      }
    },{
      timestamps: false
    });

export default mongoose.model('Employee', Employee);