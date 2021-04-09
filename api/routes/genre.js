const express = require("express");
const {
  getGenresHandler,
  createGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
} = require("../handlers/genreHandlers");
const router = express.Router();

router.get("/", getGenresHandler);
router.post("/", createGenresHandler);
router.patch("/:id", updateGenresHandler);
router.delete("/:id", deleteGenresHandler);

module.exports = router;
