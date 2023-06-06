import ErrorBase from "./ErrorBase.js";

class NotFound extends ErrorBase {
  constructor() {
    super("Not found", 404);
  }
}

export default NotFound;
