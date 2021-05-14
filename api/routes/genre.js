const express = require("express");
const {
  getGenresHandler,
  createGenresHandler,
  updateGenresHandler,
  deleteGenresHandler,
} = require("../handlers/genreHandler");
const auth = require("../../middleware/authorize");
const admin = require("../../middleware/admin");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.get("/", asyncMiddleware(getGenresHandler));
router.post("/", auth, asyncMiddleware(createGenresHandler));
router.patch("/:id", [auth, admin], asyncMiddleware(updateGenresHandler));
router.delete("/:id", [auth, admin], asyncMiddleware(deleteGenresHandler));

module.exports = router;
