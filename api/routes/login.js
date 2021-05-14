const express = require("express");
const loginHandler = require("../handlers/loginHandler");
const router = express.Router();

router.post("/", loginHandler);

module.exports = router;
