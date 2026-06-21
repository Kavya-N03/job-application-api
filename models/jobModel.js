
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
    min_salary:{
        type:Number
    },
    max_salary:{
        type:Number
    },

    skills:{
        type:[String]
    },
    experience:{
        type:String
    },

    responsibilities:{
        type:[String]
    },

    roles:{
        type:[String]
    },
    benefits:{
        type:[String]
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