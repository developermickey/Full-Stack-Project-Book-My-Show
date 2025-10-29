const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
// signup, login, get user, forgot password

router.post("/register", userController.register);

module.exports = router;
