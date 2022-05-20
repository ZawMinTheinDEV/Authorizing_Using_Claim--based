const Joi = require("joi");
let base = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  quarter: Joi.string(),
  address: Joi.string(),
  email: Joi.string().email(),
  phoneNumber: Joi.string(),
});
module.exports.addValidator = base;
module.exports.updateValidator = base.append({
  _id: Joi.string().required(),
});
module.exports.deleteValidator = Joi.object({
  _id: Joi.string().required(),
});
