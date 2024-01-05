import mongoose from "mongoose";

export const connectMongoDB = async () => {
  console.log(process.env.MONGO_DB_URI,"process.env.MONGO_DB_URL")
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to the mangoDb");
  } catch (error) {
    console.log("Error while connecting the mangoDb",error);
  }
};
