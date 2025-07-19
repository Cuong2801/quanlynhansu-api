const db = require("../config/db.config");

const CongViecDuKienModel = {
  getAll: async () => {
    const [rows] = await db.query(`SELECT * FROM CongViecDuKien`);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query(`SELECT * FROM CongViecDuKien WHERE id = ?`, [id]);
    return rows[0];
  },

  create: async (data) => {
    const { user_id, thangNam, congViecDuKien } = data;

    const [result] = await db.query(
      `INSERT INTO CongViecDuKien (user_id, thangNam, congViecDuKien) VALUES (?, ?, ?)`,
      [user_id, thangNam, congViecDuKien]
    );

    return result.insertId;
  },

  update: async (id, data) => {
    const { user_id, thangNam, congViecDuKien } = data;

    await db.query(
      `UPDATE CongViecDuKien SET user_id = ?, thangNam = ?, congViecDuKien = ? WHERE id = ?`,
      [user_id, thangNam, congViecDuKien, id]
    );
  },

  delete: async (id) => {
    await db.query(`DELETE FROM CongViecDuKien WHERE id = ?`, [id]);
  },
};

module.exports = CongViecDuKienModel;
