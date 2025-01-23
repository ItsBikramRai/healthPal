import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbURI = `${process.env.MONGOOSE_URI}/${process.env.MONGOOSE_DB_NAME}?retryWrites=true&w=majority`;

    console.log("Connecting to MongoDB with URI:", dbURI);

    const connectedDB = await mongoose.connect(dbURI); // Connect to MongoDB
    console.log(`Connected to MongoDB host: ${connectedDB.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1); // Exit on failure
  }
};
