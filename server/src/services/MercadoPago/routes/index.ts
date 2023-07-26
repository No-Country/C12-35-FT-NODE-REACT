import { Router } from "express";
import ctrl from "../controller";

const router = Router();

router.post("/create-preference", ctrl.createPreference);

router.get("/success", ctrl.success);

router.get("/pending", ctrl.pending);

router.get("/failure", ctrl.failure);

router.post("/webhook", ctrl.getPayment);

export default router;
