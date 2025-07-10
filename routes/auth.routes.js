const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Đây là ví dụ đơn giản, sau này anh cần kiểm tra DB thật
  if (email === "admin@example.com" && password === "123456") {
    res.json({ message: "Đăng nhập thành công", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Sai email hoặc mật khẩu" });
  }
});

module.exports = router;
