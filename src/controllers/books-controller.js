import books from "../models/Book.js";
import Book from "../models/Book.js";

class BooksController {
  static all = async (req, res) => {
    try {
      const booksResponse = await books.find().populate("author").exec();
      res.status(200).json({ data: booksResponse });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static create = async (req, res) => {
    const book = new Book(req.body);

    try {
      await book.save();
      res.status(201).json({ message: "Book added", data: book });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static update = async (req, res) => {
    const id = req.params.id;

    try {
      await books.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    const id = req.params.id;

    try {
      await books.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static findByPublisher = async (req, res) => {
    const publisher = req.query.publisher;

    try {
      const booksResponse = await books.find({ publisher: publisher });
      res.status(200).json({ data: booksResponse });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default BooksController;
