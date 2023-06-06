import WrongRequest from "./WrongRequest.js";

class ErrorValidation extends WrongRequest {
  constructor(err) {
    const errorMessages = Object.values(err.errors)
      .map((error) => error?.message)
      .join(", ");
    super(errorMessages, 400);
  }
}

export default ErrorValidation;
