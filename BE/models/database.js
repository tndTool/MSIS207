import { Sequelize } from "sequelize";

const db = new Sequelize('webdev', 'root', 'Tiensi1408', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:');
  }

db.sync();

export default db;