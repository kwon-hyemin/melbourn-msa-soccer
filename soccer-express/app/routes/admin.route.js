const express = require('express');
const adminRouter = express.Router();

adminRouter.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next();
});

adminRouter.post("/admin",(req,res)=>{
})
module.exports = adminRouter;
