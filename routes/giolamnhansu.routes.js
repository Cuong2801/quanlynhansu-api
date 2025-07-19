const express = require("express");
const router = express.Router();
const controller = require("../controllers/giolamnhansu.controller");

/**
 * @swagger
 * tags:
 *   name: GioLamNhanSu
 *   description: API giờ làm nhân sự
 */

/**
 * @swagger
 * /api/giolamnhansu:
 *   get:
 *     summary: Lấy danh sách giờ làm
 *     tags: [GioLamNhanSu]
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/giolamnhansu/{id}:
 *   get:
 *     summary: Lấy giờ làm theo ID
 *     tags: [GioLamNhanSu]
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
 * /api/giolamnhansu:
 *   post:
 *     summary: Tạo giờ làm mới
 *     tags: [GioLamNhanSu]
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
 * /api/giolamnhansu/{id}:
 *   put:
 *     summary: Cập nhật giờ làm
 *     tags: [GioLamNhanSu]
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
 * /api/giolamnhansu/{id}:
 *   delete:
 *     summary: Xoá giờ làm
 *     tags: [GioLamNhanSu]
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
