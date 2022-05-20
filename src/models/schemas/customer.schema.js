const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);

/*
customer {
    code,name,quarter,address,email,phoneNumber 
}
*/

const customerSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  quarter: {
    type: String,
    default: "quarter",
  },
  address: {
    type: String,
    default: "address",
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

module.exports = customerSchema;
