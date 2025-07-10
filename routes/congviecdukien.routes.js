const express = require("express");
const router = express.Router();
const db = require("../config/db.config");

// Lấy tất cả công việc dự kiến
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM CongViecDuKien");
  res.json(rows);
});

// Thêm công việc dự kiến
router.post("/", async (req, res) => {
  const data = req.body;
  await db.query(
    "INSERT INTO CongViecDuKien (user_id, thangNam, congViecDuKien) VALUES (?, ?, ?)",
    [data.user_id, data.thangNam, data.congViecDuKien]
  );
  res.json({ message: "Thêm công việc dự kiến thành công" });
});

// Cập nhật công việc dự kiến
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await db.query(
    "UPDATE CongViecDuKien SET user_id=?, thangNam=?, congViecDuKien=? WHERE id=?",
    [data.user_id, data.thangNam, data.congViecDuKien, id]
  );
  res.json({ message: "Cập nhật công việc dự kiến thành công" });
});

// Xóa công việc dự kiến
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await db.query("DELETE FROM CongViecDuKien WHERE id = ?", [id]);
  res.json({ message: "Xóa công việc dự kiến thành công" });
});

module.exports = router;
