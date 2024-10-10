const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "unauthorized" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
