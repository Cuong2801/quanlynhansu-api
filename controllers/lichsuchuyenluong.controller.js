// controllers/lichsuchuyenluong.controller.js
const LichSuChuyenLuong = require("../models/lichsuchuyenluong.model");

exports.getAll = async (req, res) => {
  try {
    const data = await LichSuChuyenLuong.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const id = await LichSuChuyenLuong.create(req.body);
    res.status(201).json({ message: "Tạo thành công", id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await LichSuChuyenLuong.update(req.params.id, req.body);
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await LichSuChuyenLuong.delete(req.params.id);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
