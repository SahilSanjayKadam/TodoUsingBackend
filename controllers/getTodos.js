const Todo=require("../models/Todo")

exports.getTodo=async (req,res)=>{
    try{
      const todos=await Todo.find({})
      res.status(200).json({
        success:true,
        data:todos,
        message:"Entire data is fetched"
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

exports.getTodoById=async (req,res)=>{
    try{
       const _id=req.params.id;
       const todo= await Todo.findById({_id})

       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No data found with given id"
        })
       }
        res.status(400).json({
            success:true,
            data:todo,
            message:"data found"
            
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