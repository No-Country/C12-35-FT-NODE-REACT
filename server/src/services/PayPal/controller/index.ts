import { Request, Response } from "express";
import PayPalService from "../";

export default {
  createOrder: async (req: Request, res: Response) => {
    const { currency, amount, description } = req.body;
    try {
      const response = await PayPalService.createOrder(currency, amount, description);
      res.status(200).json({ response });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
};
