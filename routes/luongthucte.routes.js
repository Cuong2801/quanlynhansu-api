const express = require("express");
const router = express.Router();
const LuongThucTeController = require("../controllers/luongthucte.controller");

router.get("/", LuongThucTeController.getAll);
router.post("/", LuongThucTeController.create);
router.put("/:id", LuongThucTeController.update);
router.delete("/:id", LuongThucTeController.delete);

module.exports = router;
