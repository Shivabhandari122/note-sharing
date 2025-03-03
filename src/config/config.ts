import { config } from "dotenv";
config();

const envConfig = {
  port: process.env.PORT,
  mongodbString: process.env.MONGODB_URI,
  backendurl: process.env.BACKEND_URL,
  environment: process.env.NODE_ENV,
};

export default envConfig;
