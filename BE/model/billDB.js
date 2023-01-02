// This model using for mongoose. While app is running on mysql as default 
// if u want to using mongoose for app please change folder imported in controllers from ../models -> ../model 
// and change code in that right for your model
// u also create connnection in app.js for using mongoose

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productDetail = new Schema({
    productName: {
        type: String,
    },
    productSize: {
        type: String,
    }
})

const Bill = new Schema({
        billsID: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        Phone: {
            type: String,
            required: true,
        },
        City: {
            type: String,
            required: true,
        },
        District: {
            type: String,
            requird: true,
        },
        Ward: {
            type: String,
            required: true,
        },
        Street: {
            type: String,
            required: true,
        }, 
        Status: {
            type: String,
        },
        Product: [productDetail],
        Total: {
            type: String,
        }
    },
    {
        timestamps: true,
    },
    {

    }
);

export default mongoose.model("Bill", Bill);