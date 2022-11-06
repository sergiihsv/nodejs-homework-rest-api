const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctlrWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctlrWrapper(ctrl.getAllListContacts));

router.get("/:id", authenticate, ctlrWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctlrWrapper(ctrl.addNewContacts)
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctlrWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctlrWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", authenticate, ctlrWrapper(ctrl.deleteById));

module.exports = router;
