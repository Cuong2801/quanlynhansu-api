const express = require("express");
const router = express.Router();
const ChiTietUsersController = require("../controllers/chitietusers.controller");

router.get("/", ChiTietUsersController.getAll);
router.post("/", ChiTietUsersController.create);
router.put("/:id", ChiTietUsersController.update);
router.delete("/:id", ChiTietUsersController.delete);

module.exports = router;
