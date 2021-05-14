require("dotenv").config();
require("./src/db/connection.js");
require("express-async-errors");
const express = require("express");
const router = require("./src/startup/router");
const error = require("./middleware/error");
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);
app.use(error);
app.listen(port, () => {
  console.log(`Server is up on ${process.env.HOST}:${port}`);
});
