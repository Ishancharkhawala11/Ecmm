const userService = require("../services/UserServices");
exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const successRatio = await userService.registrationUser(email, password);
    res.json({ status: true, message: "User Registered Successfully" });
  } catch (error) {
    throw error;
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user=await userService.Login(email)
    if(!user)
        {
            throw new Error("User does not exist")
        }
      const isMatch=user.comparePassword(password)
      if(!isMatch)
        {
            throw new Error("Password Invalid")
        }
        let Tokendata={_id:user._id,email:user.email}
        const token=await userService.jwt(Tokendata,"ishan","1h")
        res.status(200).json({status:true,token:token})
  } catch (error) {
    throw error;
  }
};
