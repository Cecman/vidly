const express = require("express");
const {
  getCustomerHandler,
  createCustomerHandler,
  updateCustomerHandler,
  deleteCustomerHandler,
} = require("../handlers/customerHandler");
const asyncMiddleware = require("../../middleware/async");
const router = express.Router();

router.get("/", asyncMiddleware(getCustomerHandler));
router.post("/", asyncMiddleware(createCustomerHandler));
router.patch("/:id", asyncMiddleware(updateCustomerHandler));
router.delete("/:id", asyncMiddleware(deleteCustomerHandler));

module.exports = router;
