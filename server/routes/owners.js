const express = require("express");
const router = express.Router();
const OwnersController = require("../controller/ownersController");

router.get("/", OwnersController.getAll());

router.post("/", OwnersController.create());

router.get("/:id", OwnersController.findById());

router.patch("/:id", OwnersController.update());

router.delete("/:id", OwnersController.delete());

module.exports = router;
