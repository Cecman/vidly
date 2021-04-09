const express = require("express");
const {
  getGenresHandler,
  postGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
} = require("../handlers/genreHandlers");
const router = express.Router();

router.get("/", getGenresHandler);
router.post("/", postGenresHandler);
router.patch("/:id", updateGenresHandler);
router.delete("/:id", deleteGenresHandler);

module.exports = router;
