const userController = require("../controllers/user.controller");
const userError = require("../middlewares/errors/user.error");

const router = require("express").Router();

router.get("/all", userController.getAllUsers);
router.post("", userController.addUser);
router.put("", userController.updateUser);
router.delete("", userController.deleteUser);

router.use(userError.errorHandler);

module.exports = router;

/*
each component with CRUD will be in seperate route file.
each route will use each controller and error handler.
*/
