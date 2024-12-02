const { config } = require("dotenv");
const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log("db connection errors");
  }
};

module.exports = { db };
