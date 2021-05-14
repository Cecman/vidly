const findGenre = require("../../src/db/genres/findGenre");
const createNewGenre = require("../../src/db/genres/createGenre");
const updateGenre = require("../../src/db/genres/updateGenre");
const deleteGenre = require("../../src/db/genres/deleteGenre");

const getGenresHandler = async (req, res) => {
  const genres = await findGenre();
  if (genres.length < 1) return res.status(404).send("No genres in our DB");
  res.send(genres);
};

const createGenresHandler = async (req, res) => {
  const created = await createNewGenre(req.body);
  res.send(created);
};

const updateGenresHandler = async (req, res) => {
  const genre = await updateGenre(req);
  res.send(genre);
};
const deleteGenresHandler = async (req, res) => {
  const genre = await deleteGenre(req.params.id);
  res.send(genre);
};

module.exports = {
  getGenresHandler,
  createGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
};
