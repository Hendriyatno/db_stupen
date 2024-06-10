const { Forum } = require("../models");

const addForum = async (req, res) => {
  try { 
    // console.log("Request Body:", req.body);

    const { diskusi, gambar} = req.body;

    const addForum = await Forum.create({
      diskusi,
      gambar
    });

    res.status(201).json({
      status: "success",
      message: "Successfully created new Forum",
      data: {
        addForum,
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

const findForum = async (req, res) => {
  try {
    const dataForum = await Forum.findAll();
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved all Forum",
      data: dataForum,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  addForum,
  findForum,
};
