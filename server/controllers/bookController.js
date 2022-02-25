const Book = require("../models/bookModel");
const handlerFactory = require("./handlerFactory");

exports.getAllBooks = handlerFactory.getAll(Book);
exports.getBook = handlerFactory.getOne(Book);
exports.createBook = handlerFactory.createOne(Book);
exports.updateBook = handlerFactory.updateOne(Book);
exports.deleteBook = handlerFactory.deleteOne(Book);
