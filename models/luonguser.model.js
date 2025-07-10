const db = require("../config/db.config");

const LuongUserModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM luongUser");
    return rows;
  },
  create: async (data) => {
    await db.query(
      "INSERT INTO luongUser (user_id, thangNam, luong) VALUES (?, ?, ?)",
      [data.user_id, data.thangNam, data.luong]
    );
  },
  update: async (id, data) => {
    await db.query(
      "UPDATE luongUser SET user_id = ?, thangNam = ?, luong = ? WHERE id = ?",
      [data.user_id, data.thangNam, data.luong, id]
    );
  },
  delete: async (id) => {
    await db.query("DELETE FROM luongUser WHERE id = ?", [id]);
  },
};

module.exports = LuongUserModel;
