const router = require("express").Router()
const tagBerjualan = require("../controllers/tagBerjualan")

router.post("/add",  tagBerjualan.addTagBerjualan)
// router.get("/tagBerjualan",  tagBerjualan.tagBerjualan)


module.exports = router