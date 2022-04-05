const express = require('express');
const basicRouter = express.Router();

basicRouter.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

basicRouter.post("/basic",(req,res)=>{
    
})
module.exports = basicRouter;
