
// === File: routes/luonguser.routes.js ===
const express = require("express");
const router = express.Router();
const controller = require("../controllers/luonguser.controller");

/**
 * @swagger
 * tags:
 *   name: LuongUser
 *   description: API quản lý lương người dùng
 */

/**
 * @swagger
 * /api/luonguser:
 *   get:
 *     summary: Lấy tất cả lương người dùng
 *     tags: [LuongUser]
 *     responses:
 *       200:
 *         description: Danh sách lương người dùng
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/luonguser/{id}:
 *   get:
 *     summary: Lấy lương người dùng theo ID
 *     tags: [LuongUser]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thông tin lương người dùng
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /api/luonguser:
 *   post:
 *     summary: Tạo mới thông tin lương người dùng
 *     tags: [LuongUser]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               tongLuong:
 *                 type: number
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/luonguser/{id}:
 *   put:
 *     summary: Cập nhật thông tin lương người dùng
 *     tags: [LuongUser]
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
 *               tongLuong:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/luonguser/{id}:
 *   delete:
 *     summary: Xoá thông tin lương người dùng
 *     tags: [LuongUser]
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