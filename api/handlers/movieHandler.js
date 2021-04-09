const { Movie, validator } = require("../../src/db/models/movie");

const getMovieHandler = async (req, res) => {
  const movies = await Movie.find().select("-_id -__v");
  if (movies.length < 1) {
    return res
      .status(404)
      .send("There are currently no movies in our database");
  }
  res.send(movies);
};
const createMovieHandler = async (req, res) => {
  console.log("create handler");
};
const updateMovieHandler = async (req, res) => {
  console.log("create handler");
};
const deleteMovieHandler = async (req, res) => {
  console.log("create handler");
};

module.exports = {
  getMovieHandler,
  createMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
};
