const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const singup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const result = await User.create({ email, password });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.export = {
  singup,
};
