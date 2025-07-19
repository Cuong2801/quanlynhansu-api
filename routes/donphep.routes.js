const express = require("express");
const router = express.Router();
const controller = require("../controllers/donphep.controller");

/**
 * @swagger
 * tags:
 *   name: DonPhep
 *   description: API đơn phép
 */

/**
 * @swagger
 * /api/donphep:
 *   get:
 *     summary: Lấy danh sách đơn phép
 *     tags: [DonPhep]
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/donphep/{id}:
 *   get:
 *     summary: Lấy đơn phép theo ID
 *     tags: [DonPhep]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /api/donphep:
 *   post:
 *     summary: Tạo đơn phép
 *     tags: [DonPhep]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/donphep/{id}:
 *   put:
 *     summary: Cập nhật đơn phép
 *     tags: [DonPhep]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/donphep/{id}:
 *   delete:
 *     summary: Xoá đơn phép
 *     tags: [DonPhep]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Xoá thành công
 */
router.delete("/:id", controller.delete);

module.exports = router;
