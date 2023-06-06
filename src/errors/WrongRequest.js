import ErrorBase from "./ErrorBase.js";

class WrongRequest extends ErrorBase {
  constructor(message = "Wrong Request", status = 400) {
    super(message, status);
  }
}

export default WrongRequest;
