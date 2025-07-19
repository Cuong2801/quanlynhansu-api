const LichSuThayDoiModel = require("../models/lichsuthaydoi.model");

exports.getAll = async (req, res) => {
  try {
    const data = await LichSuThayDoiModel.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await LichSuThayDoiModel.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "Không tìm thấy" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const insertId = await LichSuThayDoiModel.create(req.body);
    res.status(201).json({ message: "Tạo thành công", id: insertId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await LichSuThayDoiModel.update(req.params.id, req.body);
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await LichSuThayDoiModel.delete(req.params.id);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
