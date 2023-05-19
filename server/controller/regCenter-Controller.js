// const Car = require("../model/car-model");

class RegCenterController {
  signup = () => {
    return (req, res, next) => {
      res.status(200).json({
        success: true,
      });
    };
  };

  login = () => {
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

  loggedInUser = () => {
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

module.exports = new RegCenterController();
