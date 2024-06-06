const router = require("express").Router()
const cors = require("cors")


const detailResep = require("./detailResep")
const register = require("./register")

router.use(cors())
router.use("/detailResep", detailResep)
router.use("/user", register)



module.exports = router