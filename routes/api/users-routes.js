const express = require('express');

const ctrl = require("../../controllers/users");

const {validateBody} = require("../../utils");

const {authenticate} = require("../../middlewares")

const {schemas} = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.authSchema), ctrl.register)

router.post("/login", validateBody(schemas.authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);




module.exports = router;