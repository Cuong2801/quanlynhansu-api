const db = require("../config/db.config");

const LuongNhanSuModel = {
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT lns.*, ct.phongBan, ct.hinhThuc
      FROM LuongNhanSu lns
      JOIN ChiTietUsers ct ON lns.user_id = ct.user_id
    `);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query(
      `SELECT * FROM LuongNhanSu WHERE id = ?`,
      [id]
    );
    return rows[0];
  },

  create: async ({ user_id, tongNgayPhep = 0, tongPhepConLai = 0, luongCoBan, phuCap }) => {
    const [result] = await db.query(
      `INSERT INTO LuongNhanSu (user_id, tongNgayPhep, tongPhepConLai, luongCoBan, phuCap)
       VALUES (?, ?, ?, ?, ?)`,
      [user_id, tongNgayPhep, tongPhepConLai, luongCoBan, phuCap]
    );
    return result.insertId;
  },

  update: async (id, { user_id, tongNgayPhep = 0, tongPhepConLai = 0, luongCoBan, phuCap }) => {
    await db.query(
      `UPDATE LuongNhanSu
       SET user_id = ?, tongNgayPhep = ?, tongPhepConLai = ?, luongCoBan = ?, phuCap = ?
       WHERE id = ?`,
      [user_id, tongNgayPhep, tongPhepConLai, luongCoBan, phuCap, id]
    );
  },

  delete: async (id) => {
    await db.query(`DELETE FROM LuongNhanSu WHERE id = ?`, [id]);
  },
};

module.exports = LuongNhanSuModel;
