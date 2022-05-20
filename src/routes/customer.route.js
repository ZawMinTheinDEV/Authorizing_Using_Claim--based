const customerController = require("../controllers/customer.controller");
const customerError = require("../middlewares/errors/customer.error");

const router = require("express").Router();

router.get("/all", customerController.getAllCustomers);
router.post("", customerController.addCustomer);
router.put("", customerController.updateCustomer);
router.delete("", customerController.deleteCustomer);

router.use(customerError.errorHandler);

module.exports = router;

/*
each component with CRUD will be in seperate route file.
each route will use each controller and error handler.
*/
