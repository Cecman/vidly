const { Genre, validator } = require("../models/genre");

const createNewGenre = async (req) => {
  const { error } = validator(req);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const newGenre = new Genre({
    genre: req.genre,
  });
  const result = await newGenre.save();
  return result;
};

module.exports = createNewGenre;
