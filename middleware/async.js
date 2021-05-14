const asyncErrorHandler = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (err) {
      //log the err to dbƒ
      next(err);
    }
  };
};

module.exports = asyncErrorHandler;
