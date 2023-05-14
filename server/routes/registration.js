const express = require("express");
const router = express.Router();
const RegistrationController = require("../controller/registration-controller");

router.post("/signup", RegistrationController.signup());

router.post("/login", RegistrationController.login());

router.patch("/update/:id", RegistrationController.update());

router.get("/loggedInUser", RegistrationController.loggedInUser());

router.delete("/:id", RegistrationController.delete());

module.exports = router;
