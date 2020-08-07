const Joi = require("@hapi/joi");

// Login Validation
export const loginValidationModel = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(6)
    .max(50)
    .required(),

  password: Joi.string()
    .min(6)
    .required()
})