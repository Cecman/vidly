const { User, validate } = require("../../src/db/models/user");

const registerUserHandler = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.message[0].details);
  }

  const userEmail = await User.findOne({ email: req.body.email });
  if (userEmail) {
    return res.status(400).send("A user with that email already exists");
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save();
  res.send(newUser);
};

module.exports = registerUserHandler;
