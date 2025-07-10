const db = require("../config/db.config");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.query(
    "SELECT * FROM TaiKhoan WHERE email = ? AND password = ?",
    [email, password]
  );

  if (rows.length === 0) {
    return res.status(401).json({ message: "Đăng nhập thất bại" });
  }

  res.json({ message: "Đăng nhập thành công", user: rows[0] });
};
