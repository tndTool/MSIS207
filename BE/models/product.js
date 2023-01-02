import { DataTypes, STRING } from "sequelize";
import db from "./database.js";

const product = db.define("Product", {
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Image01: {
        type: DataTypes.STRING
    },
    Image02: {
        type: DataTypes.STRING,
    },
    Category: {
        type: DataTypes.STRING,
    },
    CategorySlug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Colors: {
        type: DataTypes.STRING,
        default: undefined,
    },
    Slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Size: {
        type: DataTypes.STRING,
        default: undefined,
    },
    Description: {
        type: DataTypes.STRING
    },
});

export default product;