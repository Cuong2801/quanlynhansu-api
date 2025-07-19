// ===== models/luongthucte.model.js =====
const db = require("../config/db.config");

const LuongThucTe = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT ltt.*, u.hoTen 
      FROM LuongThucTe ltt
      LEFT JOIN ChiTietUsers u ON ltt.user_id = u.id
    `);
    return rows;
  },

  create: async (data) => {
    const { user_id, thangNam, tongGioLam, luongDuKien, luongThucTe, ngayTinhLuong } = data;
    const [result] = await db.query(
      `INSERT INTO LuongThucTe (user_id, thangNam, tongGioLam, luongDuKien, luongThucTe, ngayTinhLuong)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id, thangNam, tongGioLam, luongDuKien, luongThucTe, ngayTinhLuong]
    );
    return result.insertId;
  },

  update: async (id, data) => {
    const { user_id, thangNam, tongGioLam, luongDuKien, luongThucTe, ngayTinhLuong } = data;
    await db.query(
      `UPDATE LuongThucTe 
       SET user_id = ?, thangNam = ?, tongGioLam = ?, luongDuKien = ?, luongThucTe = ?, ngayTinhLuong = ?
       WHERE id = ?`,
      [user_id, thangNam, tongGioLam, luongDuKien, luongThucTe, ngayTinhLuong, id]
    );
  },

  delete: async (id) => {
    await db.query(`DELETE FROM LuongThucTe WHERE id = ?`, [id]);
  },

  getSoCongByUser: async (userId) => {
    const [rows] = await db.query(`
      SELECT 
        SUM(ltt.tongGioLam) AS soCong,
        u.hinhThuc,
        u.phongBan
      FROM LuongThucTe ltt
      JOIN ChiTietUsers u ON u.id = ltt.user_id
      WHERE ltt.user_id = ?
      GROUP BY u.hinhThuc, u.phongBan
    `, [userId]);

    return rows;
  }
};

module.exports = LuongThucTe;
