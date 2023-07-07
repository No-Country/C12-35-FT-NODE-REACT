import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getAccounts);

router.post("/", ctrl.createAccount);

export default router;
