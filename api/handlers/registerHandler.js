require("dotenv").config();
const { User, validate } = require("../../src/db/models/user");
const bcrypt = require("bcrypt");

const registerUserHandler = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.message[0].details);
  }

  const userEmail = await User.findOne({ email: req.body.email });
  if (userEmail) {
    return res.status(400).send("A user with that email already exists");
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  newUser.save();
  res.send(newUser);
};

module.exports = registerUserHandler;
