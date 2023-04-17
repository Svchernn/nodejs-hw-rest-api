const { Contact } = require("../../models/contact");

const { HttpError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact ${contactId} not found!`);
  }
  res.status(200).json(result);
  next(error);
};

module.exports = getContactById;
