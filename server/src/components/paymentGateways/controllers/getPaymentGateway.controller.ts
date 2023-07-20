import { Request, Response } from "express";
import response from "../../../utils/response";
import PaymentGatewayService from "../services";

export default async (req: Request, res: Response) => {
  const data = await PaymentGatewayService.getPaymentGateway();
  return response(res, 200, data);
};
