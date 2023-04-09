import mongoose from "mongoose";

// Defining Schema
const adminSchema = mongoose.Schema({
  Email: { type: String, required: true, trim: true },
  Password: { type: String, required: true, trim: true },
});

// Defining Model
const AdminModel = mongoose.model("admin", adminSchema);

export default AdminModel;
