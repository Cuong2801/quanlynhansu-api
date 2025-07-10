const db = require("../config/db.config");

const TaiKhoanModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM TaiKhoan");
    return rows;
  },

  create: async (data) => {
    // Kiểm tra email đã tồn tại chưa
    const [existing] = await db.query("SELECT * FROM TaiKhoan WHERE email = ?", [data.email]);
    if (existing.length > 0) {
      throw new Error("Email đã tồn tại");
    }

    await db.query(
      "INSERT INTO TaiKhoan (email, password, role) VALUES (?, ?, ?)",
      [data.email, data.password, data.role]
    );
  },

  update: async (id, data) => {
    await db.query(
      "UPDATE TaiKhoan SET email = ?, password = ?, role = ? WHERE id = ?",
      [data.email, data.password, data.role, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM TaiKhoan WHERE id = ?", [id]);
  },
};

module.exports = TaiKhoanModel;
