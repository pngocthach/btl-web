const express = require("express");
const app = express();
const router = express.Router();
const carRoutes = require("./routes/cars");
const ownerRoutes = require("./routes/owners");
const addressRoutes = require("./routes/address");
const regCenterRoutes = require("./routes/regCenter");
const registrationRoutes = require("./routes/registration");

app.use("/cars", carRoutes);
app.use("/owners", ownerRoutes);
app.use("/address", addressRoutes);
app.use("/regCenter", regCenterRoutes);
app.use("/registration", registrationRoutes);

module.exports = app;
