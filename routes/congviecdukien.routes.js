const express = require("express");
const router = express.Router();
const controller = require("../controllers/congviecdukien.controller");

/**
 * @swagger
 * tags:
 *   name: CongViecDuKien
 *   description: API công việc dự kiến
 */

/**
 * @swagger
 * /api/congviecdukien:
 *   get:
 *     summary: Lấy danh sách công việc dự kiến
 *     tags: [CongViecDuKien]
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/congviecdukien/{id}:
 *   get:
 *     summary: Lấy công việc dự kiến theo ID
 *     tags: [CongViecDuKien]
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
 * /api/congviecdukien:
 *   post:
 *     summary: Tạo công việc dự kiến
 *     tags: [CongViecDuKien]
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
 * /api/congviecdukien/{id}:
 *   put:
 *     summary: Cập nhật công việc dự kiến
 *     tags: [CongViecDuKien]
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
 * /api/congviecdukien/{id}:
 *   delete:
 *     summary: Xoá công việc dự kiến
 *     tags: [CongViecDuKien]
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
