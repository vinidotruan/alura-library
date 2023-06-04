import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.jkjidww.mongodb.net/library?retryWrites=true&w=majority"
  )
  .then()
  .catch((err) => console.log(err));

const db = mongoose.connection;

export default db;
