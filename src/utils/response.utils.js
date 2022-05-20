const { ACCESS_DENIED } = require("../configs/message.config");

exports.successRes = (res, message, data) => {
  res.status(200).json({
    status: "success",
    message,
    data,
  });
};
exports.badRequest = (res, message, data) => {
  res.status(400).json({
    status: "error",
    message,
    data,
  });
};
exports.accessDeniedRes = (res) => {
  res.status(401).json({
    status: "error",
    message: ACCESS_DENIED,
  });
};
