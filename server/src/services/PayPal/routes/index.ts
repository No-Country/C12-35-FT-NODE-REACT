import { Router } from "express";
import ctrl from "../controller";
import PayPalService from "../";

const router = Router();

router.post("/create-order", ctrl.createOrder);

router.get("/capture-order", ctrl.captureOrder);

export default router;
