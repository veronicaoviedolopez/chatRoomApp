import { registerValidationModel } from "../model/RegistrationModel";

export const registerValidation = (req, res, next) => {
    const user = req.body;
    const validation = registerValidationModel.validate(user);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }

    next();
}