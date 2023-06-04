import express from "express";
import booksRoutes from "./books-routes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Node courses');
    });
    app.use(express.json());
    app.use(booksRoutes);
}

export default routes;