const express = require("express");
const router = express.Router();
const LichSuThayDoiController = require("../controllers/lichsuthaydoi.controller");

router.get("/", LichSuThayDoiController.getAll);
router.post("/", LichSuThayDoiController.create);
router.put("/:id", LichSuThayDoiController.update);
router.delete("/:id", LichSuThayDoiController.delete);

module.exports = router;

