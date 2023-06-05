import books from "../models/Book.js";
import Book from "../models/Book.js";

class BooksController {
  static all = async (req, res, next) => {
    try {
      const booksResponse = await books.find().populate("author").exec();
      res.status(200).json({ data: booksResponse });
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    const book = new Book(req.body);

    try {
      await book.save();
      res.status(201).json({ message: "Book added", data: book });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    const id = req.params.id;

    try {
      await books.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    const id = req.params.id;

    try {
      await books.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted" });
    } catch (error) {
      next(error);
    }
  };

  static findByPublisher = async (req, res, next) => {
    const publisher = req.query.publisher;

    try {
      const booksResponse = await books.find({ publisher: publisher });
      res.status(200).json({ data: booksResponse });
    } catch (error) {
      next(error);
    }
  };
}

export default BooksController;
