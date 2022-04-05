const express = require('express');
const todoRouter = express.Router();

todoRouter.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

todoRouter.post("/todo",(req,res)=>{
})
module.exports = todoRouter;