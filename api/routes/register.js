const express = require("express");
const {
  registerUserHandler,
  getCurrentUserHandler,
} = require("../handlers/registerHandler");
const auth = require("../../middleware/authorize");
const router = express.Router();

router.get("/me", auth, getCurrentUserHandler);
router.post("/", registerUserHandler);

module.exports = router;
