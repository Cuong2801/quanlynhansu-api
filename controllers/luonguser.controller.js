// ===== controllers/luonguser.controller.js =====
const LuongUser = require("../models/luonguser.model");
const LuongThucTe = require("../models/luongthucte.model");

exports.getAll = async (req, res) => {
  try {
    const data = await LuongUser.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await LuongUser.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "Không tìm thấy bản ghi" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) return res.status(400).json({ message: "Thiếu user_id" });

    const result = await LuongThucTe.getSoCongByUser(user_id);
    if (!result?.length) return res.status(404).json({ message: "Không có dữ liệu số công" });

    const { soCong, hinhThuc, phongBan } = result[0];

    let luongCoBan = 0;
    if (hinhThuc === "FULL_TIME") {
      luongCoBan = phongBan === "Dev" ? 20000000 : 15000000;
    } else if (hinhThuc === "PART_TIME") {
      luongCoBan = phongBan === "Dev" ? 10000000 : 7500000;
    } else {
      return res.status(400).json({ message: "Hình thức không hợp lệ" });
    }

    const tongLuong = soCong * luongCoBan;
    const thangNam = new Date().toISOString().slice(0, 7);

    const newId = await LuongUser.create({ user_id, thangNam, luong: tongLuong });
    res.status(201).json({ message: "Tạo lương thành công", id: newId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) return res.status(400).json({ message: "Thiếu user_id" });

    const result = await LuongThucTe.getSoCongByUser(user_id);
    if (!result?.length) return res.status(404).json({ message: "Không có dữ liệu số công" });

    const { soCong, hinhThuc, phongBan } = result[0];

    let luongCoBan = 0;
    if (hinhThuc === "FULL_TIME") {
      luongCoBan = phongBan === "Dev" ? 20000000 : 15000000;
    } else if (hinhThuc === "PART_TIME") {
      luongCoBan = phongBan === "Dev" ? 10000000 : 7500000;
    } else {
      return res.status(400).json({ message: "Hình thức không hợp lệ" });
    }

    const tongLuong = soCong * luongCoBan;
    const thangNam = new Date().toISOString().slice(0, 7);

    await LuongUser.update(req.params.id, { user_id, thangNam, luong: tongLuong });
    res.json({ message: "Cập nhật lương thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await LuongUser.delete(req.params.id);
    res.json({ message: "Xóa lương thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
