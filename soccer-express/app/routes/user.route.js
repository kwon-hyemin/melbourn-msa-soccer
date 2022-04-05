const express = require('express');
const userRouter = express.Router();

userRouter.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

userRouter.post("/user",(req,res)=>{
})
module.exports = userRouter;
