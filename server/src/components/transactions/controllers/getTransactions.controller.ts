import { ITransaction } from "../models/Transactions";
import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";

export default async (req: Request, res: Response): Promise<Response<ITransaction[], Record<string, any>>> => {
  const data = await TransactionService.getTransactions();
  return response(res, 200, data);
};
