// controllers/hopdong.controller.js
const HopDongModel = require("../models/hopdong.model");

// Lấy tất cả hợp đồng
exports.getAll = async (req, res) => {
  try {
    const data = await HopDongModel.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy hợp đồng theo userId
exports.getByUserId = async (req, res) => {
  try {
    const data = await HopDongModel.getByUserId(req.params.userId);
    if (!data) {
      return res.status(404).json({ message: "Không tìm thấy hợp đồng" });
    }
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo hợp đồng mới
exports.createContract = async (req, res) => {
  try {
    const id = await HopDongModel.create(req.body);
    res.status(201).json({ message: "Tạo hợp đồng thành công", id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật hợp đồng theo userId
exports.updateContract = async (req, res) => {
  try {
    await HopDongModel.update(req.params.userId, req.body);
    res.json({ message: "Cập nhật hợp đồng thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xoá hợp đồng theo id (id trong bảng, không phải user_id)
exports.deleteContract = async (req, res) => {
  try {
    await HopDongModel.delete(req.params.id);
    res.json({ message: "Xoá hợp đồng thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Trả về nội dung hợp đồng dạng văn bản
exports.getContract = async (req, res) => {
  try {
    const data = await HopDongModel.getByUserId(req.params.userId);
    if (!data) {
      return res.status(404).send("Không tìm thấy hợp đồng");
    }
    res.send(`Hợp đồng của user ${req.params.userId}:\nLoại: ${data.loaiHopDong}, Trạng thái: ${data.trangThai}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Xuất hợp đồng PDF (demo)
exports.exportPDF = async (req, res) => {
  res.send("(Demo) File PDF hợp đồng user " + req.params.userId);
};
