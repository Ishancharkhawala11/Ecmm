const express=require("express")
const body_parser=require("body-parser")
// const user=require("./model/UserModel")
const UserRoute=require("./Routes/UserRoute")
const todo=require("./model/TodoModel")
const TodoRoute=require("./Routes/TodoRoute")
require("./configuration/db")
const app=express()
const Port=3000
app.use(body_parser.json())
app.use("/",UserRoute)
app.use("/",TodoRoute)
// user.then("create")
app.get("/",(req,res)=>
{
    res.send("Server on")
})
app.listen(Port,()=>{
    console.log(`server is running on http://localhost:${Port}`)
})