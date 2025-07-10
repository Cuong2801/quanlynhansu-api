const DonPhepModel = require("../models/donphep.model");

exports.getAll = async (req, res) => {
  const rows = await DonPhepModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await DonPhepModel.create(req.body);
  res.json({ message: "Thêm đơn phép thành công" });
};

exports.update = async (req, res) => {
  await DonPhepModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật đơn phép thành công" });
};

exports.delete = async (req, res) => {
  await DonPhepModel.delete(req.params.id);
  res.json({ message: "Xóa đơn phép thành công" });
};
