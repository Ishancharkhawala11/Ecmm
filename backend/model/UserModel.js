const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
// const { use } = require("../Routes/UserRoute");
// const db = require("../configuration/db");
// const {Schema}=mongoose
const userSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.pre("save",async function()
{
  try {
    var user=this
    const salt=await(bcrypt.genSalt(10))
    const hashPass=await bcrypt.hash(user.password,salt)
    user.password=hashPass
  } catch (error) {
    
  }
})
userSchema.methods.comparePassword=async function(userPassword){
  try {
    const ismatch=bcrypt.compare(userPassword,this.password)
    return ismatch
  } catch (error) {
    throw error
  }
}
const userModel=mongoose.model("Users",userSchema)
module.exports=userModel