const messages = {
  400: "Missing required name field",
  404: "Not found",
  401: "Unauthorized",
};

const RequestError = (status, message = messages[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = RequestError;
