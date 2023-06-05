import authors from "../models/Author.js";
import Author from "../models/Author.js";
import mongoose from "mongoose";

class AuthorsController {
  static all = async (req, res, next) => {
    try {
      const authorsResponse = await authors.find();
      res.status(200).json({ data: authorsResponse });
    } catch (error) {
      next(error);
    }
  };

  static create = async (req, res, next) => {
    const author = new Author(req.body);

    try {
      await author.save();
      res.status(201).json({ message: "Author added", data: author });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    const id = req.params.id;

    try {
      await authors.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated" });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    const id = req.params.id;

    try {
      await authors.findByIdAndDelete(id);
      res.status(200).json({ message: "Author deleted" });
    } catch (error) {
      next(error);
    }
  };

  static find = async (req, res, next) => {
    const id = req.params.id;

    try {
      const author = await authors.findById(id);

      if (author === null) {
        res.status(404).json({ message: "Author not found" });
      }
      res.status(200).json({ data: author });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorsController;
