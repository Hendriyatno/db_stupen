const { TagBerjualan } = require("../models");

const addTagBerjualan = async (req, res) => {
  try { 
    // console.log("Request Body:", req.body);

    const { diskusi, gambar} = req.body;

    const addTagBerjualan = await tagBerjualan.create({
      diskusi,
      gambar
    });

    res.status(201).json({
      status: "success",
      message: "Successfully created new TagBerjualan",
      data: {
        addTagBerjualan,
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

const findTagBerjualan = async (req, res) => {
  try {
    const dataTagBerjualan = await TagBerjualan.findAll();
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved all TagBerjualan",
      data: dataTagBerjualan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  addTagBerjualan,
  findTagBerjualan,
};
