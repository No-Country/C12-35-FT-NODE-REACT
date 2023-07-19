import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";
import TransactionHistoryService from "../../transactionHistories/services/index";

export default async (req: any, res: Response) => {
  const newTransaction = await TransactionService.createTransaction(req.body);
  await TransactionHistoryService.createTransactionHistory({
    date: new Date(),
    transactionId: newTransaction.id,
    accountsId: req.userId
  });

  return response(res, 200, newTransaction);
};
