const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import Routes
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
const authRoutes = require("./routes/auth.routes");  // Đăng nhập

// Dùng Routes
app.use("/api/taikhoan", taiKhoanRoutes);
app.use("/api/chitietusers", chiTietUsersRoutes);
app.use("/api/donphep", donPhepRoutes);
app.use("/api/pheduyetdon", pheDuyetDonRoutes);
app.use("/api/luongnhansu", luongNhanSuRoutes);
app.use("/api/giolamnhansu", gioLamNhanSuRoutes);
app.use("/api/luonguser", luongUserRoutes);
app.use("/api/congviecdukien", congViecDuKienRoutes);
app.use("/api/luongthucte", luongThucTeRoutes);
app.use("/api/lichsuchuyenluong", lichSuChuyenLuongRoutes);
app.use("/api/auth", authRoutes);  // Đăng nhập

// Test API
app.get("/", (req, res) => {
  res.send("✅ API Nhân Sự đang chạy!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
