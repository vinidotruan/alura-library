import express from "express";
import routes from "./routes/index.js";
import db from "./config/db-connection.js";
import mongoose from "mongoose";
import errorHandler from "./middlewares/error-handler.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected successfully");
});
const app = express();
app.use(express.json());
routes(app);

app.use(errorHandler);
export default app;
