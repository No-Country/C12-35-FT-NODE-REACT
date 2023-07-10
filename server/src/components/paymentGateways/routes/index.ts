import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getPaymentGateway);

router.post("/", ctrl.createPaymentGateway);

router.put("/:id", ctrl.updatePaymentGateway);

router.delete("/:id", ctrl.deletePaymentGateway);

router.get("/:id", ctrl.getPaymentGatewayById);

export default router;
