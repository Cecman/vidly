const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().required().max(255),
  password: Joi.string().required().min(6).max(255),
});

const validateLogin = (user) => {
  return loginSchema.validate(user);
};

module.exports = validateLogin;
