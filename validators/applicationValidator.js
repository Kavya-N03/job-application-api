const Joi = require("joi");

exports.createApplicationSchema = Joi.object({
  resume: Joi.string().uri().optional()
})
.options({ stripUnknown: true });