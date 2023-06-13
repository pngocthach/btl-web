const express = require("express");
const router = express.Router();
const RegistrationController = require("../controller/registration-controller");
const auth = require("../middleware/check-auth");
const { query, validationResult } = require("express-validator");
const { regQueryValid, validate } = require("../middleware/validation");

router.get(
  "/",
  regQueryValid(),
  validate,
  auth,
  RegistrationController.getAll()
);

router.get("/regRecord", auth, RegistrationController.getRecord());

router.post("/", auth, RegistrationController.create());

router.get("/:id", auth, RegistrationController.findById());

// router.patch("/:id", RegistrationController.update());

// router.delete("/:id", RegistrationController.delete());

module.exports = router;
