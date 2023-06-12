const express = require("express");
const router = express.Router();
const RegistrationController = require("../controller/registration-controller");
const auth = require("../middleware/check-auth");
const { query, validationResult } = require("express-validator");

router.get(
  "/",
  [query("page").isInt(), query("per_page").isInt()],
  (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ error: err.array() });
    } else {
      next();
    }
  },
  auth,
  RegistrationController.getAll()
);

router.post("/", RegistrationController.create());

router.get("/:id", RegistrationController.findById());

router.patch("/:id", RegistrationController.update());

router.delete("/:id", RegistrationController.delete());

module.exports = router;
