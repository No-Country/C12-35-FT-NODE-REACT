import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionHistoryService from "../services";

export default async (req: Request, res: Response) => {
  const deletedTransactionHistory = await TransactionHistoryService.deleteTransactionHistory(parseInt(req.params.id));
  return response(res, 200, deletedTransactionHistory);
};
