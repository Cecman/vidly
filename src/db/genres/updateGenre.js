const { Genre, validator } = require("../models/genre");

const updateGenre = async (req) => {
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
  return genre;
};

module.exports = updateGenre;
