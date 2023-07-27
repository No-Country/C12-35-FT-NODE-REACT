import { NextFunction, Response } from "express";
import response from "../../../utils/response";
import { Transaction } from "../entities/Transaction.entity";
import TransactionService from "../services";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const newTransaction = new Transaction();
    newTransaction.amount = req.amount;
    newTransaction.date = new Date();
    newTransaction.type = req.type ? req.type : "TRANSFER";

    const transaction = await TransactionService.createTransaction(newTransaction);

    req.transaction = transaction;

    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
