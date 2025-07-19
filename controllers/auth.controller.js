const db = require("../config/db.config");
const jwt = require("jsonwebtoken");

// Đăng ký tài khoản
exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Kiểm tra đầu vào
    if (!email || !password || !role) {
      return res.status(400).json({ message: "Thiếu thông tin" });
    }

    const [check] = await db.query("SELECT * FROM TaiKhoan WHERE email = ?", [email]);
    if (check.length > 0) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    // Lưu mật khẩu trực tiếp (❗KHÔNG AN TOÀN nếu dùng cho sản phẩm thật)
    await db.query("INSERT INTO TaiKhoan (email, password, role) VALUES (?, ?, ?)", [
      email,
      password,
      role,
    ]);

    res.status(201).json({ message: "Đăng ký thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Đăng nhập
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query("SELECT * FROM TaiKhoan WHERE email = ?", [email]);
    const user = rows[0];

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Email hoặc mật khẩu không đúng" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || "secret", {
      expiresIn: "1d",
    });

    res.json({ message: "Đăng nhập thành công", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
