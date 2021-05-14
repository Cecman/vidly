const { User } = require("../../src/db/models/user");
const validateUser = require("../../middleware/authUser");

const loginUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const isUser = await User.findOne({ email: req.body.email });
  if (!isUser) {
    return res.status(400).send("Invalid email");
  }

  if (isUser.password != req.body.password) {
    return res.status(400).send("Invalid password");
  }

  res.redirect(200, "http://localhost:3000/");
};

module.exports = loginUser;
