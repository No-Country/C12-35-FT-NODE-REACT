import { Request, Response } from "express";
import response from "../../../utils/response";
import PaymentGatewayService from "../services";

export default async (req: Request, res: Response) => {
  const data = await PaymentGatewayService.deletePaymentGateway(parseInt(req.params.id));
  return response(res, 200, data);
};
