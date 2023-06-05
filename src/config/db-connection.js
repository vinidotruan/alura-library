import mongoose from "mongoose";

mongoose
  .connect(process.env.STRING_CONNECTION)
  .then()
  .catch((err) => console.log(err));

const db = mongoose.connection;

export default db;
