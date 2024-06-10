const router = require("express").Router()
const detailResep = require("../controllers/detailResep")

router.post("/add",  detailResep.addDetailResep)
router.get("/findAll",  detailResep.findDetailResep)
router.put("/update/:id",  detailResep.updateDetailResep)
router.delete("/delete/:id",  detailResep.deleteDetailResep)


module.exports = router