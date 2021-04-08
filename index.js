require("dotenv").config();
require("./src/db/connection.js");
const express = require("express");
const home = require("./api/routes/home");
const genres = require("./api/routes/genre");
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);
app.use("/api/genres", genres);

app.listen(port, () => {
  console.log(`Server is up on ${process.env.HOST}:${port}`);
});
