const LuongNhanSu = require("../models/luongnhansu.model");
const db = require("../config/db.config");

function tinhLuong(phongBan, hinhThuc) {
  let luongCoBan = 0;
  if (phongBan === "Dev") luongCoBan = 20000000;
  else if (phongBan === "HR") luongCoBan = 15000000;

  if (hinhThuc === "PART_TIME") luongCoBan /= 2;

  const phuCap = luongCoBan * 0.1;
  return { luongCoBan, phuCap };
}

exports.getAll = async (req, res) => {
  try {
    const data = await LuongNhanSu.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await LuongNhanSu.getById(req.params.id);
    if (!data) return res.status(404).json({ message: "Không tìm thấy" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { user_id, tongNgayPhep = 0, tongPhepConLai = 0 } = req.body;

    const [users] = await db.query(
      `SELECT phongBan, hinhThuc FROM ChiTietUsers WHERE user_id = ?`,
      [user_id]
    );

    if (!users.length) {
      return res.status(400).json({ message: "Không tìm thấy người dùng" });
    }

    const { phongBan, hinhThuc } = users[0];
    const { luongCoBan, phuCap } = tinhLuong(phongBan, hinhThuc);

    const id = await LuongNhanSu.create({
      user_id,
      tongNgayPhep,
      tongPhepConLai,
      luongCoBan,
      phuCap,
    });

    res.status(201).json({ message: "Tạo thành công", id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { user_id, tongNgayPhep = 0, tongPhepConLai = 0 } = req.body;

    const [users] = await db.query(
      `SELECT phongBan, hinhThuc FROM ChiTietUsers WHERE user_id = ?`,
      [user_id]
    );

    if (!users.length) {
      return res.status(400).json({ message: "Không tìm thấy người dùng" });
    }

    const { phongBan, hinhThuc } = users[0];
    const { luongCoBan, phuCap } = tinhLuong(phongBan, hinhThuc);

    await LuongNhanSu.update(req.params.id, {
      user_id,
      tongNgayPhep,
      tongPhepConLai,
      luongCoBan,
      phuCap,
    });

    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await LuongNhanSu.delete(req.params.id);
    res.json({ message: "Xóa thành công" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
