const GioLamNhanSuModel = require("../models/giolamnhansu.model");

exports.getAll = async (req, res) => {
  const rows = await GioLamNhanSuModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await GioLamNhanSuModel.create(req.body);
  res.json({ message: "Thêm giờ làm nhân sự thành công" });
};

exports.update = async (req, res) => {
  await GioLamNhanSuModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật giờ làm nhân sự thành công" });
};

exports.delete = async (req, res) => {
  await GioLamNhanSuModel.delete(req.params.id);
  res.json({ message: "Xóa giờ làm nhân sự thành công" });
};

