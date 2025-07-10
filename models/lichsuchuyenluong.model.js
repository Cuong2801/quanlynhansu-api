const db = require("../config/db.config");

const LichSuChuyenLuongModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM LichSuChuyenluong");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO LichSuChuyenluong (user_id, ngayChuyenTien, soTien, thongTinNhanLuong, noiDung, trangThai) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.user_id,
        data.ngayChuyenTien,
        data.soTien,
        data.thongTinNhanLuong,
        data.noiDung,
        data.trangThai,
      ]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE LichSuChuyenluong SET user_id = ?, ngayChuyenTien = ?, soTien = ?, thongTinNhanLuong = ?, noiDung = ?, trangThai = ? WHERE id = ?",
      [
        data.user_id,
        data.ngayChuyenTien,
        data.soTien,
        data.thongTinNhanLuong,
        data.noiDung,
        data.trangThai,
        id,
      ]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM LichSuChuyenluong WHERE id = ?", [id]);
  },
};

module.exports = LichSuChuyenLuongModel;
