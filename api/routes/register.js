const express = require("express");
const {
  registerUserHandler,
  getCurrentUserHandler,
} = require("../handlers/registerHandler");
const auth = require("../../middleware/authorize");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.get("/me", auth, asyncMiddleware(getCurrentUserHandler));
router.post("/", asyncMiddleware(registerUserHandler));

module.exports = router;
