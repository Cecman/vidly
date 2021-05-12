const { Genre, validator } = require("../../src/db/models/genre");

const createNewGenre = async (genre) => {
  const newGenre = new Genre({
    genre: genre,
  });
  const result = await newGenre.save();
  return result;
};

module.exports = { createNewGenre };
