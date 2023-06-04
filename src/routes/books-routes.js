import express from "express";
import booksController from "../controllers/books-controller.js";

const router = express.Router();

router.get("/books", booksController.all);
router.post("/books", booksController.create);
router.put("/books/:id", booksController.update);
router.delete("/books/:id", booksController.delete);

export default router;
