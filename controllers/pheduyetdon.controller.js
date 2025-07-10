const db = require("../config/db.config");

const HopDongNhanVienModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM HopDongNhanVien");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO HopDongNhanVien (user_id, loaiHopDong, ngayKy, ngayHetHan, trangThai) VALUES (?, ?, ?, ?, ?)",
      [data.user_id, data.loaiHopDong, data.ngayKy, data.ngayHetHan, data.trangThai]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE HopDongNhanVien SET user_id = ?, loaiHopDong = ?, ngayKy = ?, ngayHetHan = ?, trangThai = ? WHERE id = ?",
      [data.user_id, data.loaiHopDong, data.ngayKy, data.ngayHetHan, data.trangThai, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM HopDongNhanVien WHERE id = ?", [id]);
  },
};

module.exports = HopDongNhanVienModel;
