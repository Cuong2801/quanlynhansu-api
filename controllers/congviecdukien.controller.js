const CongViecDuKienModel = require("../models/congviecdukien.model");

exports.getAll = async (req, res) => {
  const rows = await CongViecDuKienModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await CongViecDuKienModel.create(req.body);
  res.json({ message: "Thêm công việc dự kiến thành công" });
};

exports.update = async (req, res) => {
  await CongViecDuKienModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật công việc dự kiến thành công" });
};

exports.delete = async (req, res) => {
  await CongViecDuKienModel.delete(req.params.id);
  res.json({ message: "Xóa công việc dự kiến thành công" });
};
