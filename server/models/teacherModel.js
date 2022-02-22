const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.ObjectId,
    ref: "School",
    required: [true, "Please provide a school id"],
  },
  name: {
    type: String,
    required: [true, "Please provide teacher name"],
  },
  profilePicture: {
    type: String,
    required: [true, "Please provide teacher profile picture"],
  },
  designation: {
    type: String,
    required: [true, "Please provide teacher designation "],
  },
});
teacherSchema.index({ school: 1 }, { unique: true });

teacherSchema.pre(/^find/, function (next) {
  this.populate({
    path: "school",
    select: "name",
  });
  next();
});
const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;
