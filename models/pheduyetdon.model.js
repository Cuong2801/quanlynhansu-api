const db = require("../config/db.config");

const PheDuyetDonModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM PheDuyetDon");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM PheDuyetDon WHERE id = ?", [id]);
    return rows[0];
  },

  create: async ({ don_phep_id, hanhDong, trangThai }) => {
    const [result] = await db.query(
      `INSERT INTO PheDuyetDon (don_phep_id, hanhDong, trangThai)
       VALUES (?, ?, ?)`,
      [don_phep_id, hanhDong, trangThai]
    );
    return result.insertId;
  },

  update: async (id, { don_phep_id, hanhDong, trangThai }) => {
    await db.query(
      `UPDATE PheDuyetDon SET don_phep_id = ?, hanhDong = ?, trangThai = ? WHERE id = ?`,
      [don_phep_id, hanhDong, trangThai, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM PheDuyetDon WHERE id = ?", [id]);
  },
};

module.exports = PheDuyetDonModel;
