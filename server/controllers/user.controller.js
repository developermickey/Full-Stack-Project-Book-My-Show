const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        message: "User already exists please login",
        success: false,
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.status(200).json({
      message: "User Register Successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

module.exports = { register };
