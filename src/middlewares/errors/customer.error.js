exports.errorHandler = (err, req, res, next) => {
  console.log("Customer Error " + err);
  next();
};

/*
Each route use separate error handler
Handle Error and response error message
*/
