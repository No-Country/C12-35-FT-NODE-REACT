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
  middlewares.findAccount,
  middlewares.setAmount,
  middlewares.checkBalance,
  middlewares.startTransaction,
  ctrl.transfer
);

router.post(
  "/add",
  middlewaresGlobals.ensureToken,
  middlewaresGlobals.validateToken,
  middlewares.addType,
  middlewares.findAccount,
  middlewares.setAmount,
  middlewares.dolarExchanger,
  middlewares.startTransaction,
  ctrl.addAmount
);

router.delete("/:id", ctrl.deleteTransaction);

export default router;
