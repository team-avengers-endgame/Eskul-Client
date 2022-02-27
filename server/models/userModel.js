const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photoURL: {
    type: String,
    default: "default.jpg",
    required: [true, "Please provide a photo"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
