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
  teacherImage: {
    type: String,
    required: [true, "Please provide a teacher image"],
  },
  monthlyFee: {
    type: Number,
    required: [true, "Please provide a teacher monthly fee"],
  },
  qualification: {
    type: String,
    required: [true, "Please provide a teacher qualification"],
  },
  descriptions: {
    type: String,
    required: [true, "Please provide a teacher descriptions"],
  },
});
const PrivateTeacherModel = mongoose.model(
  "Private_Teacher",
  PrivateTeacherSchema
);
module.exports = PrivateTeacherModel;
