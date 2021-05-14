const express = require("express");
const {
  getMovieHandler,
  createMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
} = require("../handlers/movieHandler");
const auth = require("../../middleware/authorize");
const router = express.Router();

router.get("/", getMovieHandler);
router.post("/", auth, createMovieHandler);
router.patch("/:id", auth, updateMovieHandler);
router.delete("/:id", auth, deleteMovieHandler);

module.exports = router;
