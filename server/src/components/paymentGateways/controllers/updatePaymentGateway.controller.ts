import { IPaymentGateway } from "../models/PaymentGateway";
import { Request, Response } from "express";
import response from "../../../utils/response";
import PaymentGatewayService from "../services";

export default async (req: Request, res: Response): Promise<Response<IPaymentGateway[], Record<string, any>>> => {
  const data = await PaymentGatewayService.updatePaymentGateway(parseInt(req.params.id), req.body);
  return response(res, 200, data);
};
