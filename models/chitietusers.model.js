const db = require("../config/db.config");

const ChiTietUsersModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM ChiTietUsers");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO ChiTietUsers (hoTen, email, user_id, gioiTinh, ngaySinh, phone, CCCD, diaChi) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [data.hoTen, data.email, data.user_id, data.gioiTinh, data.ngaySinh, data.phone, data.CCCD, data.diaChi]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE ChiTietUsers SET hoTen = ?, email = ?, user_id = ?, gioiTinh = ?, ngaySinh = ?, phone = ?, CCCD = ?, diaChi = ? WHERE id = ?",
      [data.hoTen, data.email, data.user_id, data.gioiTinh, data.ngaySinh, data.phone, data.CCCD, data.diaChi, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM ChiTietUsers WHERE id = ?", [id]);
  },
};

module.exports = ChiTietUsersModel;
