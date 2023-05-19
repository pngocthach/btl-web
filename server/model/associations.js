const { Sequelize } = require("sequelize");
const sequelize = require("../connect-db");
const User = require("./user-model");
const Car = require("./car-model");

const setAssociations = () => {
  User.hasMany(Car);
  Car.belongsTo(User);

  sequelize
    .sync({ force: true })
    .then((result) => {})
    .catch((err) => console.log(err));
};

module.exports = setAssociations;
