const express = require("express");
const {
  getMovieHandler,
  createMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
} = require("../handlers/movieHandler");
const auth = require("../../middleware/authorize");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.get("/", asyncMiddleware(getMovieHandler));
router.post("/", auth, asyncMiddleware(createMovieHandler));
router.patch("/:id", auth, asyncMiddleware(updateMovieHandler));
router.delete("/:id", auth, asyncMiddleware(deleteMovieHandler));

module.exports = router;
