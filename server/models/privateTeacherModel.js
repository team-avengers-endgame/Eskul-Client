const mongoose = require("mongoose");

const PrivateTeacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: [true, "Please provide a teacher name"],
  },
  subject: {
    type: String,
    required: [true, "Please provide a subject"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  teacherPhoto: {
    type: String,
    required: [true, "Please provide a teacher image"],
  },
  monthlyFee: {
    type: Number,
    required: [true, "Please provide a teacher monthly fee"],
  },
  educationalQualification: {
    type: String,
    required: [true, "Please provide a teacher qualification"],
  },
  description: {
    type: String,
    required: [true, "Please provide a teacher descriptions"],
  },
  location: {
    type: String,
    required: [true, "Please provide a teacher location"],
  },
});
const PrivateTeacherModel = mongoose.model(
  "Private_Teacher",
  PrivateTeacherSchema
);
module.exports = PrivateTeacherModel;
