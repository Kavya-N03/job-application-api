
const errorHandler = async(err,req,res,next)=>{
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server error";

    if(err.name === "CastError"){
        statusCode = 400,
        message = "Invalid ID"
    }

    res.status(statusCode).json({
        success:false,
        message
    })
}

module.exports = errorHandler;