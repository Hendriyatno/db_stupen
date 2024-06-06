const router = require("express").Router()
const register = require("../controllers/register")

router.post("/register",  register.register)
// router.get("/register",  register.register)


module.exports = router