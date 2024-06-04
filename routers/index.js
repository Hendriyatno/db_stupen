const router = require("express").Router()
const cors = require("cors")


const detailResep = require("./detailResep")

router.use(cors())
router.use("/detailResep", detailResep)

module.exports = router