const express = require("express");
const router = express.Router();
const controller = require("../controllers/lichsuchuyenluong.controller");

/**
 * @swagger
 * tags:
 *   name: LichSuChuyenLuong
 *   description: API quản lý lịch sử chuyển lương
 */

/**
 * @swagger
 * /api/lichsuchuyenluong:
 *   get:
 *     summary: Lấy danh sách lịch sử chuyển lương
 *     tags: [LichSuChuyenLuong]
 *     responses:
 *       200:
 *         description: Danh sách các bản ghi chuyển lương
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/lichsuchuyenluong:
 *   post:
 *     summary: Tạo bản ghi lịch sử chuyển lương
 *     tags: [LichSuChuyenLuong]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               ngayChuyen:
 *                 type: string
 *                 format: date
 *               tuLuong:
 *                 type: number
 *               denLuong:
 *                 type: number
 *               lyDo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/lichsuchuyenluong/{id}:
 *   put:
 *     summary: Cập nhật lịch sử chuyển lương
 *     tags: [LichSuChuyenLuong]
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
 *               ngayChuyen:
 *                 type: string
 *                 format: date
 *               tuLuong:
 *                 type: number
 *               denLuong:
 *                 type: number
 *               lyDo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/lichsuchuyenluong/{id}:
 *   delete:
 *     summary: Xoá bản ghi lịch sử chuyển lương
 *     tags: [LichSuChuyenLuong]
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
