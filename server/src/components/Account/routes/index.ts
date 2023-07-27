import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getAccounts);

router.get(
  "/me",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
  ctrl.getAccountById
);

router.post("/info", ctrl.accountInfo);

router.post(
  "/",
  middlewares.validateDuplicate,
  middlewares.encryptPassword,
  middlewares.validateEmail,
  ctrl.createAccount
);

router.put(
  "/me",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
  middlewares.validateEmail,
  middlewares.validateDuplicate,
  middlewares.encryptPassword,
  ctrl.updateAccount
);

router.delete(
  "/",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
  ctrl.deleteAccount
);

router.get("/verify/:id", ctrl.verifyAccount);

router.get("/createPhoneVerification/:id", ctrl.createAccountPhoneVerification);

router.post("/verifyPhone/:id", ctrl.verifyAccountPhone);

export default router;
