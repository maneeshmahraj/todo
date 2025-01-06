const express=require("express")
const router=express.Router()
const tController=require("../controllers/todoController")

router.post("/insert",tController.insertData)
router.get("/load",tController.displayData)
router.post("/del",tController.delData)
router.post("/status",tController.statusData)
module.exports=router;