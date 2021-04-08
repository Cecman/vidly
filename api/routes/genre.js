const express = require("express");
const {
  getGenresHandler,
  postGenresHandler,
} = require("../handlers/genreHandlers");
const router = express.Router();

router.get("/", getGenresHandler);
router.post("/", postGenresHandler);

module.exports = router;
