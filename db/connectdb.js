import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "schooldb_3",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("contect Successfully....");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
