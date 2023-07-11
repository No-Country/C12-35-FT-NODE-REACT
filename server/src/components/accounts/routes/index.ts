import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getAccounts);

router.get("/:id", ctrl.getAccountById);

router.post("/", ctrl.createAccount);

router.put("/:id", ctrl.updateAccount);

router.delete("/:id", ctrl.deleteAccount);

export default router;
