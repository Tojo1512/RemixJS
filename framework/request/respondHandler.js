class ResponseHandler {
  static success(data = null, meta = {}) {
    return {
      status: "success",
      data,
      error: null,
      meta,
    };
  }

  static error(error = "Une erreur est survenue", meta = {}) {
    return {
      status: "error",
      data: null,
      error,
      meta,
    };
  }
}

module.exports = ResponseHandler;
