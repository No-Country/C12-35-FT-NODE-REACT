import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";
import middlewaresGlobals from "../../../middlewares/index";

const router = Router();

router.get("/", ctrl.getTransactions);

router.get("/:id", ctrl.getTransactionById);

router.put("/:id", ctrl.updateTransaction);

router.post(
  "/transfer",
  middlewaresGlobals.ensureToken,
  middlewaresGlobals.validateToken,
  middlewaresGlobals.findAccount,
  middlewares.setAmount,
  middlewares.checkBalance,
  ctrl.transfer
);

router.post(
  "/add",
  middlewaresGlobals.ensureToken,
  middlewaresGlobals.validateToken,
  middlewares.addType,
  middlewaresGlobals.findAccount,
  middlewares.setAmount,
  middlewares.dolarExchanger,
  ctrl.addAmount
);

router.delete("/:id", ctrl.deleteTransaction);

export default router;
