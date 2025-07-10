const db = require("../config/db.config");

const GioLamNhanSuModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM GioLamNhanSu");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO GioLamNhanSu (user_id, gioBatDau, gioKetThuc, tongGioLam, ngayLam) VALUES (?, ?, ?, ?, ?)",
      [data.user_id, data.gioBatDau, data.gioKetThuc, data.tongGioLam, data.ngayLam]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE GioLamNhanSu SET user_id = ?, gioBatDau = ?, gioKetThuc = ?, tongGioLam = ?, ngayLam = ? WHERE id = ?",
      [data.user_id, data.gioBatDau, data.gioKetThuc, data.tongGioLam, data.ngayLam, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM GioLamNhanSu WHERE id = ?", [id]);
  },
};

module.exports = GioLamNhanSuModel;
