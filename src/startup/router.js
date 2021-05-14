const home = require("../../api/routes/home");
const genres = require("../../api/routes/genre");
const customers = require("../../api/routes/customer");
const movies = require("../../api/routes/movie");
const rentals = require("../../api/routes/rentals");
const register = require("../../api/routes/register");
const login = require("../../api/routes/login");

const router = (app) => {
  app.use("/", home);
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movies);
  app.use("/api/rentals", rentals);
  app.use("/api/users", register);
  app.use("/api/login", login);
};

module.exports = router;
