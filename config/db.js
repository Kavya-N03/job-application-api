
const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected Successfully")
    }
    catch(error){
        console.log("Error in connecting database",error);
        process.exit(1);
    }
}

module.exports = connectDB;