const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please provide a book type"],
  },
  bookName: {
    type: String,
    required: [true, "Please provide a book name"],
  },
  author: {
    type: String,
    required: [true, "Please provide a authorName"],
  },
  bookDescription: {
    type: String,
    required: [true, "Please provide a book description"],
  },
  bookPrice: {
    type: Number,
    required: [true, "Please provide a book price"],
  },
  bookImg: {
    type: String,
    required: [true, "Please provide a book image"],
  },
  publishedDate: {
    type: String,
    required: [true, "Please provide a book published date"],
  },
  publisher: {
    type: String,
    required: [true, "Please provide a book publisher"],
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
