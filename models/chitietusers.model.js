const db = require("../config/db.config");

const ChiTietUsersModel = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT ct.*, tk.email
      FROM ChiTietUsers ct
      JOIN TaiKhoan tk ON ct.user_id = tk.id
    `);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query(`
      SELECT ct.*, tk.email
      FROM ChiTietUsers ct
      JOIN TaiKhoan tk ON ct.user_id = tk.id
      WHERE ct.id = ?
    `, [id]);
    return rows[0];
  },

  create: async ({ user_id, hoTen, gioiTinh, ngaySinh, phone, CCCD, diaChi, phongBan, hinhThuc }) => {
    const [result] = await db.query(`
      INSERT INTO ChiTietUsers 
        (user_id, hoTen, gioiTinh, ngaySinh, phone, CCCD, diaChi, phongBan, hinhThuc) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [user_id, hoTen, gioiTinh, ngaySinh, phone, CCCD, diaChi, phongBan, hinhThuc]
    );
    return result.insertId;
  },

  update: async (id, data) => {
    const { hoTen, user_id, gioiTinh, ngaySinh, phone, CCCD, diaChi, phongBan, hinhThuc } = data;
    await db.query(`
      UPDATE ChiTietUsers 
      SET hoTen=?, user_id=?, gioiTinh=?, ngaySinh=?, phone=?, CCCD=?, diaChi=?, phongBan=?, hinhThuc=? 
      WHERE id=?`,
      [hoTen, user_id, gioiTinh, ngaySinh, phone, CCCD, diaChi, phongBan, hinhThuc, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM ChiTietUsers WHERE id = ?", [id]);
  },
};

module.exports = ChiTietUsersModel;