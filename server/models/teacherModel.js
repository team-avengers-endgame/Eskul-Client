const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.ObjectId,
    ref: "School",
    required: [true, "Please provide a school id"],
  },
  teacherName: {
    type: String,
    required: [true, "Please provide teacher name"],
  },
  teacherPhoto: {
    type: String,
    required: [true, "Please provide teacher profile picture"],
  },
  designation: {
    type: String,
    required: [true, "Please provide teacher designation "],
  },
  email: {
    type: String,
    required: [true, "Please provide teacher email "],
  },
  subject: {
    type: String,
    required: [true, "Please provide teacher subject "],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide teacher phone number "],
  },
  qualification: {
    type: String,
    required: [true, "Please provide teacher qualification"],
  },
  institution: {
    type: String,
    required: [true, "Please provide teacher qualification"],
  },
});

teacherSchema.pre(/^find/, function (next) {
  this.populate({
    path: "school",
    select: "schoolName",
  });
  next();
});

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
