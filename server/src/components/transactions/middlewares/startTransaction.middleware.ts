import { NextFunction, Response } from "express";
import { AppDataSource } from "../../../services/DataSource/config";
import response from "../../../utils/response";
import { Transaction } from "../entities/Transaction.entity";
import TransactionService from "../services";
import { History } from "../../transactionHistories/entities/History.entity";

export default async (req: any, res: Response, next: NextFunction) => {
  try {
    const newTransaction = new Transaction();
    newTransaction.amount = req.amount;
    newTransaction.date = new Date();
    newTransaction.type = req.type ? req.type : "TRANSFER";

    const transaction = await TransactionService.createTransaction(newTransaction);

    // await AppDataSource.createQueryBuilder().relation(History, "transactions").of(req.userId).add(newTransaction);

    req.transaction = transaction;

    next();
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};

//2: 55500 - 1: 53500
