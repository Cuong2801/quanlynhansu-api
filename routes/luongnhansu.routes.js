const express = require("express");
const router = express.Router();
const LuongNhanSuController = require("../controllers/luongnhansu.controller");

router.get("/", LuongNhanSuController.getAll);
router.post("/", LuongNhanSuController.create);
router.put("/:id", LuongNhanSuController.update);
router.delete("/:id", LuongNhanSuController.delete);

module.exports = router;
