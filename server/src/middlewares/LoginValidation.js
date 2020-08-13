import { loginValidation } from '../model/LoginModel';

export default (req, res, next) => {
  const user = req.body;
  const validation = loginValidation.validate(user);
  if (validation.error) {
    return res.status(400).json(validation.error.details);
  }

  next();
};
