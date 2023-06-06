import WrongRequest from "../errors/WrongRequest.js";

const pagination = async (req, res, next) => {
  try {
    const { limit = 5, page = 1, orderBy = "_id", asc = 1 } = req.query;

    if (+limit < 1 || +page < 1) {
      next(new WrongRequest("Limit and page must be greater than 0"));
    }

    const paginated = await req.response
      .find()
      .sort({ [orderBy]: asc })
      .skip((+page - 1) * +limit)
      .limit(+limit);

    res.status(200).json({ data: paginated });
  } catch (e) {
    next(e);
  }
};

export default pagination;
