const mongoose = require("mongoose");
const { genreSchema } = require("./genre");
const Joi = require("joi");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  genre: {
    type: genreSchema,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
  rentalRate: { type: Number, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

const schema = Joi.object({
  title: Joi.string().min(5).max(50).required(),
  genreId: Joi.string().required(),
  stock: Joi.number().required(),
  rentalRate: Joi.number().required(),
});

const validator = (movie) => {
  return schema.validate(movie);
};

module.exports = { Movie, validator };
