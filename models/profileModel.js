
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },

    firstName:{type:String},

    lastName:{type:String},

    gender:{
        type:String,
        enum:["Male","Female","Other"]
    },

    bio:{type:String},
    phone:{type:String},

    location:{type:String},

    skills:[String],

    education:[
        {
            degree:String,
            institution:String
        }
    ],

    experience:{type:Number,default:0},

    projects:[
        {
            title:String,
            description:String,
            link:String
        }
    ],

    socialLinks:{
        github:{
            type:String,
            match: [/^https?:\/\/(www\.)?github\.com\/.+$/, "Invalid GitHub URL"]
        },

        linkedin:{
            type:String,
            match: [/^https?:\/\/(www\.)?linkedin\.com\/.+$/, "Invalid LinkedIn URL"]
        }
    }   
},
{timestamps:true}
);

module.exports = mongoose.model("Profile",profileSchema);