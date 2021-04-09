const express = require("express");
const {
  getMovieHandler,
  createMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
} = require("../handlers/movieHandler");

const router = express.Router();

router.get("/", getMovieHandler);
router.post("/", createMovieHandler);
router.patch("/:id", updateMovieHandler);
router.delete("/:id", deleteMovieHandler);

module.exports = router;
