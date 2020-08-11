import { loginValidation } from "../model/LoginModel";

export default (req, res, next) => {
  const user = req.body;
  const validation = loginValidation.validate(user);
  if (validation.error) {
    return res.status(400).json({ message: validation.error.details });
  }

  next();
}