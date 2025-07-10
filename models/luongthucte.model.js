const db = require("../config/db.config");

const LuongThucTeModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM LuongThucTe");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO LuongThucTe (user_id, thangNam, tongGioLam, luongDuKien, luongThucTe, ngayTinhLuong) VALUES (?, ?, ?, ?, ?, ?)",
      [data.user_id, data.thangNam, data.tongGioLam, data.luongDuKien, data.luongThucTe, data.ngayTinhLuong]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE LuongThucTe SET user_id = ?, thangNam = ?, tongGioLam = ?, luongDuKien = ?, luongThucTe = ?, ngayTinhLuong = ? WHERE id = ?",
      [data.user_id, data.thangNam, data.tongGioLam, data.luongDuKien, data.luongThucTe, data.ngayTinhLuong, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM LuongThucTe WHERE id = ?", [id]);
  },
};

module.exports = LuongThucTeModel;
