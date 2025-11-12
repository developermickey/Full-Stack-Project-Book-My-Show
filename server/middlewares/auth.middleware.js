const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.jwtToken; // optional chaining for safety

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Attach user ID to request for downstream use
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = isAuth;
