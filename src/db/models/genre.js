const Joi = require("joi");
const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

const schema = Joi.object({
  genre: Joi.string().min(5).max(50).required(),
});

const validator = (genre) => {
  return schema.validate(genre);
};

module.exports = { Genre, validator, genreSchema };
