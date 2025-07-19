// ===== models/luonguser.model.js =====
const db = require("../config/db.config");

const LuongUser = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM LuongUser");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM LuongUser WHERE id = ?", [id]);
    return rows[0];
  },

  create: async ({ user_id, thangNam, luong }) => {
    const [result] = await db.query(
      "INSERT INTO LuongUser (user_id, thangNam, luong) VALUES (?, ?, ?)",
      [user_id, thangNam, luong]
    );
    return result.insertId;
  },

  update: async (id, { user_id, thangNam, luong }) => {
    await db.query(
      "UPDATE LuongUser SET user_id = ?, thangNam = ?, luong = ? WHERE id = ?",
      [user_id, thangNam, luong, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM LuongUser WHERE id = ?", [id]);
  }
};

module.exports = LuongUser;
