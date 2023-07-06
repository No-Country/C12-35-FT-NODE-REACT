import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getPaymentGateway);

// router.post("/", ctrl.createUser);

export default router;
