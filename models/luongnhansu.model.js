const db = require("../config/db.config");

const LuongNhanSuModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM LuongNhanSu");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO LuongNhanSu (user_id, tongNgayPhep, tongPhepConLai) VALUES (?, ?, ?)",
      [data.user_id, data.tongNgayPhep, data.tongPhepConLai]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE LuongNhanSu SET user_id = ?, tongNgayPhep = ?, tongPhepConLai = ? WHERE id = ?",
      [data.user_id, data.tongNgayPhep, data.tongPhepConLai, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM LuongNhanSu WHERE id = ?", [id]);
  },
};

module.exports = LuongNhanSuModel;
