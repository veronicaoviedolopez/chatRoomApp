import { loginValidationModel } from "../model/LoginModel";

export const loginValidation = (req, res, next) => {
  const user = req.body;
  const validation = loginValidationModel.validate(user);
  if (validation.error) {
    return res.status(400).json(validation.error.details);
  }

  next();
}