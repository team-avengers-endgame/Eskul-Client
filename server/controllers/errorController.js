const AppError = require("../utils/appError");

const sendErrorDev = (err, req, res) => {
  //API
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error ";
  sendErrorDev(err, req, res);
};
