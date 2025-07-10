const LichSuChuyenLuongModel = require("../models/lichsuchuyenluong.model");

exports.getAll = async (req, res) => {
  const rows = await LichSuChuyenLuongModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await LichSuChuyenLuongModel.create(req.body);
  res.json({ message: "Thêm lịch sử chuyển lương thành công" });
};

exports.update = async (req, res) => {
  await LichSuChuyenLuongModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật lịch sử chuyển lương thành công" });
};

exports.delete = async (req, res) => {
  await LichSuChuyenLuongModel.delete(req.params.id);
  res.json({ message: "Xóa lịch sử chuyển lương thành công" });
};
