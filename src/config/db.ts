import config from "./config";
import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(config.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error: any) {
    console.log("unable to connected to Database", error);
    process.exit(1);
  }
}

export default dbConnect;
