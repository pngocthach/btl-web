const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connect-db");

const Car = sequelize.define("Car", {
  bienSo: {
    type: DataTypes.CHAR,
  },

  // soMay: {
  //   type: DataTypes.CHAR,
  // },

  // loaiXe: {
  //   type: DataTypes.CHAR,
  // },

  // hieuXe: {
  //   type: DataTypes.TEXT,
  // },

  ngayCapXe: {
    type: DataTypes.DATE,
  },
});

module.exports = Car;
