const express = require("express");
const loginHandler = require("../handlers/loginHandler");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.post("/", asyncMiddleware(loginHandler));

module.exports = router;
