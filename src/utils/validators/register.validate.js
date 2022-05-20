const Joi = require("joi");

module.exports.registerValidator = Joi.object({
  name: Joi.string().min(6),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(8).required(),
});
