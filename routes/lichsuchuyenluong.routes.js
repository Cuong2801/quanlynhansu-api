const express = require("express");
const router = express.Router();
const LichSuChuyenLuongController = require("../controllers/lichsuchuyenluong.controller");

router.get("/", LichSuChuyenLuongController.getAll);
router.post("/", LichSuChuyenLuongController.create);
router.put("/:id", LichSuChuyenLuongController.update);
router.delete("/:id", LichSuChuyenLuongController.delete);

module.exports = router;
