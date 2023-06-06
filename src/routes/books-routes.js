import express from "express";
import BooksController from "../controllers/books-controller.js";

const router = express.Router();

router.get("/books", BooksController.all);
router.get("/books/search", BooksController.filter);
router.post("/books", BooksController.create);
router.put("/books/:id", BooksController.update);
router.delete("/books/:id", BooksController.delete);

export default router;
