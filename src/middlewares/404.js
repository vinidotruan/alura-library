import NotFound from "../errors/NotFound.js";

const error404 = (req, res, next) => {
  next(new NotFound());
};

export default error404;
