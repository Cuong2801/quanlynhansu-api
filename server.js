const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// ======= Middleware =======
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======= Swagger UI =======
const { swaggerUi, specs } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// ======= MySQL Connection =======
const pool = require('./config/db.config'); // Đảm bảo file này export kết nối MySQL

// ======= Import Routes =======
const taiKhoanRoutes = require("./routes/taikhoan.routes");
const chiTietUsersRoutes = require("./routes/chitietusers.routes");
const donPhepRoutes = require("./routes/donphep.routes");
const pheDuyetDonRoutes = require("./routes/pheduyetdon.routes");
const luongNhanSuRoutes = require("./routes/luongnhansu.routes");
const gioLamNhanSuRoutes = require("./routes/giolamnhansu.routes");
const luongUserRoutes = require("./routes/luonguser.routes");
const congViecDuKienRoutes = require("./routes/congviecdukien.routes");
const luongThucTeRoutes = require("./routes/luongthucte.routes");
const lichSuChuyenLuongRoutes = require("./routes/lichsuchuyenluong.routes");
const lichSuThayDoiRoutes = require("./routes/lichsuthaydoi.routes");
const authRoutes = require("./routes/auth.routes");
const hopDongRoutes = require("./routes/hopdong.routes");

// ======= Use Routes =======
app.use("/api/taikhoan", taiKhoanRoutes);
app.use("/api/chitietuser", chiTietUsersRoutes);
app.use("/api/donphep", donPhepRoutes);
app.use("/api/pheduyetdon", pheDuyetDonRoutes);
app.use("/api/luongnhansu", luongNhanSuRoutes);
app.use("/api/giolamnhansu", gioLamNhanSuRoutes);
app.use("/api/luonguser", luongUserRoutes);
app.use("/api/congviecdukien", congViecDuKienRoutes);
app.use("/api/luongthucte", luongThucTeRoutes);
app.use("/api/lichsuchuyenluong", lichSuChuyenLuongRoutes);
app.use("/api/lichsuthaydoi", lichSuThayDoiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/hopdong", hopDongRoutes);

// ======= Kiểm tra kết nối Swagger =======
app.get("/ping", (req, res) => {
  res.send("Swagger OK");
});

// ======= Kiểm tra API chính =======
app.get("/", (req, res) => {
  res.send("✅ API Nhân Sự đang chạy!");
});

// ======= Kiểm tra kết nối Database =======
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    res.json({ success: true, result: rows[0].result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ======= Khởi động Server =======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📚 Swagger UI: http://localhost:${PORT}/api-docs`);
});
