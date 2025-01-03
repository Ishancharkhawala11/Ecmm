const UserModel=require("../model/UserModel")
const JWT=require("jsonwebtoken")
class Userservices {
  static async registrationUser(email, password) {
    try {
        const createUser=new UserModel({email, password})
        return await createUser.save()
    } catch (error) {
        throw error
    }
   
  }
  static async Login(email){
    try {
      return  UserModel.findOne({email})
    } catch (error) {
      return error
    }
  }
  static async jwt(token,key,expire){
    return JWT.sign(token,key,{expiresIn:expire})
  }
}
module.exports=Userservices