import { DataTypes } from "sequelize";
import db from "./database.js";

const User = db.define('User', {
      Name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      Email: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: true,
        },
        unique: true,
      },
      Password: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: true,
        }
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
      },
      Firstname: {
        type: DataTypes.STRING,
      },
      Lastname: {
        type: DataTypes.STRING
      },
      Address: {
        type: DataTypes.STRING
      }
    },{
      timestamps: false
    });
    db.sync
export default User;
