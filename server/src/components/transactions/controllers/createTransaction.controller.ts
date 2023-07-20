import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionHistoryService from "../../transactionHistories/services";
import { Transaction } from "../entities/Transaction.entity";
import { PaymentGateway } from "../../../components/paymentGateways/entities/PaymentGateway.entity";

export default async (req: any, res: Response) => {
  const { amount, payment } = req.body;

  const transactionHistory: any = await TransactionHistoryService.getTransactionsHistoryById(req.userId);
  if (!transactionHistory) {
    throw new Error("No se encontró el historial de transacciones para este usuario.");
  }
  const newPayment = new PaymentGateway();
  newPayment.name = payment;
  const newTransaction = new Transaction();
  newTransaction.amount = amount;
  newTransaction.date = new Date();
  newTransaction.transaction_history = transactionHistory;
  newTransaction.payment = newPayment;

  transactionHistory.categories.push(newTransaction);
  await transactionHistory.save(newTransaction);

  return response(res, 200, newTransaction);
};
