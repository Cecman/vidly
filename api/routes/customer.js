const express = require("express");
const {
  getCustomerHandler,
  createCustomerHandler,
  updateCustomerHandler,
  deleteCustomerHandler,
} = require("../handlers/customerHandler");

const router = express.Router();

router.get("/", getCustomerHandler);
router.post("/", createCustomerHandler);
router.patch("/:id", updateCustomerHandler);
router.delete("/:id", deleteCustomerHandler);

module.exports = router;
