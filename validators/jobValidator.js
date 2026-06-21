
const Joi = require('joi');

exports.createJobSchema = Joi.object({
    title:Joi.string().min(3).required().trim(),
    description:Joi.string().max(500).required().trim(),
    min_salary:Joi.number(),
    max_salary:Joi.number(),
    skills:Joi.array().items(Joi.string()),
    experience:Joi.string(),
    responsibilities:Joi.array().items(Joi.string()),
    roles:Joi.array().items(Joi.string()),
    benefits:Joi.array().items(Joi.string()),
}).options({stripUnknown:true});

exports.updateJobSchema = Joi.object({
    title:Joi.string().min(3).trim(),
    description:Joi.string().max(255).trim(),
    min_salary:Joi.number(),
    max_salary:Joi.number(),
    skills:Joi.array().items(Joi.string()),
    experience:Joi.string(),
    responsibilities:Joi.array().items(Joi.string()),
    roles:Joi.array().items(Joi.string()),
    benefits:Joi.array().items(Joi.string()),
    
}).min(1).options({stripUnknown:true});