const db = require("../config/db.config");

const DonPhepModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM DonPhep");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO DonPhep (user_id, ngayNghi, lyDo, trangThai, ghiChu) VALUES (?, ?, ?, ?, ?)",
      [data.user_id, data.ngayNghi, data.lyDo, data.trangThai, data.ghiChu]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE DonPhep SET user_id = ?, ngayNghi = ?, lyDo = ?, trangThai = ?, ghiChu = ? WHERE id = ?",
      [data.user_id, data.ngayNghi, data.lyDo, data.trangThai, data.ghiChu, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM DonPhep WHERE id = ?", [id]);
  },
};

module.exports = DonPhepModel;
