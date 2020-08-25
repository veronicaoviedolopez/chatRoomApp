import Joi from '@hapi/joi';

// Message Validation
export const messageValidation = Joi.object().keys({
  message: Joi.string().max(200).required(),
  user_id: Joi.string().alphanum().required(),
  chatroom_id: Joi.string().alphanum().required(),
});

