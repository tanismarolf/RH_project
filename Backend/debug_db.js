const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  'David DAUDIER',
  '',
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    // Try to create a database
    try {
        await sequelize.query("CREATE DATABASE odva_db_new");
        console.log("Create database success");
    } catch (err) {
        console.error("Create database failed:", err.message);
    }

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
})();
