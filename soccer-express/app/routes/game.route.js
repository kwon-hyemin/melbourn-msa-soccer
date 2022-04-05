const express = require('express');
const gmaeRouter = express.Router();

gmaeRouter.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

gmaeRouter.post("/game",(req,res)=>{
})
module.exports = gmaeRouter;