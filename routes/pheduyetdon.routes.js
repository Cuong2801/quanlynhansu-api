const express = require("express");
const router = express.Router();
const PheDuyetDonController = require("../controllers/pheduyetdon.controller");

router.get("/", PheDuyetDonController.getAll);
router.post("/", PheDuyetDonController.create);
router.put("/:id", PheDuyetDonController.update);
router.delete("/:id", PheDuyetDonController.delete);

module.exports = router;
