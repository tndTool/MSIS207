import { DataTypes } from "sequelize";
import db from "./database.js";

const Employee = db.define('employee', {
      Name: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: { 
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
      },
      Phone: { 
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
      },
      Birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },{
      timestamps: false
    });
    db.sync
export default Employee;
