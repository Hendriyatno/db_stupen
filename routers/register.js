const router = require("express").Router()
const register = require("../controllers/register")

router.post("/register",  register.register)
router.get("/findAll",  register.findRegister)
router.put("/update/:id",  register.updateRegister)
router.delete("/delete/:id",  register.deleteRegister)
// router.get("/register",  register.register)


module.exports = router