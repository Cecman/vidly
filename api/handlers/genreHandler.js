const { createNewGenre } = require("../../src/db/create");
const { Genre, validator } = require("../../src/db/models/genre");

const getGenresHandler = async (req, res) => {
  const genres = await Genre.find().select("-_id -__v");
  res.send(genres);
};

const createGenresHandler = async (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const created = await createNewGenre(req.body.genre);
  res.send(created);
};

const updateGenresHandler = async (req, res) => {
  const { error } = validator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const genre = await Genre.findByIdAndUpdate(
    { _id: req.params.id },
    { genre: req.body.genre },
    { new: true }
  );
  if (!genre) {
    return res.status(404).send("The specified genre does not exist");
  }
  res.send(genre);
};
const deleteGenresHandler = async (req, res) => {
  const genre = await Genre.findByIdAndDelete({ _id: req.params.id });
  if (!genre) {
    return res.status(404).send("The specified genre does not exist");
  }
  res.send(genre);
};

module.exports = {
  getGenresHandler,
  createGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
};
