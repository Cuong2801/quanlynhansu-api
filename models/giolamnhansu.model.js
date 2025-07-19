const db = require("../config/db.config");

const GioLamNhanSu = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM GioLamNhanSu");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM GioLamNhanSu WHERE id = ?", [id]);
    return rows;
  },

  create: async (data) => {
    const { user_id, thoiGianBatDau, thoiGianKetThuc, ngayLam } = data;
    const soCong = calculateSoCong(thoiGianBatDau, thoiGianKetThuc);
    const [result] = await db.query(
      `INSERT INTO GioLamNhanSu (user_id, thoiGianBatDau, thoiGianKetThuc, soCong, ngayLam)
       VALUES (?, ?, ?, ?, ?)`,
      [user_id, thoiGianBatDau, thoiGianKetThuc, soCong, ngayLam]
    );
    return result.insertId;
  },

  update: async (id, data) => {
    const { thoiGianBatDau, thoiGianKetThuc, ngayLam } = data;
    const soCong = calculateSoCong(thoiGianBatDau, thoiGianKetThuc);
    await db.query(
      `UPDATE GioLamNhanSu SET thoiGianBatDau = ?, thoiGianKetThuc = ?, soCong = ?, ngayLam = ?
       WHERE id = ?`,
      [thoiGianBatDau, thoiGianKetThuc, soCong, ngayLam, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM GioLamNhanSu WHERE id = ?", [id]);
  }
};

function calculateSoCong(start, end) {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const diffMs = endTime - startTime;
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours >= 4 ? 1 : 0.5;
}

module.exports = GioLamNhanSu;
