require('dotenv/config');
const { Sequelize } = require('sequelize');

const db = new Sequelize(
   process.env.DATABASE_NAME,
   process.env.DATABASE_USER,
   process.env.DATABASE_PASS,
   {
      dialect:'postgres',
      host: process.env.HOST,
      port: process.env.DATABASE_PORT
   }
);

module.exports = {db}