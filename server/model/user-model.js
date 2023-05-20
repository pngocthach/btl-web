const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connect-db");

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.CHAR,
  },

  password: {
    type: DataTypes.CHAR,
  },

  role: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
