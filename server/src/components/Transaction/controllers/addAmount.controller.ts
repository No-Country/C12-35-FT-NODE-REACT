import { Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";

export default async (req: any, res: Response) => {
  try {
    if (!req.account) new Error("Ha habído un problema al añadir el monto");

    await TransactionService.addAmount(req.account, req.amount, req.type);

    return response(res, 200, req.account);
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
