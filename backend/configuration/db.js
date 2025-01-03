const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb://localhost:27017/todo").then(()=>console.log("mongodb connected"))
module.exports=connection