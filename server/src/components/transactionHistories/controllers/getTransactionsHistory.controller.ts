import { ITransactionHistory } from "../models/TransactionsHistory";
import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionHistoryService from "../services";

export default async (req: Request, res: Response): Promise<Response<ITransactionHistory[], Record<string, any>>> => {
  const data = await TransactionHistoryService.getTransactionsHistory();
  return response(res, 200, data);
};
