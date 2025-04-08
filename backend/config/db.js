import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Use a properly formatted MongoDB connection string
    await mongoose.connect(
      "mongodb+srv://naveenkarri77:<db_password>@cluster0.dovtg.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true, // Recommended for parsing MongoDB connection strings
        useUnifiedTopology: true, // To opt into the new connection management engine
      }
    );
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};
