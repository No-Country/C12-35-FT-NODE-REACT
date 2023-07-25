import { Router } from "express";
import ctrl from "../controller";
import PayPalService from "../";

const router = Router();

router.post("/create-order", ctrl.createOrder);

router.get("/token", async (req, res) => {
  try {
    const token = await PayPalService.getToken();
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
