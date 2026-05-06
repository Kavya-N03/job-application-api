
const Joi = require('joi');

exports.createProfileSchema = Joi.object({

  firstName: Joi.string().trim().min(2).required(),

  lastName: Joi.string().trim().allow(""),

  gender: Joi.string().valid("Male", "Female", "Other"),

  phone: Joi.string().pattern(/^[0-9]{10}$/),

  skills: Joi.array().items(Joi.string()),

  education: Joi.array().items(
    Joi.object({
      degree: Joi.string().allow(""),
      institution: Joi.string().allow("")
    })
  ),

  experience: Joi.number().min(0),

  projects: Joi.array().items(
    Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      link: Joi.string().uri().allow("")
    })
  ),

  socialLinks: Joi.object({
    github: Joi.string().uri().allow(""),
    linkedin: Joi.string().uri().allow("")
  })
});


exports.updateProfileSchema = Joi.object({
  firstName: Joi.string().trim().min(2),

  lastName: Joi.string().trim().allow(""),

  gender: Joi.string().valid("Male", "Female", "Other"),

  bio: Joi.string().allow(""),

  phone: Joi.string().pattern(/^[0-9]{10}$/),

  location: Joi.string().allow(""),

  skills: Joi.array().items(Joi.string()),

  education: Joi.array().items(
    Joi.object({
      degree: Joi.string().allow(""),
      institution: Joi.string().allow("")
    })
  ),

  experience: Joi.number().min(0),

  projects: Joi.array().items(
    Joi.object({
      title: Joi.string().allow(""),
      description: Joi.string().allow(""),
      link: Joi.string().uri().allow("")
    })
  ),

  socialLinks: Joi.object({
    github: Joi.string().uri().allow(""),
    linkedin: Joi.string().uri().allow("")
  })
});