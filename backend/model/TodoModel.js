const mongoose = require("mongoose");
const UserModel=require("../model/UserModel")
const {Schema}=mongoose

const TodoSchema = mongoose.Schema({
userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
},

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TodoModel=mongoose.model("Tasks",TodoSchema)
module.exports=TodoModel