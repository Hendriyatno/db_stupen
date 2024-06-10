const router = require("express").Router()
const forum = require("../controllers/forum")

router.post("/add",  forum.addForum)
// router.get("/forum",  forum.forum)


module.exports = router