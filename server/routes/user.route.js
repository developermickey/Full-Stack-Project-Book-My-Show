const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const isAuth = require("../middlewares/auth.middleware");
// signup, login, get user, forgot password

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/current-user", isAuth, userController.getUser);

module.exports = router;
