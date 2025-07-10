const db = require("../config/db.config");

const PheDuyetDonModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM PheDuyetDon");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO PheDuyetDon (don_phep_id, hanhDong, trangThai) VALUES (?, ?, ?)",
      [data.don_phep_id, data.hanhDong, data.trangThai]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE PheDuyetDon SET don_phep_id = ?, hanhDong = ?, trangThai = ? WHERE id = ?",
      [data.don_phep_id, data.hanhDong, data.trangThai, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM PheDuyetDon WHERE id = ?", [id]);
  },
};

module.exports = PheDuyetDonModel;
