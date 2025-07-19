// controllers/chitietusers.controller.js
const ChiTietUser = require("../models/chitietusers.model");

// Lấy toàn bộ chi tiết user
exports.getAll = async (req, res) => {
  try {
    const users = await ChiTietUser.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy user theo ID
exports.getById = async (req, res) => {
  try {
    const user = await ChiTietUser.getById(req.params.id);
    if (!user) return res.status(404).json({ error: "Not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tạo mới user chi tiết với kiểm tra dữ liệu
exports.create = async (req, res) => {
  try {
    const {
      user_id,
      hoTen,
      gioiTinh,
      ngaySinh,
      phone,
      CCCD,
      diaChi,
      phongBan,
      hinhThuc
    } = req.body;

    if (gioiTinh !== "Nam" && gioiTinh !== "Nữ") {
      return res.status(400).json({ message: "Giới tính phải là 'Nam' hoặc 'Nữ'" });
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(ngaySinh)) {
      return res.status(400).json({ message: "Ngày sinh phải theo định dạng yyyy-mm-dd" });
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Số điện thoại phải đúng 10 chữ số" });
    }

    const cccdRegex = /^\d{12}$/;
    if (!cccdRegex.test(CCCD)) {
      return res.status(400).json({ message: "CCCD phải đúng 12 chữ số" });
    }

    const insertId = await ChiTietUser.create({
      user_id,
      hoTen,
      gioiTinh,
      ngaySinh,
      phone,
      CCCD,
      diaChi,
      phongBan,
      hinhThuc
    });

    res.status(201).json({ id: insertId, message: "Created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật user chi tiết với kiểm tra dữ liệu
exports.update = async (req, res) => {
  try {
    const {
      user_id,
      hoTen,
      gioiTinh,
      ngaySinh,
      phone,
      CCCD,
      diaChi,
      phongBan,
      hinhThuc
    } = req.body;

    if (gioiTinh !== "Nam" && gioiTinh !== "Nữ") {
      return res.status(400).json({ message: "Giới tính phải là 'Nam' hoặc 'Nữ'" });
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(ngaySinh)) {
      return res.status(400).json({ message: "Ngày sinh phải theo định dạng yyyy-mm-dd" });
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Số điện thoại phải đúng 10 chữ số" });
    }

    const cccdRegex = /^\d{12}$/;
    if (!cccdRegex.test(CCCD)) {
      return res.status(400).json({ message: "CCCD phải đúng 12 chữ số" });
    }

    await ChiTietUser.update(req.params.id, {
      user_id,
      hoTen,
      gioiTinh,
      ngaySinh,
      phone,
      CCCD,
      diaChi,
      phongBan,
      hinhThuc
    });

    res.json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xóa user chi tiết
exports.delete = async (req, res) => {
  try {
    await ChiTietUser.delete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};