import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import WrongRequest from "../errors/WrongRequest.js";
import ErrorValidation from "../errors/ErrorValidation.js";
import NotFound from "../errors/NotFound.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof mongoose.Error.CastError) {
    new WrongRequest().sendResponse(res);
  }

  if (err instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(err).sendResponse(res);
  }

  if (err instanceof NotFound) {
    err.sendResponse(res);
  }

  if (err instanceof ErrorBase) {
    err.sendResponse(res);
  }

  new ErrorBase().sendResponse(res);
};

export default errorHandler;
