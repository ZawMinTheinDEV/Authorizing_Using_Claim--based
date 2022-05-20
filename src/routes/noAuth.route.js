const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userService = require("../services/user.service");
const tokenService = require("../services/token.service");
const { registerValidator } = require("../utils/validators/register.validate");
const { TOKEN_SECRET } = require("../configs/jwt.config");

//separate controller from route
router.post("/register", async (req, res) => {
  console.log(req.body);

  const validation = registerValidator.validate(req.body);
  console.log(validation);

  let salt = await bcrypt.genSalt(8);
  let password = await bcrypt.hash(req.body.password, salt);
  const user = {
    name: req.body.name,
    email: req.body.email,
    password,
    permissions: {
      GET: ["/api/item/all", "/register"],
      POST: ["/api/item"],
      PUT: ["/api/item"],
      DELETE: ["/api/item"],
      GET_ALL: true,
    },
  };
  const savedUser = await userService.addUser(user);
  console.log(savedUser);
  res.send(savedUser);
});

router.post("/login", async (req, res) => {
  const user = await userService.getUserByEmail(req.body.email);
  const validPass = await bcrypt.compare(req.body.password, user.password);
  console.log(validPass);

  if (!validPass)
    return res.status(401).send("User email or password is invalid");

  const jwt_token = jwt.sign({ _id: user._id, name: user.name }, TOKEN_SECRET, {
    expiresIn: "30d",
  });
  await tokenService.addToken({
    user_id: user._id,
    token: jwt_token,
  });

  res.header("auth_token", jwt_token).send();
});

module.exports = router;
