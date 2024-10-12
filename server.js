const express = require("express");
const connectDatabase = require("./database/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./route/user.router");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const decode = require("jsonwebtoken/decode");

const app = express();
app.use(cors());
//Middleware to parse JSON bodies
app.use(bodyParser.json());
// middle ware for router

// middleware for jwt validation

app.use("/api/user", userRouter);

port = process.env.PORT || 3002;

app.get("/home", (req, res) => {
  res.send("hallo");
});
app.listen(port, () => {
  connectDatabase();
  console.log(`listening at port ${port}`);
});
