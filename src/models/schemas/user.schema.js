const mongoose = require("mongoose");
/*
user {
  name, email, password, date, permissions
}
*/

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  permissions: {
    type: Object,
  },
});

module.exports = UserSchema;