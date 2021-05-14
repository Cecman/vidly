const { User } = require("../../src/db/models/user");
const validateLogin = require("../../middleware/authUser");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const isUser = await User.findOne({ email: req.body.email });
  if (!isUser) {
    return res.status(400).send("Invalid email");
  }

  const match = await bcrypt.compare(req.body.password, isUser.password);
  if (!match) {
    return res.status(400).send("Invalid password");
  }

  res.redirect(200, "http://localhost:3000/");
};

module.exports = loginUser;
