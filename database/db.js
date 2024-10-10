const mongoose = require("mongoose");

connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to database");
  } catch (error) {
    console.log("connect failed" + error);
  }
};
module.exports = connectDatabase;
