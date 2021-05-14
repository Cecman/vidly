const { User, validate } = require("../../src/db/models/user");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const getCurrentUserHandler = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
};

const registerUserHandler = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.message[0].details);
  }

  const userEmail = await User.findOne({ email: req.body.email });
  if (userEmail) {
    return res.status(400).send("A user with that email already exists");
  }

  const newUser = new User(_.pick(req.body, ["name", "email", "password"]));

  newUser.password = await bcrypt.hash(newUser.password, 10);

  await newUser.save();

  const token = newUser.generateAuthToken();

  res
    .header("x-auth-token", token)
    .send(_.pick(newUser, ["_id", "name", "email"]));
};

module.exports = { registerUserHandler, getCurrentUserHandler };
