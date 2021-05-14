const express = require("express");
const {
  getGenresHandler,
  createGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
} = require("../handlers/genreHandler");
const auth = require("../../middleware/authorize");
const router = express.Router();

router.get("/", getGenresHandler);
router.post("/", auth, createGenresHandler);
router.patch("/:id", updateGenresHandler);
router.delete("/:id", deleteGenresHandler);

module.exports = router;
