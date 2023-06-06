import express from "express";
import AuthorsController from "../controllers/authors-controller.js";
import pagination from "../middlewares/pagination.js";

const router = express.Router();

router.get("/authors", AuthorsController.all, pagination);
router.get("/authors/:id", AuthorsController.find);
router.post("/authors", AuthorsController.create);
router.put("/authors/:id", AuthorsController.update);
router.delete("/authors/:id", AuthorsController.delete);

export default router;
