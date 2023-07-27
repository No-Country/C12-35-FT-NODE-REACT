import { Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";
import { Transaction } from "../entities/Transaction.entity";

export default async (req: any, res: Response) => {
  try {
    const newTransaction = new Transaction();
    newTransaction.amount = req.amount;
    newTransaction.date = new Date();
    newTransaction.type = req.type ? req.type : "SEND";

    const transaction = await TransactionService.createTransaction(newTransaction);
    await TransactionService.subtractAmount(req.account, req.amount);

    return response(res, 200, transaction);
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
