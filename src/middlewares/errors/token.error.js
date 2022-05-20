//this is for jwt token seperated from default_callBack_Mongoose

exports.errorHandler = (err, req, res, next) => {
    console.log("jwt is expired" + err);
    res.status(400).send("Invalid token");
    next();
}