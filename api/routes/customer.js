const express = require("express");
const {
  getCustomerHandler, createCustomerHandler,
//   createCustomerHandler,
//   updateCustomerHandler,
//   deleteCustomerHandler,
} = require("../handlers/customerHandler");

const router = express.Router();

router.get("/", getCustomerHandler);
router.post("/", createCustomerHandler);
// router.patch();
// router.delete();

module.exports = router;
