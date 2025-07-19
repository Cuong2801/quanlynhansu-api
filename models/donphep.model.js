const db = require("../config/db.config");

const DonPhepModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM DonPhep");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM DonPhep WHERE id = ?", [id]);
    return rows[0];
  },

  create: async (data) => {
    const { user_id, ngayNghi, lyDo, trangThai, ghiChu } = data;
    const [result] = await db.query(
      `INSERT INTO DonPhep (user_id, ngayNghi, lyDo, trangThai, ghiChu)
       VALUES (?, ?, ?, ?, ?)`,
      [user_id, ngayNghi, lyDo, trangThai, ghiChu]
    );
    return result.insertId;
  },

  update: async (id, data) => {
    const { user_id, ngayNghi, lyDo, trangThai, ghiChu } = data;
    await db.query(
      `UPDATE DonPhep SET user_id=?, ngayNghi=?, lyDo=?, trangThai=?, ghiChu=?
       WHERE id=?`,
      [user_id, ngayNghi, lyDo, trangThai, ghiChu, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM DonPhep WHERE id = ?", [id]);
  }
};

module.exports = DonPhepModel;
