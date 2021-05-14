const express = require("express");
const {
  getRentalsHandler,
  postRentalsHandler,
} = require("../handlers/rentalsHandler");
const router = express.Router();

router.get("/", getRentalsHandler);
router.post("/", postRentalsHandler);

module.exports = router;
