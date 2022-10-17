const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addShema } = require("../../schemas/contacts");

const updateById = async (req, res, next) => {
  const { error } = addShema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;
