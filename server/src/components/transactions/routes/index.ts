import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";
import middlewaresGlobals from "../../../middlewares/index";

const router = Router();

router.get("/", ctrl.getTransactions);

router.get("/:id", ctrl.getTransactionById);

router.put("/:id", ctrl.updateTransaction);

router.post(
  "/",
  middlewaresGlobals.ensureToken,
  middlewaresGlobals.validateToken,
  middlewares.dolarExchanger,
  ctrl.createTransaction
);

router.delete("/:id", ctrl.deleteTransaction);

export default router;
