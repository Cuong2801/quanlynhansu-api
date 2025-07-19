// === File: routes/luongthucte.routes.js ===
const express = require("express");
const router = express.Router();
const controller = require("../controllers/luongthucte.controller");

/**
 * @swagger
 * tags:
 *   name: LuongThucTe
 *   description: API quản lý lương thực tế
 */

/**
 * @swagger
 * /api/luongthucte:
 *   get:
 *     summary: Lấy danh sách lương thực tế
 *     tags: [LuongThucTe]
 *     responses:
 *       200:
 *         description: Danh sách lương thực tế
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/luongthucte:
 *   post:
 *     summary: Tạo bản ghi lương thực tế mới
 *     tags: [LuongThucTe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               thangNam:
 *                 type: string
 *                 example: "2025-07-01"
 *               tongGioLam:
 *                 type: integer
 *               luongDuKien:
 *                 type: integer
 *               luongThucTe:
 *                 type: integer
 *               ngayTinhLuong:
 *                 type: string
 *                 example: "2025-07-31"
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/luongthucte/{id}:
 *   put:
 *     summary: Cập nhật lương thực tế
 *     tags: [LuongThucTe]
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
 *               user_id:
 *                 type: integer
 *               thangNam:
 *                 type: string
 *               tongGioLam:
 *                 type: integer
 *               luongDuKien:
 *                 type: integer
 *               luongThucTe:
 *                 type: integer
 *               ngayTinhLuong:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/luongthucte/{id}:
 *   delete:
 *     summary: Xoá lương thực tế
 *     tags: [LuongThucTe]
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