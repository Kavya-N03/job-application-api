
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const isAuthenticated = asyncHandler(async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.SECRET_ACCESS);
            req.user = decoded.user;
            next();
        }
        catch(error){
            res.status(401);
            throw new Error("User is Unauthenticated,token failed")
        }
    }else{
        res.status(401).json({
            message:"Not authorized, please login"
        })
    }
});

module.exports = isAuthenticated;