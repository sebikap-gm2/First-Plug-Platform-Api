import dotenv from "dotenv";
import { env } from "./envCheck";
import mongoose, { ConnectOptions } from "mongoose";

dotenv.config();
mongoose.set("strictQuery", true);

// TODO: find a way that if it doesn't find the db we handle the error
export const connectToDatabase = async (dbName: ConnectOptions["dbName"]) => {
  try {
    await mongoose.disconnect();
    return await mongoose.connect(env.MONGO_URI, { dbName });
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

mongoose.connection.addListener("connected", () => {
  console.log("Connected to database");
});
