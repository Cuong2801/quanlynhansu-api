const express = require("express");
const router = express.Router();
const TaiKhoanController = require("../controllers/taikhoan.controller");

router.get("/", TaiKhoanController.getAll);
router.post("/", TaiKhoanController.create);
router.put("/:id", TaiKhoanController.update);
router.delete("/:id", TaiKhoanController.delete);

module.exports = router;
