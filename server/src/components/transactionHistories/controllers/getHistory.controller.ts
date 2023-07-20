import { ITransactionHistory } from "../models/TransactionsHistory";
import { Request, Response } from "express";
import response from "../../../utils/response";
import HistoryService from "../services";

export default async (req: Request, res: Response): Promise<Response<ITransactionHistory[], Record<string, any>>> => {
  const data = await HistoryService.getTransactionsHistory();
  return response(res, 200, data);
};
