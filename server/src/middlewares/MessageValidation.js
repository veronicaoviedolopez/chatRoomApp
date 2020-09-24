import { messageValidation } from '../model/MessageModel';

export default (req, res, next) => {
  const message = req.body;
  const validation = messageValidation.validate(message);
  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }
  next();
};
