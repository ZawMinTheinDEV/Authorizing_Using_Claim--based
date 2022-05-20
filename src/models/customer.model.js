const mongoose = require("mongoose");
const schema = require("./schemas/customer.schema");

module.exports = mongoose.model("Customer", schema);
