const Joi = require("@hapi/joi");

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
          .alphanum()
          .min(6)
          .max(50)
          .required(),
      
        email: Joi.string()
          .min(6)
          .max(100)
          .required()
          .email(),
      
        password: Joi.string()
          .min(6)
          .required()
      });
    return schema.validate(data);
}

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(6)
        .max(50)
        .required(),
    
      password: Joi.string()
        .min(6)
        .required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;