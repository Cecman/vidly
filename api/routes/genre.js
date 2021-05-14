const express = require("express");
const {
  getGenresHandler,
  createGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
} = require("../handlers/genreHandler");
const auth = require("../../middleware/authorize");
const admin = require("../../middleware/admin");
const router = express.Router();

router.get("/", getGenresHandler);
router.post("/", auth, createGenresHandler);
router.patch("/:id", auth, updateGenresHandler);
router.delete("/:id", [auth, admin], deleteGenresHandler);

module.exports = router;
