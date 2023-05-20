const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../connect-db");

const Registration = sequelize.define("Registration", {});

module.exports = Registration;
