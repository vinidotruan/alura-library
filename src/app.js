import express from "express";
import routes from "./routes/index.js";
import db from "./config/db-connection.js";
import errorHandler from "./middlewares/error-handler.js";
import error404 from "./middlewares/404.js";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected successfully");
});
const app = express();
app.use(express.json());
routes(app);

app.use(error404);
app.use(errorHandler);
export default app;
