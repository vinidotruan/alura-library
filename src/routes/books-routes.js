import express from "express";
import BooksController from "../controllers/books-controller.js";
import pagination from "../middlewares/pagination.js";

const router = express.Router();

router.get("/books", BooksController.all, pagination);
router.get("/books/search", BooksController.filter);
router.post("/books", BooksController.create);
router.put("/books/:id", BooksController.update);
router.delete("/books/:id", BooksController.delete);

export default router;
