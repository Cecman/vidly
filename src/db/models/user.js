const Joi = require("joi");
const mongoose = require("../connection");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    maxlength: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 255,
  },
});

const User = mongoose.model("user", userSchema);

const schema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string().required().max(255),
  password: Joi.string().required().min(6).max(255),
});

const validate = (user) => {
  return schema.validate(user);
};

module.exports = { userSchema, User, validate };
