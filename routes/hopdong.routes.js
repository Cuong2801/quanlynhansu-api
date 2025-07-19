const express = require("express");
const router = express.Router();
const controller = require("../controllers/hopdong.controller");

/**
 * @swagger
 * tags:
 *   name: HopDong
 *   description: API quản lý hợp đồng nhân viên
 */

/**
 * @swagger
 * /api/hopdong:
 *   get:
 *     summary: Lấy tất cả hợp đồng
 *     tags: [HopDong]
 *     responses:
 *       200:
 *         description: Danh sách hợp đồng
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/hopdong:
 *   post:
 *     summary: Tạo hợp đồng mới
 *     tags: [HopDong]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - loaiHopDong
 *               - ngayKy
 *               - ngayHetHan
 *               - trangThai
 *             properties:
 *               user_id:
 *                 type: integer
 *               loaiHopDong:
 *                 type: string
 *               ngayKy:
 *                 type: string
 *                 format: date
 *               ngayHetHan:
 *                 type: string
 *                 format: date
 *               trangThai:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.createContract);

/**
 * @swagger
 * /api/hopdong/{id}:
 *   delete:
 *     summary: Xoá hợp đồng theo id
 *     tags: [HopDong]
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
router.delete("/:id", controller.deleteContract);

/**
 * @swagger
 * /api/hopdong/{userId}/pdf:
 *   get:
 *     summary: Tải hợp đồng PDF theo userId
 *     tags: [HopDong]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trả về file PDF
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
router.get("/:userId/pdf", controller.exportPDF);

/**
 * @swagger
 * /api/hopdong/{userId}:
 *   put:
 *     summary: Cập nhật hợp đồng theo userId
 *     tags: [HopDong]
 *     parameters:
 *       - in: path
 *         name: userId
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
 *               loaiHopDong:
 *                 type: string
 *               ngayKy:
 *                 type: string
 *                 format: date
 *               ngayHetHan:
 *                 type: string
 *                 format: date
 *               trangThai:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:userId", controller.updateContract);

/**
 * @swagger
 * /api/hopdong/user/{userId}:
 *   get:
 *     summary: Lấy hợp đồng theo userId
 *     tags: [HopDong]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Trả về thông tin hợp đồng
 */
router.get("/user/:userId", controller.getByUserId);

module.exports = router;
