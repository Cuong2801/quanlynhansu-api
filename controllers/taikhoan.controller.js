// controllers/taikhoan.controller.js
const TaiKhoanModel = require("../models/taikhoan.model");

// Lấy danh sách tài khoản đầy đủ
exports.getAll = async (req, res) => {
  try {
    const data = await TaiKhoanModel.getAllFull();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tạo tài khoản với kiểm tra đầu vào
exports.create = async (req, res) => {
  try {
    const {
      email,
      password = "123456Aa",
      role,
      hoTen,
      gioiTinh,
      ngaySinh,
      soDT,
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
    if (!phoneRegex.test(soDT)) {
      return res.status(400).json({ message: "Số điện thoại phải đúng 10 chữ số" });
    }

    const cccdRegex = /^\d{12}$/;
    if (!cccdRegex.test(CCCD)) {
      return res.status(400).json({ message: "CCCD phải đúng 12 chữ số" });
    }

    if (req.body.password && req.body.password.length < 8) {
      return res.status(400).json({ message: "Mật khẩu phải có ít nhất 8 ký tự" });
    }

    const userId = await TaiKhoanModel.createWithDetail(
      { email, password, role },
      { hoTen, gioiTinh, ngaySinh, phone: soDT, CCCD, diaChi, phongBan, hinhThuc }
    );

    res.status(201).json({ message: "Tạo thành công", userId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Cập nhật tài khoản với kiểm tra đầu vào
exports.update = async (req, res) => {
  try {
    const {
      email,
      password = "123456Aa",
      role,
      hoTen,
      gioiTinh,
      ngaySinh,
      soDT,
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
    if (!phoneRegex.test(soDT)) {
      return res.status(400).json({ message: "Số điện thoại phải đúng 10 chữ số" });
    }

    const cccdRegex = /^\d{12}$/;
    if (!cccdRegex.test(CCCD)) {
      return res.status(400).json({ message: "CCCD phải đúng 12 chữ số" });
    }

    if (req.body.password && req.body.password.length < 8) {
      return res.status(400).json({ message: "Mật khẩu phải có ít nhất 8 ký tự" });
    }

    await TaiKhoanModel.updateWithDetail(
      req.params.id,
      { email, password, role },
      { hoTen, gioiTinh, ngaySinh, phone: soDT, CCCD, diaChi, phongBan, hinhThuc }
    );

    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa tài khoản
exports.delete = async (req, res) => {
  try {
    await TaiKhoanModel.delete(req.params.id);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};