class ErrorBase extends Error {
  constructor(message = "Internal Error", status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendResponse(res) {
    res
      .status(this.status)
      .json({ message: this.message, status: this.status });
  }
}

export default ErrorBase;
