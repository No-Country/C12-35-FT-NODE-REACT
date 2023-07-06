import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getTransactionsHistory);

router.post("/", ctrl.createTransactionHistory);

export default router;
