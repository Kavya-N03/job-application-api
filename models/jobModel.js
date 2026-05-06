
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:Number
    },
    company:{
        type:mongoose.Schema.ObjectId,
        ref:"Company",
        required:true
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Job",jobSchema);