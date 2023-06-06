import { authors, books } from "../models/index.js";
import WrongRequest from "../errors/WrongRequest.js";

class BooksController {
  static all = async (req, res, next) => {
    try {
      req.response = books.find();
      next();
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    const book = await books.create(req.body);
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

  static filter = async (req, res, next) => {
    const filters = {};

    for (const key in req.query) {
      filters[key] = { $regex: req.query[key], $options: "i" };
    }
    try {
      const booksResponse = await books.find(filters);
      res.status(200).json({ data: booksResponse });
    } catch (error) {
      next(error);
    }
  };
}

export default BooksController;
