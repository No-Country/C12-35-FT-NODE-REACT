import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getTransactions);

router.get("/:id", ctrl.getTransactionById);

router.put("/:id", ctrl.updateTransaction);

router.post("/", ctrl.createTransaction);

router.delete("/:id", ctrl.deleteTransaction);

export default router;
