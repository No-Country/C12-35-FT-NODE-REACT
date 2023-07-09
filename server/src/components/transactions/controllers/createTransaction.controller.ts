import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";

export default async (req: Request, res: Response) => {
  const newTransaction = await TransactionService.createTransaction(req.body);
  return response(res, 200, newTransaction);
};
