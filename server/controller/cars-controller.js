const Car = require("../model/car-model");

class CarController {
  getAll = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };

  create = () => {
    return async (req, res, next) => {
      try {
        const car = await Car.create({
          bienSo: req.body.bienSo,
        });
        console.log(car.toJSON());
        res.status(201).json({
          success: true,
          car: car,
        });
      } catch (err) {
        res.status(422).json(err.errors);
      }
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
