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

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre");

  const newMovie = new Movie({
    title: req.body.title,
    genre: { _id: genre._id, genre: genre.genre },
    stock: req.body.stock,
    rentalPrice: req.body.rentalPrice,
    rentalRate: req.body.rentalRate,
  });

  newMovie.save();
  res.send(newMovie);
};
const updateMovieHandler = async (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre");

  const updatedMovie = await Movie.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      genre: { _id: genre.id, genre: genre.genre },
      stock: req.body.stock,
      rentalPrice: req.body.rentalPrice,
      rentalRate: req.body.rentalRate,
    }
  );
  if (!updatedMovie) {
    return res.status(400).send("There is no such movie in our DB");
  }

  res.send(updatedMovie);
};
const deleteMovieHandler = async (req, res) => {
  const deletedMovie = await Movie.findByIdAndDelete({
    _id: req.params.id,
  });

  if (!deletedMovie) {
    return res.status(400).send("No such movie in our DB");
  }
  res.send(deletedMovie);
};

module.exports = {
  getMovieHandler,
  createMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
};
