const router = require("express").Router()
const detailResep = require("../controllers/detailResep")

router.post("/add",  detailResep.addDetailResep)
router.get("/findAll",  detailResep.findDetailResep)


module.exports = router