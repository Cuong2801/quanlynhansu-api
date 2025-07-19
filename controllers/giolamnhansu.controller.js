const GioLamModel = require("../models/giolamnhansu.model");

exports.getAll = async (req, res) => {
  try {
    const rows = await GioLamModel.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const rows = await GioLamModel.getById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: "Không tìm thấy" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const insertId = await GioLamModel.create(req.body);
    res.json({ message: "Tạo giờ làm thành công", id: insertId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await GioLamModel.update(req.params.id, req.body);
    res.json({ message: "Cập nhật giờ làm thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await GioLamModel.delete(req.params.id);
    res.json({ message: "Xoá giờ làm thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
