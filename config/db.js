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
require('dotenv').config();
console.log("🚀 Variables cargadas:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   }
    // }
  }
);

module.exports = sequelize;

// module.exports = sequelize;
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'mysql',
//   logging: false,
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     }
//   }
// });

// module.exports = sequelize;


