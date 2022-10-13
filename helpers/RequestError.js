const messages = {
  400: "Missing required name field",
  404: "Not found",
};

const RequestError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = RequestError;
