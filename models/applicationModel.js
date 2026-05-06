
const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },

    job:{
        type:mongoose.Schema.ObjectId,
        ref:"Job",
        required:true
    },

    resume:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:['pending','reviewed','rejected'],
        default:'pending'
    }
},{timestamps:true}
);

module.exports = mongoose.model("Application",applicationSchema);