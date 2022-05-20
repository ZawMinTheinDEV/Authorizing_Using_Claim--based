const UserService = require("../services/user.service");

exports.authorize = async (req, res, next) => {
  const method = req.method;
  console.log(req.userId);
  const current_user = await UserService.getUser_byId(req.userId);
  const permission = current_user.permissions[method];
  const originUrl = req.url.split("?")[0];
  const hasPermission = permission ? permission.includes(originUrl) : false;

  if (hasPermission) {
    next();
    return;
  } else {
    return res.status(401).send("Access Denied");
  }
};

/*
This middleware is responsible for authorize access
*/
