const home = require("../../api/routes/home");
const genres = require("../../api/routes/genre");
const customers = require("../../api/routes/customer");
const movies = require("../../api/routes/movie");

const router = (app) => {
  app.use("/", home);
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movies);
};

module.exports = router;
