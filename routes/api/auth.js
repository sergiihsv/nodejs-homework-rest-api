const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { ctlrWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validateBody(schemas.signupSchema),
  ctlrWrapper(ctrl.signup)
);

router.get("/verify/:verificationToken", ctlrWrapper(ctrl.verify));

router.post(
  "/users/verify",
  validateBody(schemas.verifyEmailSchema),
  ctlrWrapper(ctrl.resendEmail)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctlrWrapper(ctrl.login)
);

router.get("/current", authenticate, ctlrWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctlrWrapper(ctrl.logout));

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctlrWrapper(ctrl.updateAvatar)
);

module.exports = router;
