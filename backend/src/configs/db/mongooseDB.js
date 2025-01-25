import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectedDB = await mongoose.connect(process.env.MONGOOSE_URI);
    console.log(`Connected to MongoDB host: ${connectedDB.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};
