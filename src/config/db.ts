import mongoose from "mongoose";
import envConfig from "./config";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(envConfig.mongodbString as string);
    mongoose.connection.on("connected", () => {
      console.log("Connected to db successfully");
    });
  } catch (error) {
    console.log("Failed to connected to db!!!");
    process.exit(1); //this will forcefully exit program if something went wrong in db connection
  }
};
