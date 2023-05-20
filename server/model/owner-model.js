const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connect-db");

const Owner = sequelize.define("Owner", {
  fname: {
    type: DataTypes.CHAR,
  },
  lname: {
    type: DataTypes.CHAR,
  },
  phoneNum: {
    type: DataTypes.CHAR,
  },
  dob: {
    type: DataTypes.DATE,
  },
});

module.exports = Owner;
