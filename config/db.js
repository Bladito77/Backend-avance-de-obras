// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   process.env.DATABASE_URL,

//   {
//     host: process.env.DB_HOST,
//     //port: process.env.DB_PORT, //
//     //port: Number(process.env.DB_PORT),
//     dialect: 'mysql',
//     logging: false
//   }
// );

// module.exports = sequelize;
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    }
  }
});

module.exports = sequelize;


