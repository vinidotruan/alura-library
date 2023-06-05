import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Invalid ID" });
  }
  res.status(500).json({ message: err.message });
};

export default errorHandler;
