const db = require("../config/db.config");

const LichSuThayDoiModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM LichSuThayDoiThongTin");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM LichSuThayDoiThongTin WHERE id = ?", [id]);
    return rows[0];
  },

  create: async (data) => {
    const {
      user_id,
      noiDungThayDoi,
      truongThayDoi,
      giaTriCu,
      giaTriMoi,
      thoiGianThayDoi
    } = data;

    const [result] = await db.query(
      `INSERT INTO LichSuThayDoiThongTin 
        (user_id, noiDungThayDoi, truongThayDoi, giaTriCu, giaTriMoi, thoiGianThayDoi)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [user_id, noiDungThayDoi, truongThayDoi, giaTriCu, giaTriMoi, thoiGianThayDoi]
    );

    return { id: result.insertId, ...data }; // ✅ Trả về luôn object vừa tạo
  },

  update: async (id, data) => {
    const {
      user_id,
      noiDungThayDoi,
      truongThayDoi,
      giaTriCu,
      giaTriMoi,
      thoiGianThayDoi
    } = data;

    await db.query(
      `UPDATE LichSuThayDoiThongTin SET
        user_id = ?, noiDungThayDoi = ?, truongThayDoi = ?, giaTriCu = ?, giaTriMoi = ?, thoiGianThayDoi = ?
       WHERE id = ?`,
      [user_id, noiDungThayDoi, truongThayDoi, giaTriCu, giaTriMoi, thoiGianThayDoi, id]
    );

    return { id, ...data }; // ✅ Trả về object đã cập nhật
  },

  delete: async (id) => {
    await db.query("DELETE FROM LichSuThayDoiThongTin WHERE id = ?", [id]);
    return { message: `Đã xoá id = ${id}` }; // ✅ Có trả thông báo
  },
};

module.exports = LichSuThayDoiModel;
