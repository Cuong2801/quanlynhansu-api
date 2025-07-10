const LuongThucTeModel = require("../models/luongthucte.model");

exports.getAll = async (req, res) => {
  const rows = await LuongThucTeModel.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await LuongThucTeModel.create(req.body);
  res.json({ message: "Thêm lương thực tế thành công" });
};

exports.update = async (req, res) => {
  await LuongThucTeModel.update(req.params.id, req.body);
  res.json({ message: "Cập nhật lương thực tế thành công" });
};

exports.delete = async (req, res) => {
  await LuongThucTeModel.delete(req.params.id);
  res.json({ message: "Xóa lương thực tế thành công" });
};
