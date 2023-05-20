const { Sequelize } = require("sequelize");
const sequelize = require("../connect-db");
const User = require("./user-model");
const Car = require("./car-model");
const Address = require("./address-model");
const RegCenter = require("./regCenter-model");
const Registration = require("./registration-model");
const Owner = require("./owner-model");
const Register_At = require("./owner_regAt_regCente");

const setAssociations = () => {
  RegCenter.hasOne(Address);
  Address.belongsTo(RegCenter);

  Car.hasMany(Registration);
  Registration.belongsTo(Car);

  Owner.hasMany(Car);
  Car.belongsTo(Owner);

  Owner.hasMany(Registration);
  Registration.belongsTo(Owner);

  Owner.hasMany(Address);
  Address.belongsTo(Owner);

  RegCenter.hasMany(Registration);
  Registration.belongsTo(RegCenter);

  Owner.belongsToMany(RegCenter, { through: Register_At });
  RegCenter.belongsToMany(Owner, { through: Register_At });

  sequelize
    .sync()
    .then((result) => {})
    .catch((err) => console.log(err));
};

module.exports = setAssociations;
