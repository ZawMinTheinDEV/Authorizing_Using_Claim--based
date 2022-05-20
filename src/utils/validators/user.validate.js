const Joi = require("joi");
let base = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  permissions: Joi.any(),
  email: Joi.string().email(),
});
module.exports.addValidator = base;
module.exports.updateValidator = base.append({
  _id: Joi.string().required(),
});
module.exports.deleteValidator = Joi.object({
  _id: Joi.string().required(),
});
