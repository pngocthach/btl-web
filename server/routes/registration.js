const express = require("express");
const router = express.Router();
const RegistrationController = require("../controller/registration-controller");

router.get("/", RegistrationController.getAll());

router.post("/", RegistrationController.create());

router.get("/:id", RegistrationController.findById());

router.patch("/:id", RegistrationController.update());

router.delete("/:id", RegistrationController.delete());

module.exports = router;
