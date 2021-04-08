require("dotenv").config();
const mongoose = require("mongoose");

const connection = `${process.env.DB_TYPE}://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB");
  });

module.exports = mongoose;
