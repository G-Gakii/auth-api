const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "email already exist" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    // compare passwird
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    // generate jwt token

    const token = jwt.sign({ email: user.email }, "secret");
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    res.status(200).json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const welcome = (req, res) => {
  res.send("welcome here");
};

const logOut = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { registerUser, login, getUser, welcome, logOut };
