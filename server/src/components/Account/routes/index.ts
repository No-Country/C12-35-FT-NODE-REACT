import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getAccounts);

router.get(
  "/:id",
  middlewares.validateDuplicate,
  middlewares.encryptPassword,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
  ctrl.getAccountById
);

router.post("/info", ctrl.accountInfo);

router.post(
  "/",
  middlewares.validateDuplicate,
  middlewares.encryptPassword,
  globalMiddleware.checkAccountValidity,
  ctrl.createAccount
);

router.put(
  "/:id",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
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