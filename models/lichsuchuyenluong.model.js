const db = require("../config/db.config");

const LichSuChuyenLuong = {
  // Lấy tất cả lịch sử chuyển lương
  getAll: async () => {
    try {
      const [results] = await db.query("SELECT * FROM LichSuChuyenLuong");
      return results;
    } catch (err) {
      throw err;
    }
  },

  // Tạo mới một bản ghi lịch sử chuyển lương
  create: async (data) => {
    try {
      const {
        user_id,
        ngayChuyenTien,
        soTien,
        thongTinNhanLuong,
        noiDung,
        trangThai,
      } = data;

      const [result] = await db.query(
        `INSERT INTO LichSuChuyenLuong (user_id, ngayChuyenTien, soTien, thongTinNhanLuong, noiDung, trangThai) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [user_id, ngayChuyenTien, soTien, thongTinNhanLuong, noiDung, trangThai]
      );

      return result.insertId;
    } catch (err) {
      throw err;
    }
  },

  // Cập nhật lịch sử chuyển lương theo ID
  update: async (id, data) => {
    try {
      const {
        user_id,
        ngayChuyenTien,
        soTien,
        thongTinNhanLuong,
        noiDung,
        trangThai,
      } = data;

      await db.query(
        `UPDATE LichSuChuyenLuong 
         SET user_id = ?, ngayChuyenTien = ?, soTien = ?, thongTinNhanLuong = ?, noiDung = ?, trangThai = ? 
         WHERE id = ?`,
        [user_id, ngayChuyenTien, soTien, thongTinNhanLuong, noiDung, trangThai, id]
      );
    } catch (err) {
      throw err;
    }
  },

  // Xóa lịch sử chuyển lương theo ID
  delete: async (id) => {
    try {
      await db.query("DELETE FROM LichSuChuyenLuong WHERE id = ?", [id]);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = LichSuChuyenLuong;
