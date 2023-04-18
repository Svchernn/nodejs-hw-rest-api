const express = require("express");

const ctrl = require("../../controllers/contacts");

const {authenticate} = require("../../middlewares");

const {validateBody} = require("../../utils");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.patch("/:contactId/favorite", authenticate, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete("/:contactId", authenticate, ctrl.removeContact);

router.put("/:contactId", authenticate, validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;
