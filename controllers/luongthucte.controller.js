const LuongThucTeModel = require("../models/luongthucte.model");

exports.getAll = async (req, res) => {
  try {
    const data = await LuongThucTeModel.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const {
      user_id,
      thangNam,
      tongGioLam,
      luongDuKien,
      luongThucTe,
      ngayTinhLuong
    } = req.body;

    // Validate cơ bản
    if (!user_id || !thangNam || !tongGioLam || !luongDuKien || !luongThucTe || !ngayTinhLuong) {
      return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin" });
    }

    const id = await LuongThucTeModel.create({
      user_id,
      thangNam,
      tongGioLam,
      luongDuKien,
      luongThucTe,
      ngayTinhLuong
    });

    res.status(201).json({ message: "Tạo thành công", id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      user_id,
      thangNam,
      tongGioLam,
      luongDuKien,
      luongThucTe,
      ngayTinhLuong
    } = req.body;

    await LuongThucTeModel.update(id, {
      user_id,
      thangNam,
      tongGioLam,
      luongDuKien,
      luongThucTe,
      ngayTinhLuong
    });

    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await LuongThucTeModel.delete(req.params.id);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
