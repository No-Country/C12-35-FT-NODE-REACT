import { Request, Response } from "express";
import response from "../../../utils/response";
import PaymentGatewayService from "../services";

export default async (req: Request, res: Response) => {
  const data = await PaymentGatewayService.createPaymentGateway(req.body);
  return response(res, 200, data);
};
