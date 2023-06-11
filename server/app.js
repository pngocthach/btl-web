const express = require("express");
const app = express();
const router = express.Router();
const carRoutes = require("./routes/cars");
const ownerRoutes = require("./routes/owners");
const addressRoutes = require("./routes/address");
const regCenterRoutes = require("./routes/regCenter");
const registrationRoutes = require("./routes/registration");
const accountRoutes = require("./routes/account");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Account = require("./model/account-model");
const cors = require("cors");

const setAssociations = require("./model/associations")();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/cars", carRoutes);
app.use("/owners", ownerRoutes);
app.use("/address", addressRoutes);
app.use("/regCenter", regCenterRoutes);
app.use("/registration", registrationRoutes);
app.use("/account", accountRoutes);

//Error Handling
app.use((req, res, next) => {
  const error = new Error("Route not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
