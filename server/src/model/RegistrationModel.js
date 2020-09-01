import Joi from '@hapi/joi';

// Register Validation
export const registerValidation = Joi.object().keys({
  firstname: Joi.string().min(3).max(20).required(),
  lastname: Joi.string().min(3).max(20).required(),
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(6).alphanum().max(20).required(),
});
