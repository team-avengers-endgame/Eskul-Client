const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: [true, "Please provide a school name"],
  },
  banner: {
    type: String,
    required: [true, "Please provide a school banner"],
  },
  eiinNumber: {
    type: Number,
    required: [true, "Please provide a school eiin number"],
  },
  location: {
    type: String,
    required: [true, "Please provide a school location"],
  },
  totalStudent: {
    type: Number,
    required: [true, "Please provide the total student number"],
  },
  feedback: {
    type: String,
    required: [true, "Please provide the feedback"],
  },
  ratings: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please provide the ratings"],
  },
  contact: {
    type: String,
    required: [true, "Please provide school contact information"],
  },
  teachers: [
    {
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
    },
  ],
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
