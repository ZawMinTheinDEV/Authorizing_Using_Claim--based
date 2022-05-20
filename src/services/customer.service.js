const Customer = require("../models/customer.model");

exports.addCustomer = async (customer) => {
  newCustomer = new Customer(customer);
  return await newCustomer.save();
};

exports.removeCustomer = async (id) => {
  await Customer.findByIdAndRemove(id);
};

exports.updateCustomer = async (id, customer) => {
  return await Customer.findByIdAndUpdate(id, customer);
};

exports.getAllCustomers = async () => {
  return await Customer.find();
};

/*
service will use models to work with database.
this is the only place where db query run.
*/
