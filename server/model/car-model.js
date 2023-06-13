const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connect-db");

const Car = sequelize.define("Car", {
  bienSo: {
    type: DataTypes.CHAR,
    primaryKey: true,
    unique: true,
  },

  soMay: {
    type: DataTypes.CHAR,
    defaultValue: "0",
    allowNull: false,
  },

  loaiXe: {
    defaultValue: "0",
    type: DataTypes.CHAR,
    allowNull: false,
  },

  hieuXe: {
    type: DataTypes.TEXT,
    defaultValue: "0",
    allowNull: false,
  },

  ngayCapXe: {
    type: DataTypes.DATE,
    defaultValue: "2023-01-01",
    allowNull: false,
  },
});

module.exports = Car;
