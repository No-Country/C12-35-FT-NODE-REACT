import { Request, Response } from "express";
import PayPalService from "../";
import { PAYPAL_API } from "../../../config/envs";

export default {
  createOrder: async (req: Request, res: Response) => {
    const { currency, amount } = req.body;
    try {
      const response = await PayPalService.createOrder(currency, amount);
      res.status(200).json({ response });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
  captureOrder: async (req: Request, res: Response) => {
    const { token, PlayerID } = req.query;
    try {
      const url = `${PAYPAL_API}/v2/checkout/orders/${token}/capture`;

      const response = await PayPalService.captureOrder(url);
      res.status(200).json({ response });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
};
