const LichSuThayDoiModel = require("../models/lichsuthaydoi.model");

exports.getAll = async (req, res) => {
  const rows = await LichSuThayDoiModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await LichSuThayDoiModel.create(req.body);
  res.json({ message: "Thêm lịch sử thay đổi thành công" });
};

exports.update = async (req, res) => {
  await LichSuThayDoiModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật lịch sử thay đổi thành công" });
};

exports.delete = async (req, res) => {
  await LichSuThayDoiModel.delete(req.params.id);
  res.json({ message: "Xóa lịch sử thay đổi thành công" });
};
