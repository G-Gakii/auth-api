const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken");
const {
  registerUser,
  login,
  getUser,
  welcome,
  logOut,
} = require("../controller/user.controller");

router.post("/register", registerUser);
router.post("/login", login);
router.get("/profile", verifyToken, getUser);
router.get("/welcome", welcome);
router.post("/logout", verifyToken, logOut);

module.exports = router;
