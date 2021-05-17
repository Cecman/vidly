const winston = require("winston");
require("express-async-errors");

const logger = () => {
  const ueLogger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.File({ filename: "exceptions.log" })],
  });
  const urLogger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.File({ filename: "rejections.log" })],
  });

  process.on("uncaughtException", (ex) => {
    ueLogger.error(ex.message, ex);
    process.exit(1);
  });

  process.on("unhandledRejection", (ex) => {
    urLogger.error(ex.message, ex);
    process.exit(1);
  });
};

module.exports = logger;
