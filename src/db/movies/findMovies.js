const { Movie } = require("../models/movie");

const findMovies = async () => {
  const movies = await Movie.find().select("-_id -__v");

  return movies;
};

module.exports = findMovies;
