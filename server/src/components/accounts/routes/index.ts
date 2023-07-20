import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";

const router = Router();

router.get("/", ctrl.getAccounts);

router.get("/:id", ctrl.getAccountById);

router.post("/", middlewares.validateDuplicate, middlewares.encryptPassword, ctrl.createAccount);

router.put("/:id", middlewares.encryptPassword, ctrl.updateAccount);

router.delete("/:id", ctrl.deleteAccount);

router.get("/verify/:id", ctrl.verifyAccount);

router.get("/createPhoneVerification/:id", ctrl.createAccountPhoneVerification);

router.post("/verifyPhone/:id", ctrl.verifyAccountPhone);

export default router;
