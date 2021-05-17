require("dotenv").config();
const express = require("express");
const error = require("./middleware/error");
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./src/startup/logging");
require("./src/startup/router")(app);
require("./src/startup/connection.js");

app.use(error);

app.listen(port, () => {
  console.log(`Server is up on ${process.env.HOST}:${port}`);
});
