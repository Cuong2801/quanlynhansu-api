const TaiKhoanModel = require("../models/taikhoan.model");

exports.getAll = async (req, res) => {
  const rows = await TaiKhoanModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  try {
    await TaiKhoanModel.create(req.body);
    res.json({ message: "Thêm tài khoản thành công" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.update = async (req, res) => {
  await TaiKhoanModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật tài khoản thành công" });
};

exports.delete = async (req, res) => {
  await TaiKhoanModel.delete(req.params.id);
  res.json({ message: "Xóa tài khoản thành công" });
};
