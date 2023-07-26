import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";

export default async (req: Request, res: Response) => {
  const data = await TransactionService.updateTransaction(parseInt(req.params.id), req.body);
  return response(res, 200, data);
};
