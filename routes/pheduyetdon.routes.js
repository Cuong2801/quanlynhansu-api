// === File: routes/pheduyetdon.routes.js ===
const express = require("express");
const router = express.Router();
const controller = require("../controllers/pheduyetdon.controller");

/**
 * @swagger
 * tags:
 *   name: PheDuyetDon
 *   description: API phê duyệt đơn nghỉ
 */

/**
 * @swagger
 * /api/pheduyetdon:
 *   get:
 *     summary: Lấy danh sách phê duyệt đơn nghỉ
 *     tags: [PheDuyetDon]
 *     responses:
 *       200:
 *         description: Danh sách đơn phê duyệt
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/pheduyetdon:
 *   post:
 *     summary: Tạo mới đơn phê duyệt
 *     tags: [PheDuyetDon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               donPhepId:
 *                 type: integer
 *               nguoiPheDuyet:
 *                 type: string
 *               trangThai:
 *                 type: string
 *               lyDo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/pheduyetdon/{id}:
 *   put:
 *     summary: Cập nhật đơn phê duyệt
 *     tags: [PheDuyetDon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trangThai:
 *                 type: string
 *               lyDo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/pheduyetdon/{id}:
 *   delete:
 *     summary: Xoá đơn phê duyệt
 *     tags: [PheDuyetDon]
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
