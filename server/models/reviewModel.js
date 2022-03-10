const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please provide a user id"],
  },

  rating: {
    type: Number,
    required: [true, "Please provide rating number"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
  });
  next();
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
