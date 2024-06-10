const router = require("express").Router()
const cors = require("cors")


const detailResep = require("./detailResep")
const register = require("./register")
const forum = require("./forum")
const tagBerjualan = require("./tagBerjualan")

router.use(cors())
router.use("/detailResep", detailResep)
router.use("/user", register)
router.use("/forum", forum)
router.use("/tagBerjualan", tagBerjualan)

module.exports = router