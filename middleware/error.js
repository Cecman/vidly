require("dotenv").config();
const { transports, format } = require("winston");
const winston = require("winston");
require("winston-mongodb");

//custom logger for logging errors to DB and logfile
const logger = winston.createLogger({
  level: "error",
  transports: [
    new winston.transports.File({ filename: "error.log" }),
    new transports.MongoDB({
      level: "error",
      db: "mongodb://localhost:27017/logs",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});

const error = (err, req, res, next) => {
  logger.error({
    message: err.message,
    meta: err,
  });
  res.status(500).send("Something failed");
};

module.exports = error;
