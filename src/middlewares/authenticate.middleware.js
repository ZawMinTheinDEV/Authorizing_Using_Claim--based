//import modules in order of 1. third party modules 2. your own modules

const jwt = require("jsonwebtoken");

//name service in camelCase
const tokenService = require("../services/token.service");
const { TOKEN_SECRET } = require("../configs/jwt.config");
const response = require("../utils/response.utils"); 

exports.authenticate = async (req, res, next) => {
  //debug and clean your code
  //change User model with user service
  //don't store jwt in env file
  try {
    const auth_token = req.header("auth_token");
    if (!auth_token) response.accessDeniedRes(res);
    const verified = jwt.verify(auth_token, TOKEN_SECRET);
    console.log(verified);
    if (verified) {
      const token = await tokenService.getTokenbyToken(auth_token);
      if (token) {
        console.log("token is valid");
        req.userId = token.user_id;
      }
    }

    next();
  } catch (error) {
    next(error);
  }
};

/*
This middleware is responsible to authenticate user
*/
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjc3YWU3NjY2MTlmODg0MDUzNGNlOTIiLCJpYXQiOjE2NTIwMTIyNDcsImV4cCI6MTY1NDYwNDI0N30.sR96rCXXNSx6K4WhNtHUo660Z3Va7MBgVvFcfyuV09A
