const LuongUserModel = require("../models/luonguser.model");

exports.getAll = async (req, res) => {
  const rows = await LuongUserModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await LuongUserModel.create(req.body);
  res.json({ message: "Thêm lương user thành công" });
};

exports.update = async (req, res) => {
  await LuongUserModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật lương user thành công" });
};

exports.delete = async (req, res) => {
  await LuongUserModel.delete(req.params.id);
  res.json({ message: "Xóa lương user thành công" });
};
