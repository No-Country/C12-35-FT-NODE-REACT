import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getTransactions);

router.post("/", ctrl.createTransaction);

export default router;
