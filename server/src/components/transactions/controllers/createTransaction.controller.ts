import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionHistoryService from "../../transactionHistories/services";
import { Transaction } from "../entities/Transaction.entity";

export default async (req: any, res: Response) => {
  const { amount, type, payment } = req.body;

  const transactionHistory: any = await TransactionHistoryService.getTransactionsHistoryById(req.userId);
  if (!transactionHistory) {
    throw new Error("No se encontró el historial de transacciones para este usuario.");
  }
  const newTransaction = new Transaction();
  newTransaction.amount = amount;
  newTransaction.date = new Date();
  newTransaction.transaction_history = transactionHistory;
  newTransaction.payment = payment;
  newTransaction.type = type;
  await TransactionHistoryService.addTransaction(req.userId, newTransaction);

  return response(res, 200, newTransaction);
};
