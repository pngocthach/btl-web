const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connect-db");

const User = sequelize.define("User", {
  fname: {
    type: DataTypes.CHAR,
  },

  lname: {
    type: DataTypes.CHAR,
  },

  phone: {
    type: DataTypes.CHAR,
  },

  dob: {
    type: DataTypes.DATE,
  },

  role: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
