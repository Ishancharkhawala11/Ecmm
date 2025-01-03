const TodoModel=require("../model/TodoModel")
class TodoServices{
    static async CreateTodo(userId,title,description)
    {
        const createTodo=new TodoModel({userId,title,description})
        return await createTodo.save()
    }
    static async getTodoData(userId){
        const TodoData=await TodoModel.find({userId})
     return TodoData
    }
}
module.exports=TodoServices