const router=require("express").Router()
const TodoController=require("../Controller/TodoController")
router.post("/StoreTodo",TodoController.createTodo)
router.get("/getTodo",TodoController.getTodo)
module.exports=router