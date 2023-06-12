const Reg = require("../model/registration-model");
const Owner = require("../model/owner-model");
const Address = require("../model/address-model");
const Car = require("../model/car-model");
const { Op, Sequelize } = require("sequelize");
const { addDays, subDays } = require("date-fns");

class RegistrationController {
  getAll = () => {
    return async (req, res, next) => {
      if (req.userData.isAdmin || req.userData.RegCenterId) {
        const where = {};
        const ngayHetHan = req.query.date;
        if (req.userData.RegCenterId)
          where.RegCenterId = req.userData.RegCenterId;
        if (ngayHetHan) {
          if (parseInt(ngayHetHan) >= 0) {
            where.ngayHetHan = {
              [Sequelize.Op.between]: [
                Date.now() - 1,
                addDays(Date.now(), parseInt(ngayHetHan)),
              ],
            };
          } else {
            where.ngayHetHan = {
              [Sequelize.Op.between]: [
                subDays(Date.now(), -parseInt(ngayHetHan)),
                Date.now(),
              ],
            };
          }
        }
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const per_page = req.query.per_page ? parseInt(req.query.per_page) : 3;

        const { count, rows } = await Reg.findAndCountAll({
          where,
          offset: (page - 1) * page,
          limit: per_page,
        });
        res.status(200).json({
          success: true,
          data: rows,
          total: count,
        });
      }
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

        let car = await Car.findOne({
          where: { bienSo: req.body.car.bienSo },
        });
        if (!car) {
          car = await Car.create({
            OwnerId: req.body.owner.id,
            bienSo: req.body.car.bienSo,
            ngayCapXe: req.body.car.ngayCapXe,
          });
        }

        const reg = await Reg.create({
          OwnerId: req.body.owner.id,
          CarBienSo: req.body.car.bienSo,
          ngayHetHan: req.body.ngayHetHan,
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
