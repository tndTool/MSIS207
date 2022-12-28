import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
    Image01: {
        type: String
    },
    Image02: {
        type: String,
    },
    Category: {
        type: String,
    },
    CategorySlug: {
        type: String,
        required: true,
    },
    Colors: {
        type: Array,
        default: undefined,
    },
    Slug: {
        type: String,
        required: true,
    },
    Size: {
        type: Array,
        default: undefined,
    },
    Description: {
        type: String
    },
});
export default mongoose.model('Product', Product);