
const Joi = require('joi');

exports.createJobSchema = Joi.object({
    title:Joi.string().min(3).required().trim(),
    description:Joi.string().max(500).required().trim(),
    salary:Joi.number().required(),
}).options({stripUnknown:true});

exports.updateJobSchema = Joi.object({
    title:Joi.string().min(3).trim(),
    description:Joi.string().max(255).trim(),
    salary:Joi.number(),
}).min(1).options({stripUnknown:true});