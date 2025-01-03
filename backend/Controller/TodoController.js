const TodoServices=require("../services/TodoServices")
exports.createTodo=async (req,res,next)=>{
    try {
        const {userId,title,description}=req.body
        let todo=await TodoServices.CreateTodo(userId,title,description)
        res.json({status:true,success:todo})
    } catch (error) {
        next(error)
    }

}
exports.getTodo=async (req,res,next)=>{
    try {
        const {userId}=req.body
        let todo=await TodoServices.getTodoData(userId)
        res.json({status:true,success:todo})
    } catch (error) {
        next(error)
    }
    
}