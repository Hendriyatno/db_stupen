const bcrypt = require("bcrypt")
const { User,} = require("../models")
// const { sendMail,}= require("../../lib/sendEmail")
// const { v4: uuidv4, } = require("uuid")
// const tokenVerify = uuidv4()
// const fs = require("fs")
// const path = require("path")
// const handlebars = require("handlebars")

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body
    console.log(password)
    const emailUser = await User.findOne({
      where: {
        email: email,
      },
    })

    if (emailUser) {
      return res.status(400).json({ status: "failed", message: "Email is already exist, please use another one", })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)
    console.log(hashedPassword)
    const newUser = await User.create({
        role,
        username,
        email,
        password: hashedPassword,
      })
      res.status(201).json({
        status: "success",
        message: "Selamat menjelajahi tradisi rasa anda",
        data: {
          newUser,
        },
    })
} catch (error) {
  res.status(error.statusCode || 500).json({
    message: error.message,
  })
}
}


module.exports = {
register,
}