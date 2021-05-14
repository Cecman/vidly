require("dotenv").config();
const Joi = require("joi");
const mongoose = require("../connection");
const jwt = require("jsonwebtoken");

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
    maxlength: 1024,
  },
});

const User = mongoose.model("user", userSchema);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT);
  return token;
};

const schema = Joi.object({
  name: Joi.string().required().min(3).max(50),
  email: Joi.string().required().max(255).email(),
  password: Joi.string().required().min(6).max(255),
});

const validate = (user) => {
  return schema.validate(user);
};

module.exports = { User, validate };
