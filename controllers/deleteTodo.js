const Todo=require("../models/Todo")

exports.deleteTodo=async (req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"Todo Deleted"
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:e.message
        })
    }
}