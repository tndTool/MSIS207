import db from './database.js';
import { DataTypes } from 'sequelize';

const Bill = db.define('Bill', {
        billsID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        District: {
            type: DataTypes.STRING,
            requird: true,
        },
        Ward: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        Status: {
            type: DataTypes.STRING,
        },
        Product: {
            type: DataTypes.JSON,
            
        },
        Total: {
            type: DataTypes.STRING,
        }
    })
    db.sync();
export default Bill
