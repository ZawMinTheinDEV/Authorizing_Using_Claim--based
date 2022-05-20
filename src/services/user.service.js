const User = require("../models/user.model");

exports.addUser = async (user) => {
  const userDoc = new User(user);
  return await userDoc.save();
};

exports.removeUser = async (id) => {
  await User.findByIdAndRemove(id);
};

exports.updateUser = async (id, user) => {
  await User.findByIdAndUpdate(id, user);
};

exports.getAllUsers = async () => {
  return await User.find();
};

exports.getUserByEmail = async (email) => {
  return await User.findOne({ email });
};
exports.getUserById = async (id) => {
  return await User.findById(id);
};
