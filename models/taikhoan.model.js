const db = require("../config/db.config");

const TaiKhoanModel = {
  getAllFull: async () => {
    const [rows] = await db.query(`
      SELECT tk.id, tk.email, tk.role,
             ct.hoTen, ct.gioiTinh, ct.ngaySinh, ct.phone, ct.CCCD, ct.diaChi, ct.phongBan, ct.hinhThuc
      FROM TaiKhoan tk
      JOIN ChiTietUsers ct ON tk.id = ct.user_id
    `);
    return rows;
  },

  createWithDetail: async (taiKhoan, chiTiet) => {
    const { email, password, role } = taiKhoan;
    const [result] = await db.query(
      `INSERT INTO TaiKhoan (email, password, role) VALUES (?, ?, ?)`,
      [email, password, role]
    );
    const userId = result.insertId;

    await db.query(
      `INSERT INTO ChiTietUsers 
        (user_id, hoTen, gioiTinh, ngaySinh, phone, CCCD, diaChi, phongBan, hinhThuc) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        chiTiet.hoTen,
        chiTiet.gioiTinh,
        chiTiet.ngaySinh,
        chiTiet.phone,
        chiTiet.CCCD,
        chiTiet.diaChi,
        chiTiet.phongBan,
        chiTiet.hinhThuc
      ]
    );

    return userId;
  },

  updateWithDetail: async (id, taiKhoan, chiTiet) => {
    await db.query(
      `UPDATE TaiKhoan SET email = ?, password = ?, role = ? WHERE id = ?`,
      [taiKhoan.email, taiKhoan.password, taiKhoan.role, id]
    );

    await db.query(
      `UPDATE ChiTietUsers 
      SET hoTen = ?, gioiTinh = ?, ngaySinh = ?, phone = ?, CCCD = ?, diaChi = ?, phongBan = ?, hinhThuc = ?
      WHERE user_id = ?`,
      [
        chiTiet.hoTen,
        chiTiet.gioiTinh,
        chiTiet.ngaySinh,
        chiTiet.phone,
        chiTiet.CCCD,
        chiTiet.diaChi,
        chiTiet.phongBan,
        chiTiet.hinhThuc,
        id
      ]
    );
  },

  delete: async (id) => {
    await db.query(`DELETE FROM ChiTietUsers WHERE user_id = ?`, [id]);
    await db.query(`DELETE FROM TaiKhoan WHERE id = ?`, [id]);
  }
};

module.exports = TaiKhoanModel;
