const express = require("express");
const router = express.Router();
const RegCenterController = require("../controller/regCenter-controller");

router.post("/signup", RegCenterController.signup());

router.post("/login", RegCenterController.login());

router.patch("/update/:id", RegCenterController.update());

router.get("/loggedInUser", RegCenterController.loggedInUser());

router.delete("/:id", RegCenterController.delete());

module.exports = router;
