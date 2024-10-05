const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Get the Authorization header
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from "Bearer token" format
  if (!token) return res.status(401).json({ error: "Access Denied, Token Required" });

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) return res.status(400).json({ error: "Invalid Token" });
    req.user = verified; // Set the user data to req.user
    next();
  });
};


module.exports = authenticateToken;
