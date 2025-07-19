const DonPhepModel = require("../models/donphep.model");

exports.getAll = async (req, res) => {
  try {
    const data = await DonPhepModel.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await DonPhepModel.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "Không tìm thấy đơn phép" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const id = await DonPhepModel.create(req.body);
    res.status(201).json({ message: "Tạo đơn phép thành công", id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await DonPhepModel.update(req.params.id, req.body);
    res.json({ message: "Cập nhật đơn phép thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await DonPhepModel.delete(req.params.id);
    res.json({ message: "Xoá đơn phép thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
