const ChiTietUsersModel = require("../models/chitietusers.model");

exports.getAll = async (req, res) => {
  const rows = await ChiTietUsersModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await ChiTietUsersModel.create(req.body);
  res.json({ message: "Thêm chi tiết user thành công" });
};

exports.update = async (req, res) => {
  await ChiTietUsersModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật thành công" });
};

exports.delete = async (req, res) => {
  await ChiTietUsersModel.delete(req.params.id);
  res.json({ message: "Xóa thành công" });
};
