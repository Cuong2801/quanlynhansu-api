const expressChiTiet = require("express");
const routerChiTiet = expressChiTiet.Router();
const chiTietUserController = require("../controllers/chitietusers.controller");

/**
 * @swagger
 * tags:
 *   name: ChiTietUsers
 *   description: API chi tiết người dùng
 */

/**
 * @swagger
 * /api/chitietuser:
 *   get:
 *     summary: Lấy danh sách người dùng chi tiết
 *     tags: [ChiTietUsers]
 *     responses:
 *       200:
 *         description: Danh sách chi tiết người dùng
 */
routerChiTiet.get("/", chiTietUserController.getAll);

/**
 * @swagger
 * /api/chitietuser/{id}:
 *   get:
 *     summary: Lấy người dùng chi tiết theo ID
 *     tags: [ChiTietUsers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dữ liệu chi tiết người dùng
 */
routerChiTiet.get("/:id", chiTietUserController.getById);

/**
 * @swagger
 * /api/chitietuser:
 *   post:
 *     summary: Tạo người dùng chi tiết
 *     tags: [ChiTietUsers]
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
routerChiTiet.post("/", chiTietUserController.create);

/**
 * @swagger
 * /api/chitietuser/{id}:
 *   put:
 *     summary: Cập nhật người dùng chi tiết
 *     tags: [ChiTietUsers]
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
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
routerChiTiet.put("/:id", chiTietUserController.update);

/**
 * @swagger
 * /api/chitietuser/{id}:
 *   delete:
 *     summary: Xoá người dùng chi tiết
 *     tags: [ChiTietUsers]
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
routerChiTiet.delete("/:id", chiTietUserController.delete);

module.exports = routerChiTiet;
