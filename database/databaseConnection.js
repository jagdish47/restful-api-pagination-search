import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to database successfully".bgGreen);
  } catch (error) {
    console.log("Error while connected to database".bgRed);
    console.log(error.message);
    console.log(error);
  }
};
