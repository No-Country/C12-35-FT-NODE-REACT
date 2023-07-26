import { Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";

export default async (req: any, res: Response) => {
  try {
    await TransactionService.subtractAmount(req.account, req.amount, req.transaction);

    return response(res, 200, req.transaction);
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
