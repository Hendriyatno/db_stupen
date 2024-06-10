const bcrypt = require("bcrypt");
const { User } = require("../models");
const user = require("../models/user");
// const { sendMail,}= require("../../lib/sendEmail")
// const { v4: uuidv4, } = require("uuid")
// const tokenVerify = uuidv4()
// const fs = require("fs")
// const path = require("path")
// const handlebars = require("handlebars")

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    console.log(password);
    const emailUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (emailUser) {
      return res
        .status(400)
        .json({
          status: "failed",
          message: "Email is already exist, please use another one",
        });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
    const newUser = await User.create({
      role,
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      message: "Selamat menjelajahi tradisi rasa anda",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const findRegister = async (req, res) => {
  try {
    const dataRegister = await User.findAll();
    res.status(200).json({
      status: "success",
      message: "Successfully retrieved all User",
      data: dataRegister,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateRegister = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const updateRegister = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: "success",
      message: "Successfully update User",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteRegister = async (req, res) => {
  try {
    const deleteRegister = await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      status: "success",
      message: "Successfully delete User",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  register,
  findRegister,
  updateRegister,
  deleteRegister,
};
