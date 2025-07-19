const PheDuyetDonModel = require("../models/pheduyetdon.model");

exports.getAll = async (req, res) => {
  try {
    const data = await PheDuyetDonModel.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { don_phep_id, hanhDong, trangThai } = req.body;

    if (!["Chấp nhận", "Từ chối"].includes(trangThai)) {
      return res.status(400).json({ message: "trangThai phải là 'Chấp nhận' hoặc 'Từ chối'" });
    }

    const id = await PheDuyetDonModel.create({ don_phep_id, hanhDong, trangThai });
    res.status(201).json({ message: "Tạo thành công", id });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { don_phep_id, hanhDong, trangThai } = req.body;

    if (!["Chấp nhận", "Từ chối"].includes(trangThai)) {
      return res.status(400).json({ message: "trangThai phải là 'Chấp nhận' hoặc 'Từ chối'" });
    }

    await PheDuyetDonModel.update(req.params.id, { don_phep_id, hanhDong, trangThai });
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await PheDuyetDonModel.delete(req.params.id);
    res.json({ message: "Xoá thành công" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
