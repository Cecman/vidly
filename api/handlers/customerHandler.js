const { Customer, validator } = require("../../src/db/models/customer");

const getCustomerHandler = async (req, res) => {
  const customer = await Customer.find();
  if (customer.length < 1) {
    return res.status(404).send("There are currently no customers");
  }
  res.send(customer);
};
const createCustomerHandler = async (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).send(error.message[0].details);
  }
  const customer = await Customer.find({ phone: req.body.phone });
  //console.log(customer);
  if (customer.length >= 1) {
    return res
      .status(400)
      .send("Someone already exists with that phone number");
  }

  const newCustomer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
  });

  const saved = await newCustomer.save();
  res.send(saved);
};
// const updateCustomerHandler = async (req, res) => {};
// const deleteCustomerHandler = async (req, res) => {};

module.exports = {
  getCustomerHandler,
  createCustomerHandler,
  //   updateCustomerHandler,
  //   deleteCustomerHandler,
};
