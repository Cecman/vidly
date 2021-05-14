const express = require("express");
const {
  getRentalsHandler,
  postRentalsHandler,
} = require("../handlers/rentalsHandler");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.get("/", asyncMiddleware(getRentalsHandler));
router.post("/", asyncMiddleware(postRentalsHandler));

module.exports = router;
