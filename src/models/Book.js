import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: [true, "The title is required"] },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: [true, "The author id is required"],
  },
  id: { type: String },
  publisher: {
    type: String,
    required: [true, "The publisher name is required"],
    enum: {
      values: ["Planeta", "Santillana", "Norma", "McGraw-Hill", "Pearson"],
      message: "The publisher: {VALUE} is not supported",
    },
  },
  pages: {
    type: Number,
    validate: {
      validator: (value) => value >= 10 && value <= 1000,
      message:
        "The number of pages must be between 10 and 1000. The value is {VALUE}",
    },
  },
});

const books = mongoose.model("books", bookSchema);

export default books;
