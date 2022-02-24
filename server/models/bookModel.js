const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please provide a book type"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  authorName: {
    type: String,
    required: [true, "Please provide a authorName"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a book price"],
  },
  image: {
    type: String,
    required: [true, "Please provide a book image"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please provide a book rating"],
  },
});
const BookModel = mongoose.model("Book", bookSchema);
module.exports = BookModel;
