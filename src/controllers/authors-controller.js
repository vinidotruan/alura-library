import authors from "../models/Author.js";
import Author from "../models/Author.js";

class AuthorsController {
  static all = async (req, res) => {
    try {
      const authorsResponse = await authors.find();
      res.status(200).json({ data: authorsResponse });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static create = async (req, res) => {
    const author = new Author(req.body);

    try {
      await author.save();
      res.status(201).json({ message: "Author added", data: author });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static update = async (req, res) => {
    const id = req.params.id;

    try {
      await authors.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    const id = req.params.id;

    try {
      await authors.findByIdAndDelete(id);
      res.status(200).json({ message: "Author deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default AuthorsController;
