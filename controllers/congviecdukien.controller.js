const CongViecDuKienModel = require("../models/congviecdukien.model");

exports.getAll = async (req, res) => {
  try {
    const data = await CongViecDuKienModel.getAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await CongViecDuKienModel.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "Không tìm thấy công việc" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const insertId = await CongViecDuKienModel.create(req.body);
    res.status(201).json({ message: "Tạo công việc dự kiến thành công", id: insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    await CongViecDuKienModel.update(req.params.id, req.body);
    res.json({ message: "Cập nhật công việc dự kiến thành công" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await CongViecDuKienModel.delete(req.params.id);
    res.json({ message: "Xoá công việc dự kiến thành công" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
