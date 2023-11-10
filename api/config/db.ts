require("dotenv").config();
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
