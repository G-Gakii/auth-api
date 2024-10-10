const express = require("express");
const connectDatabase = require("./database/db");

const app = express();
require("dotenv").config();

port = process.env.PORT || 3001;

app.get("/home", (req, res) => {
  res.send("hallo");
});
app.listen(port, () => {
  connectDatabase();
  console.log(`listening at port ${port}`);
});
