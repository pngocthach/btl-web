const express = require("express");
const router = express.Router();
const Account = require("../controller/account-controller");
const checkAuth = require("../middleware/check-auth");

router.post("/signup", checkAuth, Account.signup());

router.post("/login", Account.login());

router.patch("/update/:id", checkAuth, Account.update());

router.get("/loggedInUser", Account.loggedInUser());

router.get("/getAll", checkAuth, Account.getAll());

router.delete("/delete/:id", checkAuth, Account.delete());

module.exports = router;
