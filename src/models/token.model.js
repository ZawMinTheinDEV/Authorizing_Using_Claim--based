const mongoose = require("mongoose");
const tokenSchema = require("./schemas/token.schema");

module.exports = mongoose.model("Token", tokenSchema);
