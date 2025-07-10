const db = require("../config/db.config");

const LichSuThayDoiModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM LichSuThayDoiThongTin");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO LichSuThayDoiThongTin (user_id, truongThayDoi, giaTriCu, giaTriMoi, thoiGianThayDoi) VALUES (?, ?, ?, ?, ?)",
      [data.user_id, data.truongThayDoi, data.giaTriCu, data.giaTriMoi, data.thoiGianThayDoi]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE LichSuThayDoiThongTin SET user_id = ?, truongThayDoi = ?, giaTriCu = ?, giaTriMoi = ?, thoiGianThayDoi = ? WHERE id = ?",
      [data.user_id, data.truongThayDoi, data.giaTriCu, data.giaTriMoi, data.thoiGianThayDoi, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM LichSuThayDoiThongTin WHERE id = ?", [id]);
  },
};

module.exports = LichSuThayDoiModel;
