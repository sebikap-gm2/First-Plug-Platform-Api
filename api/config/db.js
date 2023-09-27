// Configuracion DB
require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database is connected to ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connectToDatabase();

module.exports = mongoose;
