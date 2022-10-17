const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctlrWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", ctlrWrapper(ctrl.getAllListContacts));

router.get("/:id", ctlrWrapper(ctrl.getById));

router.post("/", ctlrWrapper(ctrl.addNewContacts));

router.put("/:id", ctlrWrapper(ctrl.updateById));

router.delete("/:id", ctlrWrapper(ctrl.deleteById));

module.exports = router;
