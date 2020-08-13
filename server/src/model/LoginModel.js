import Joi from '@hapi/joi';

// Login Validation
export const loginValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(6).max(50).required(),
  password: Joi.string().min(6).required(),
});
