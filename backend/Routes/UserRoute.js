const router=require("express").Router()
const UserController=require("../Controller/UserController")
router.post("/registration",UserController.register)
router.post("/login",UserController.login)
module.exports=router