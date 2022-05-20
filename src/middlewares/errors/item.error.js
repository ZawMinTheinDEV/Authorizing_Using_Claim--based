exports.errorHandler = (err, req, res, next) => {
    console.log("item Error " + err);
    next();
}

/*
Each route use separate error handler
Handle Error and response error message
*/