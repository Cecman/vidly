const mongoose = require("mongoose");
const Joi = require("joi");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  phone: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 25,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(6).max(25).required(),
  isGold: Joi.boolean(),
});

const validator = (customer) => {
  return schema.validate(customer);
};

module.exports = { Customer, validator };
