
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name:{
        type:String
    },

    description:{
        type:String
    },

    location:{
        type:String
    },

    website:{
        type:String
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Company",companySchema);