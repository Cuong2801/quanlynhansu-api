const express = require("express");
const router = express.Router();
const GioLamNhanSuController = require("../controllers/giolamnhansu.controller");

router.get("/", GioLamNhanSuController.getAll);
router.post("/", GioLamNhanSuController.create);
router.put("/:id", GioLamNhanSuController.update);
router.delete("/:id", GioLamNhanSuController.delete);

module.exports = router;

