const express = require("express");
const router = express.Router();
const controller = require("../controllers/lichsuthaydoi.controller");

/**
 * @swagger
 * tags:
 *   name: LichSuThayDoi
 *   description: API quản lý lịch sử thay đổi
 */

/**
 * @swagger
 * /api/lichsuthaydoi:
 *   get:
 *     summary: Lấy danh sách lịch sử thay đổi
 *     tags: [LichSuThayDoi]
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/", controller.getAll);

/**
 * @swagger
 * /api/lichsuthaydoi/{id}:
 *   get:
 *     summary: Lấy lịch sử thay đổi theo ID
 *     tags: [LichSuThayDoi]
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
 * /api/lichsuthaydoi:
 *   post:
 *     summary: Tạo mới lịch sử thay đổi
 *     tags: [LichSuThayDoi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               noiDungThayDoi:
 *                 type: string
 *               truongThayDoi:
 *                 type: string
 *               giaTriCu:
 *                 type: string
 *               giaTriMoi:
 *                 type: string
 *               thoiGianThayDoi:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Tạo thành công
 */
router.post("/", controller.create);

/**
 * @swagger
 * /api/lichsuthaydoi/{id}:
 *   put:
 *     summary: Cập nhật lịch sử thay đổi
 *     tags: [LichSuThayDoi]
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
 *               noiDungThayDoi:
 *                 type: string
 *               truongThayDoi:
 *                 type: string
 *               giaTriCu:
 *                 type: string
 *               giaTriMoi:
 *                 type: string
 *               thoiGianThayDoi:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /api/lichsuthaydoi/{id}:
 *   delete:
 *     summary: Xoá lịch sử thay đổi
 *     tags: [LichSuThayDoi]
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
