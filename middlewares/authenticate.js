const { RequestError } = require("../helpers");

const authenticate = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
