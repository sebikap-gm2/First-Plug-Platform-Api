import dotenv from "dotenv";
import { env } from "./envCheck";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();
mongoose.set("strictQuery", true);

export const connectToDatabase = async (dbName: ConnectOptions["dbName"]) => {
  try {
    return await mongoose.connect(env.MONGO_URI, { dbName });
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
