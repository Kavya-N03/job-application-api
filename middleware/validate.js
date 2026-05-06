
const ErrorResponse = require('../utils/ErrorResponse');
const fs = require('fs');

const validate = (schema)=>(req,res,next)=>{
    const{error,value} = schema.validate(req.body,{
        abortEarly:false
    });

    if(error){
        if(req.file && fs.existsSync(req.file.path)){
            fs.unlinkSync(req.file.path);
        }
        let message = error.details.map(err=>err.message);
        return next(new ErrorResponse(message,400));
    }
    req.body = value;
    next();
}

module.exports = validate