const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctlrWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

/* router.get("/", ctlrWrapper(ctrl.getAllListContacts));

router.get("/:id", ctlrWrapper(ctrl.getById)); */

router.post(
  "/",
  validateBody(schemas.addSchema),
  ctlrWrapper(ctrl.addNewContacts)
);

/* router.put(
  "/:id",
  validateBody(schemas.addShema),
  ctlrWrapper(ctrl.updateById)
);

router.delete("/:id", ctlrWrapper(ctrl.deleteById)); */

module.exports = router;
