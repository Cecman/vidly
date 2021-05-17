require("dotenv").config();
const mongoose = require("mongoose");
const winston = require("winston");

const connection = `${process.env.DB_TYPE}://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB"));

module.exports = mongoose;
