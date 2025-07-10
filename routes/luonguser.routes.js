const express = require("express");
const router = express.Router();
const LuongUserController = require("../controllers/luonguser.controller");

router.get("/", LuongUserController.getAll);
router.post("/", LuongUserController.create);
router.put("/:id", LuongUserController.update);
router.delete("/:id", LuongUserController.delete);

module.exports = router;
