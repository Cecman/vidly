const { Customer, validator } = require("../../src/db/models/customer");

const getCustomerHandler = async (req, res) => {
  const customers = await Customer.find();
  if (customer.length < 1) {
    return res.status(404).send("There are currently no customers");
  }
  res.send(customers);
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
const updateCustomerHandler = async (req, res) => {
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

  const updatedCustomer = await Customer.updateOne(
    { _id: req.params.id },
    { name: req.body.name, phone: req.body.phone },
    { new: true }
  );

  res.send(updatedCustomer);
};
const deleteCustomerHandler = async (req, res) => {
  const customer = await Customer.findByIdAndDelete({ _id: req.params.id });
  if (!customer) {
    return res.status(404).send("There are no customers with the given ID");
  }
  res.send(customer);
};

module.exports = {
  getCustomerHandler,
  createCustomerHandler,
  updateCustomerHandler,
  deleteCustomerHandler,
};
