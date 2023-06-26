const mongoose = require("mongoose");
const config = require("config");

// const dbUrl = "mongodb://localhost:27017/LibraryDb";
// const dbUrl = "mongodb+srv://rabbaniroyal7:6EcLbxotq2199cET@cluster0.tofz0o1.mongodb.net/?retryWrites=true&w=majority";
/*const dbUrl = `mongodb://${config.get("dbName")}:${config.get(
  "dbPass"
)}@localhost:6000/${config.get("databaseName")}?authSource=admin`;*/
// const dbUrl = "mongodb://127.0.0.1:27017/LibraryDb";
const dbUrl = "mongodb+srv://rabbaniroyal7:6EcLbxotq2199cET@cluster0.tofz0o1.mongodb.net/LibraryDB?retryWrites=true&w=majority";


const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database connected...");
  } catch (error) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
