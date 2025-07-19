const express = require("express");
const router = express.Router();
const controller = require("../controllers/taikhoan.controller");

/**
 * @swagger
 * tags:
 *   name: TaiKhoan
 *   description: API quản lý tài khoản
 */

/**
 * @swagger
 * /api/taikhoan:
 *   get:
 *     summary: Lấy danh sách tất cả tài khoản
 *     tags: [TaiKhoan]
 *     responses:
 *       200:
 *         description: Trả về danh sách tài khoản
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/taikhoan:
 *   post:
 *     summary: Tạo mới một tài khoản
 *     tags: [TaiKhoan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - role
 *               - hoTen
 *               - gioiTinh
 *               - soDT
 *               - ngaySinh
 *               - CCCD
 *               - diaChi
 *               - phongBan
 *               - hinhThuc
 *             properties:
 *               email:
 *                 type: string
 *                 example: abc2@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 example: User
 *               hoTen:
 *                 type: string
 *                 example: Nguyen Van B
 *               gioiTinh:
 *                 type: string
 *                 enum: [Nam, Nu, Khac]
 *                 example: Nam
 *               soDT:
 *                 type: string
 *                 example: 0912156278
 *               ngaySinh:
 *                 type: string
 *                 format: date
 *                 example: 1995-03-10
 *               CCCD:
 *                 type: string
 *                 example: 291857364921
 *               diaChi:
 *                 type: string
 *                 example: Hà Nội
 *               phongBan:
 *                 type: string
 *                 example: Dev
 *               hinhThuc:
 *                 type: string
 *                 enum: [FULL_TIME, PART_TIME]
 *                 example: FULL_TIME
 *     responses:
 *       201:
 *         description: Tạo tài khoản thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/taikhoan/{id}:
 *   put:
 *     summary: Cập nhật thông tin tài khoản theo ID
 *     tags: [TaiKhoan]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của tài khoản
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: updated@gmail.com
 *               password:
 *                 type: string
 *                 example: newpass123
 *               role:
 *                 type: string
 *                 example: Admin
 *               hoTen:
 *                 type: string
 *                 example: Nguyen Van A
 *               gioiTinh:
 *                 type: string
 *                 enum: [Nam, Nu, Khac]
 *                 example: Nu
 *               soDT:
 *                 type: string
 *                 example: 0909123456
 *               ngaySinh:
 *                 type: string
 *                 format: date
 *                 example: 1990-01-01
 *               CCCD:
 *                 type: string
 *                 example: 123456789012
 *               diaChi:
 *                 type: string
 *                 example: Đà Nẵng
 *               phongBan:
 *                 type: string
 *                 example: HR
 *               hinhThuc:
 *                 type: string
 *                 enum: [FULL_TIME, PART_TIME]
 *                 example: PART_TIME
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/taikhoan/{id}:
 *   delete:
 *     summary: Xoá tài khoản theo ID
 *     tags: [TaiKhoan]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của tài khoản
 *     responses:
 *       200:
 *         description: Xoá thành công
 */
router.delete("/:id", controller.delete);

module.exports = router;
