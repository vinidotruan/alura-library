import express from "express";
import AuthorsController from "../controllers/authors-controller.js";

const router = express.Router();

router.get("/authors", AuthorsController.all);
router.get("/authors/:id", AuthorsController.all);
router.post("/authors", AuthorsController.create);
router.put("/authors/:id", AuthorsController.update);
router.delete("/authors/:id", AuthorsController.delete);

export default router;
