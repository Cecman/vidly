require("dotenv").config();
const express = require("express");
const home = require("./api/routes/home");

const app = express();
const port = process.env.PORT;

app.use("/", home);

app.listen(port, () => {
  console.log(`Server is up on ${process.env.HOST}:${port}`);
});
