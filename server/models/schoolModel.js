const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: [true, "Please provide a school name"],
    },
    schoolPhoto: {
      type: String,
      required: [true, "Please provide a school banner"],
    },
    EIIN: {
      type: Number,
      required: [true, "Please provide a school eiin number"],
    },
    location: {
      type: String,
      required: [true, "Please provide a school location"],
    },
    founderDate: {
      type: String,
      required: [true, "Please provide a school founder"],
    },
    schoolShift: {
      type: String,
      required: [true, "Please provide a school co-education"],
    },
    schoolType: {
      type: String,
      required: [true, "Please provide a school type"],
    },
    schoolEmail: {
      type: String,
      required: [true, "Please provide a school email"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

schoolSchema.virtual("teachers", {
  ref: "Teacher",
  localField: "_id",
  foreignField: "school",
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
