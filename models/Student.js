import mongoose from "mongoose";
import validate from "mongoose-validator";
var customValidator = [
  validate({
    validator: "isLength",
    arguments: [3, 50],
    message: "Name should be between 3 and 50 characters",
  }),
];

// Defining Schema
const studentSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  subject: { type: String, required: true, trim: true },
  message: {
    type: String,
    required: true,
    trim: true,
    validate: customValidator,
  },
});

// Defining Model
const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;
