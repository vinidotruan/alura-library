import express from "express";
import books from "./models/Book.js";
import routes from "./routes/index.js";
import db from "./config/db-connection.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected successfully");
});
const app = express();
app.use(express.json());
routes(app);
export default app;