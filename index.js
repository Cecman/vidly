require("dotenv").config();
require("./src/db/connection.js");
const express = require("express");
const home = require("./api/routes/home");
const port = process.env.PORT;

const app = express();

app.use("/", home);

app.listen(port, () => {
  console.log(`Server is up on ${process.env.HOST}:${port}`);
});
