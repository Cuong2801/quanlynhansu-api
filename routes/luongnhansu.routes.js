const express = require("express");
const router = express.Router();
const controller = require("../controllers/luongnhansu.controller");

/**
 * @swagger
 * tags:
 *   name: LuongNhanSu
 *   description: API quản lý lương nhân sự
 */

/**
 * @swagger
 * /api/luongnhansu:
 *   get:
 *     summary: Lấy danh sách lương nhân sự
 *     tags: [LuongNhanSu]
 *     responses:
 *       200:
 *         description: Trả về danh sách
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/luongnhansu/{id}:
 *   get:
 *     summary: Lấy thông tin lương nhân sự theo ID
 *     tags: [LuongNhanSu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trả về bản ghi theo ID
 */
router.get("/:id", controller.getById);

/**
 * @swagger
 * /api/luongnhansu:
 *   post:
 *     summary: Tạo bản ghi lương nhân sự
 *     tags: [LuongNhanSu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/luongnhansu/{id}:
 *   put:
 *     summary: Cập nhật lương nhân sự
 *     tags: [LuongNhanSu]
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
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/luongnhansu/{id}:
 *   delete:
 *     summary: Xoá bản ghi lương nhân sự
 *     tags: [LuongNhanSu]
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
