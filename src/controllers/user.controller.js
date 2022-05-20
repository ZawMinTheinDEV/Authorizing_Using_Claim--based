const userService = require("../services/user.service");
const userValidator = require("../utils/validators/user.validate.js");
const response = require("../utils/response.utils");
const bcrypt = require("bcrypt");
const {
  ADD_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
} = require("../configs/message.config");

exports.addUser = async (req, res, next) => {
  // validate the params
  const validation = userValidator.addValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, {}, validation.error);
  }

  try {
    let salt = await bcrypt.genSalt(8);
    validation.value.password = await bcrypt.hash(
      validation.value.password,
      salt
    );

    const newUser = await userService.addUser(validation.value);
    response.successRes(res, ADD_USER_SUCCESS, newUser);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  //validate the request
  const validation = userValidator.updateValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }

  try {
    const updateUser = await userService.updateUser(
      validation.value._id,
      validation.value
    );
    if (updateUser) {
      response.successRes(res, UPDATE_supplier_SUCCESS, updateUser);
    } else {
      response.badRequest(res, "User not found", validation.value);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const validation = userValidator.deleteValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }
  try {
    const UserId = validation.value._id;
    await userService.removeUser(UserId);
    response.successRes(res, DELETE_USER_SUCCESS);
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (_, res, next) => {
  try {
    const Users = await userService.getAllUsers();
    response.successRes(res, "", Users);
  } catch (err) {
    next(err);
  }
};
