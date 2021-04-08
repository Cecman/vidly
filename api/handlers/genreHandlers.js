const { Genre, validator } = require("../../src/db/models/genre");

const getGenresHandler = async (req, res) => {
  const genres = await Genre.find().select("-_id -__v");
  res.send(genres);
};

const postGenresHandler = async (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const genre = new Genre({
    genre: req.body.genre,
  });
  const result = await genre.save();
  res.send(result);
};

module.exports = { getGenresHandler, postGenresHandler };
