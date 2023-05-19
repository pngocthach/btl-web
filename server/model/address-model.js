const { Sequelize, DataTypes } = require("sequelize");
// const Car = require("./car-model");

const mysql = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: { min: 0, max: 5 },
  }
);

const Address = mysql.define("Address", {
  city: {
    type: DataTypes.CHAR,
  },
});

module.exports = Address;
