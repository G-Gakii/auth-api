const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  registerUser,
  login,
  getUser,
  welcome,
} = require("../controller/user.controller");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/profile", verifyToken, getUser);
router.get("/welcome", welcome);

module.exports = router;
