const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const { ctlrWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchema));

module.exports = router;
