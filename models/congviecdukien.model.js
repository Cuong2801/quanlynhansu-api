const db = require("../config/db.config");

const CongViecDuKienModel = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM CongViecDuKien");
    return rows;
  },

  create: async (data) => {
    await db.query(
      "INSERT INTO CongViecDuKien (user_id, thangNam, congViecDuKien) VALUES (?, ?, ?)",
      [data.user_id, data.thangNam, data.congViecDuKien]
    );
  },

  update: async (id, data) => {
    await db.query(
      "UPDATE CongViecDuKien SET user_id=?, thangNam=?, congViecDuKien=? WHERE id=?",
      [data.user_id, data.thangNam, data.congViecDuKien, id]
    );
  },

  delete: async (id) => {
    await db.query("DELETE FROM CongViecDuKien WHERE id = ?", [id]);
  },
};

module.exports = CongViecDuKienModel;
