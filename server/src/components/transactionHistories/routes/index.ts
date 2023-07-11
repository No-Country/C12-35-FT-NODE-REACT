import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getTransactionsHistory);

router.get("/:id", ctrl.getTransactionHistoryById);

router.post("/", ctrl.createTransactionHistory);

router.put("/:id", ctrl.updateTransactionHistory);

router.delete("/:id", ctrl.deleteTransactionHistory);

export default router;
