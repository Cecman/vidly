const { Genre } = require("../models/genre");

const deleteGenre = async (id) => {
  const genre = await Genre.findByIdAndDelete({ _id: id });
  if (!genre) {
    return res.status(404).send("The specified genre does not exist");
  }
  return genre;
};

module.exports = deleteGenre;
