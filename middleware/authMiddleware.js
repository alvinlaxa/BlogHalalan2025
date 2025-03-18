const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware: Verify User Authentication
const verifyUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) return res.status(401).json({ message: "Unauthorized: User not found" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

// Middleware: Verify Admin Role
const verifyAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Forbidden: Admin access required" });
  }
  next();
};

module.exports = { verifyUser, verifyAdmin };
