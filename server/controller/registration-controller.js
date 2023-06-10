const Reg = require("../model/registration-model");
const Owner = require("../model/owner-model");
const Address = require("../model/address-model");
const Car = require("../model/car-model");
const { Op, Sequelize } = require("sequelize");

class RegistrationController {
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
        const [owner, ownerCreated] = await Owner.findOrCreate({
          where: { id: req.body.owner.id },
          defaults: {
            id: req.body.owner.id,
            name: req.body.owner.name,
            phoneNum: req.body.owner.phoneNum,
            dob: req.body.owner.dob,
          },
        });
        await Address.findOrCreate({
          where: { OwnerId: req.body.owner.id },
          defaults: {
            thanhPho: req.body.address.thanhPho,
            quan: req.body.address.quan,
            phuong: req.body.address.phuong,
            chiTiet: req.body.address.chiTiet,
          },
        });
        const [car, carCreated] = await Car.findOrCreate({
          where: { bienSo: req.body.car.bienSo },
          default: {
            OwnerId: req.body.owner.id,
            bienSo: req.body.car.bienSo,
            ngayCapXe: req.body.car.ngayCapXe,
          },
        });
        const reg = await Reg.create({
          OwnerId: req.body.owner.id,
          CarBienSo: req.body.car.bienSo,
        });
        const address = await owner.getAddress();
        res.status(201).json({
          success: true,
          owner: owner,
          address,
          car,
          reg,
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

module.exports = new RegistrationController();
