const express = require("express");
const router = express.Router();
const DonPhepController = require("../controllers/donphep.controller");

router.get("/", DonPhepController.getAll);
router.post("/", DonPhepController.create);
router.put("/:id", DonPhepController.update);
router.delete("/:id", DonPhepController.delete);

module.exports = router;
