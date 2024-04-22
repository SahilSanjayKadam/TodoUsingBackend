const express=require("express");
const router=express.Router();
//import controller
const {createTodo}=require("../controllers/createTodo.js")
const {getTodo,getTodoById}=require("../controllers/getTodos.js")
const {updateTodo}=require("../controllers/updateTodo.js")
const {deleteTodo}=require("../controllers/deleteTodo.js")

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodoById/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports=router;