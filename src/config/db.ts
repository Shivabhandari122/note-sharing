import mongoose from "mongoose";
import envConfig from "./config";

const connectToDatabase = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to db successfully");
    });
    await mongoose.connect(envConfig.mongodbString as string);
  } catch (error) {
    console.log("Failed to connected to db!!!");
    process.exit(1); //this will forcefully exit program if something went wrong in db connection
  }
};

export default connectToDatabase;
