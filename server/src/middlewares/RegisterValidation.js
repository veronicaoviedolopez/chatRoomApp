import { registerValidation } from '../model/RegistrationModel';

export default (req, res, next) => {
  const user = req.body;
  const validation = registerValidation.validate(user);
  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }

  next();
};
