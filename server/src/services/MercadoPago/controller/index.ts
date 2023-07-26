import { Request, Response } from "express";
import MercadoPago from "..";

export default {
  createPreference: async (req: Request, res: Response) => {
    const { email, amount } = req.body;
    try {
      const response = await MercadoPago.createPreference(amount, email);
      res.status(200).json({ response });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
  getPayment: async (req: Request, res: Response) => {
    const payment = req.query;
    if (payment.type === "payment") {
      try {
        const response = await MercadoPago.getPayment(payment["data.id"]);
        console.log(response);
        res.status(200).json({ response });
      } catch (error: any) {
        res.status(404).json({ error: error.message });
      }
    }
  },
  success: async (req: Request, res: Response) => {
    try {
      res.status(200).json({ success: true });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
  failure: async (req: Request, res: Response) => {
    try {
      res.status(200).json({ success: false });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  },
  pending: async (req: Request, res: Response) => {
    try {
      res.status(200).json({ success: false });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }
};
