
const Joi = require('joi');

exports.createCompanySchema = Joi.object({
    name:Joi.string().min(4).required().trim(),
    description:Joi.string().max(255).required().trim(),
    location:Joi.string().max(255).required().trim(),
    website:Joi.string().uri().optional()
}).options({stripUnknown:true});

exports.updateCompanySchema = Joi.object({
    name:Joi.string().min(4).trim(),
    description:Joi.string().max(255).trim(),
    location:Joi.string().max(255).trim(),
    website:Joi.string().uri().optional()
}).min(1).options({stripUnknown:true})