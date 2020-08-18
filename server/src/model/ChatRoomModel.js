import Joi from '@hapi/joi';

// ChatRoom Validation
export const chatRoomValidation = Joi.object().keys({
  name: Joi.string().alphanum().min(6).max(50).required(),
  users: Joi.array().items(Joi.string().alphanum().min(6).max(50).required()),
});
