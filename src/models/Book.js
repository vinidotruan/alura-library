import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: true,
  },
  id: { type: String },
  publisher: { type: String, required: true },
  pages: { type: Number },
});

const books = mongoose.model("books", bookSchema);

export default books;
