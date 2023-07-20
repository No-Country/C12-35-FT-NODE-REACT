import { Request, Response } from "express";
import response from "../../../utils/response";
import TransactionHistoryService from "../../transactionHistories/services";
import { Transaction } from "../entities/Transaction.entity";
<<<<<<< HEAD

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
<<<<<<< HEAD
  newTransaction.payment = payment;
  newTransaction.type = type;
  await TransactionHistoryService.addTransaction(req.userId, newTransaction);
=======
  newTransaction.payment = newPayment;

  transactionHistory.categories.push(newTransaction);
  await transactionHistory.save(newTransaction);
>>>>>>> 43ff90e (.)
=======
import TransactionService from "../../../components/transactions/services";
import { AppDataSource } from "../../../services/DataSource/config";
import { History } from "../../transactionHistories/entities/History.entity";
import { Account } from "../../../components/accounts/entities/Account.entity";
import AccountService from "../../../components/accounts/services";

export default async (req: any, res: Response) => {
  const { amount } = req.body;

  const account = await AccountService.getAccountById(req.userId);

  if (!account) throw new Error("no se ha encontrado el usuario");

  const newTransaction = new Transaction();
  newTransaction.amount = amount;
  newTransaction.date = new Date();

  await TransactionService.createTransaction(newTransaction);

  await AppDataSource.createQueryBuilder().relation(History, "transactions").of(req.userId).add(newTransaction);

  await AppDataSource.createQueryBuilder()
    .update(Account)
    .set({ balance: account.balance + amount })
    .where("id = :id", { id: req.userId })
    .execute();
>>>>>>> 0f31e4f (transaciones)

  return response(res, 200, newTransaction);
};
