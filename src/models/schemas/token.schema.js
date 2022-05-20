const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);

/*
token {
   user_id, token
}
*/

const tokenSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

module.exports = tokenSchema;
