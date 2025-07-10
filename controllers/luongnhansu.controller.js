const LuongNhanSuModel = require("../models/luongnhansu.model");

exports.getAll = async (req, res) => {
  const rows = await LuongNhanSuModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await LuongNhanSuModel.create(req.body);
  res.json({ message: "Thêm lương nhân sự thành công" });
};

exports.update = async (req, res) => {
  await LuongNhanSuModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật lương nhân sự thành công" });
};

exports.delete = async (req, res) => {
  await LuongNhanSuModel.delete(req.params.id);
  res.json({ message: "Xóa lương nhân sự thành công" });
};
