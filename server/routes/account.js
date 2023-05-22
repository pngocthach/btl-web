const express = require("express");
const router = express.Router();
const Account = require("../controller/account-controller");

router.post("/signup", Account.signup());

router.post("/login", Account.login());

router.patch("/update/:id", Account.update());

router.get("/loggedInUser", Account.loggedInUser());

module.exports = router;
