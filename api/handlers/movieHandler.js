const { Movie, validator } = require("../../src/db/models/movie");
const { Genre } = require("../../src/db/models/genre");
const findMovies = require("../../src/db/movies/findMovies");

const getMovieHandler = async (req, res) => {
  const movies = await findMovies();
  if (movies.length < 1) {
    return res
      .status(404)
      .send("There are currently no movies in our database");
  }
  res.send(movies);
};
const createMovieHandler = async (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const newMovie = new Movie({
    title: req.body.title,
    genre: new Genre({ genre: req.body.genre }),
    stock: req.body.stock,
    rentalPrice: req.body.rentalPrice,
    rentalRate: req.body.rentalRate,
  });

  newMovie.save();
  res.send(newMovie);
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
