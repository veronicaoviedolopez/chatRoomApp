import Joi from "@hapi/joi";

// Register Validation
export const registerValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(6).max(50).required(),
  email: Joi.string().min(6).max(100).required().email(),
  password: Joi.string().min(6).required(),
});
