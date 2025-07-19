const db = require("../config/db.config");

const HopDongModel = {
  // Lấy toàn bộ hợp đồng
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM HopDongNhanVien");
    return rows;
  },

  // Lấy hợp đồng theo user_id
  getByUserId: async (userId) => {
    const [rows] = await db.query(
      "SELECT * FROM HopDongNhanVien WHERE user_id = ?",
      [userId]
    );
    return rows[0]; // Trả về 1 hợp đồng đầu tiên
  },

  // Tạo hợp đồng mới
  create: async (data) => {
    const { user_id, loaiHopDong, ngayKy, ngayHetHan, trangThai } = data;
    const [result] = await db.query(
      `INSERT INTO HopDongNhanVien (user_id, loaiHopDong, ngayKy, ngayHetHan, trangThai)
       VALUES (?, ?, ?, ?, ?)`,
      [user_id, loaiHopDong, ngayKy, ngayHetHan, trangThai]
    );
    return result.insertId;
  },

  // Cập nhật hợp đồng theo user_id
  update: async (userId, data) => {
    const { loaiHopDong, ngayKy, ngayHetHan, trangThai } = data;
    await db.query(
      `UPDATE HopDongNhanVien SET loaiHopDong = ?, ngayKy = ?, ngayHetHan = ?, trangThai = ?
       WHERE user_id = ?`,
      [loaiHopDong, ngayKy, ngayHetHan, trangThai, userId]
    );
  },

  // Xoá hợp đồng theo id (primary key)
  delete: async (id) => {
    const [result] = await db.query("DELETE FROM HopDongNhanVien WHERE id = ?", [id]);
    return result;
  }
};

module.exports = HopDongModel;
