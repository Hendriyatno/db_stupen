const { DetailResep } = require("../models");

const addDetailResep = async (req, res) => {
  try { 
    console.log("Request Body:", req.body);

    const { namaResep, desk, gambar, waktuMasak, porsi, kategori, bahan, ket, video } = req.body;

    const addDetail = await DetailResep.create({
      namaResep,
      desk,
      gambar,
      waktuMasak,
      porsi,
      kategori,
      bahan,
      ket,
      video
    });

    res.status(201).json({
      status: "success",
      message: "Successfully created new Detail Resep",
      data: {
        addDetail,
      },
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const findDetailResep = async (req, res) => {
  try {
    const dataDetailResep = await DetailResep.findAll();
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved all Detail Resep",
      data: dataDetailResep,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateDetailResep = async (req, res) => {
  try {
    console.log(req.params.id)
    console.log(req.body)
    const updateDetailResep = await DetailResep.update(
      req.body,{
        where: { id: req.params.id }
      }
    );
    res.status(200).json({
      status: "success",
      message: "Successfully update Detail Resep",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteDetailResep = async (req, res) => {
  try {
    const deleteDetailResep = await DetailResep.destroy(
      {
        where: { id: req.params.id }
      }
    );
    res.status(200).json({
      status: "success",
      message: "Successfully delete Detail Resep",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
module.exports = {
  addDetailResep,
  findDetailResep,
  updateDetailResep,
  deleteDetailResep
};
