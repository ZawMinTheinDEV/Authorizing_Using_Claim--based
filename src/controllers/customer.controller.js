const customerService = require("../services/customer.service");
const customerValidator = require("../utils/validators/customer.validate");
const response = require("../utils/response.utils");

const {
  ADD_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_SUCCESS,
} = require("../configs/message.config");

exports.addCustomer = async (req, res, next) => {
  // validate the params
  const validation = customerValidator.addValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, {}, validation.error);
  }

  try {
    const newCustomer = await customerService.addCustomer(validation.value);
    response.successRes(res, ADD_CUSTOMER_SUCCESS, newCustomer);
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  //validate the request
  const validation = customerValidator.updateValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }

  try {
    const updateCustomer = await customerService.updateCustomer(
      validation.value._id,
      validation.value
    );
    if (updateCustomer) {
      response.successRes(res, UPDATE_CUSTOMER_SUCCESS, updateCustomer);
    } else {
      response.badRequest(res, "Customer not found", validation.value);
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  const validation = customerValidator.deleteValidator.validate(req.body, {
    abortEarly: false,
  });

  console.dir(validation, { depth: null });
  if (validation.error) {
    return response.badRequest(res, "Bad request", validation.error);
  }
  try {
    const CustomerId = validation.value._id;
    await customerService.removeCustomer(CustomerId);
    response.successRes(res, DELETE_CUSTOMER_SUCCESS);
  } catch (err) {
    next(err);
  }
};

exports.getAllCustomers = async (_, res, next) => {
  try {
    const Customers = await customerService.getAllCustomers();
    response.successRes(res, "", Customers);
  } catch (err) {
    next(err);
  }
};
