// const Car = require("../model/car-model");

class CarController {
  getAll = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };

  create = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };

  findById = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };

  update = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };

  delete = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };
}

module.exports = new CarController();
