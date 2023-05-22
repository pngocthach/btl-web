const Account = require("../model/account-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AccountController {
  signup = () => {
    return async (req, res, next) => {
      if (req.body.password !== req.body.confirm_password) {
        return res.status(422).json([
          { path: "password", message: "Passwords do not match" },
          { path: "confirm_password", message: "Passwords do not match" },
        ]);
      }

      try {
        const user = await Account.create({
          userName: req.body.userName,
          password: req.body.password,
          RegCenterId: req.body.regCenterId,
        });
        res.status(200).json({
          success: true,
          user: user,
        });
      } catch (err) {
        res.status(422).json(err.errors);
      }
    };
  };

  login = () => {
    return async (req, res, next) => {
      const msg = "Something is wrong with your email or password.";
      const errors = [
        { path: "password", message: msg },
        { path: "email", msg: msg },
      ];
      const resp = { success: false, errors: errors };
      const user = await Account.findOne({
        where: { userName: req.body.userName },
      });
      const password = req.body.password;
      if (user) {
        const passed = await bcrypt.compare(password, user.password);
        if (passed) {
          const signVals = user.toJSON();
          delete signVals.password;
          const token = await jwt.sign(signVals, process.env.JWT_KEY, {
            expiresIn: "30d",
          });
          resp.success = true;
          resp.errors = [];
          resp.token = token;
        }
      }
      res.status(200).json(resp);
    };
  };

  update = () => {
    return async (req, res, next) => {
      const resp = { success: false, user: null };
      const userId = req.params.id;
      const user = await Account.findByPk(userId);
      if (user) {
        user.userName = req.body.userName;
        if (req.body.password) {
          user.updatePassword = true;
          user.password = req.body.password;
        }
        await user.save();
        await user.reload();
        resp.success = true;
        resp.user = user;
      }
      res.status(200).json(resp);
    };
  };

  loggedInUser = () => {
    return async (req, res, next) => {
      const resp = { success: false, user: null, msg: "User not found" };
      const token = req.headers.authorization
        ? req.headers.authorization.split(" ")[1]
        : "";
      // console.log(req.headers);
      const decoded = await jwt.verify(token, process.env.JWT_KEY);
      const user = await Account.findByPk(decoded.id);
      const data = user.toJSON();
      delete data.password;
      resp.success = true;
      resp.user = data;
      resp.msg = "User is logged in";
      res.status(200).json(resp);
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

module.exports = new AccountController();
