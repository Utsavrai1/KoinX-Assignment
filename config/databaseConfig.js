import mongoose from "mongoose";

const connectDB = async (ENV = "DEV") => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    if (ENV === "DEV") {
      console.log("Connected to mongodb");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

const closeDB = async () => {
  await mongoose.disconnect();
};

export { connectDB, closeDB };
