const { Genre } = require("../models/genre");

const findGenre = async () => {
  const genres = await Genre.find().select("-_id -__v");
  return genres;
};

module.exports = findGenre;
