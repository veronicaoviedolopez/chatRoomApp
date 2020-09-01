import Joi from '@hapi/joi';

// Login Validation
export const loginValidation = Joi.object().keys({
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(6).max(20).required(),
});
