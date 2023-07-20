import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";
import Mailer from "../../../services/Mailer";
import { HOST } from "../../../config/envs";
import TransactionHistoryService from "../../transactionHistories/services";
import { Account } from "../entities/Account.entity";
import { History } from "../../transactionHistories/entities/History.entity";
import { User } from "../../../components/users/entities/User.entity";
import UserService from "../../users/services";

export default async (req: any, res: Response) => {
  const { password, email, type } = req.body;

  const newUser = new User();
  const newAccount = new Account();
  const newHistory = new History();

  // newUser.first_name = first_name;

  newAccount.password = password;
  newAccount.email = email;
  newAccount.balance = 0;
  newAccount.type = type;
  newAccount.date_created = new Date();
  newAccount.user = newUser;
  newAccount.history = newHistory;

  await UserService.createUser(newUser);
  await TransactionHistoryService.createTransactionHistory(newHistory);
  await AccountService.createAccount(newAccount);

  const to = newAccount.email;
  const subject = "Verify your email";
  const text = `${HOST}/users/verify/${newAccount.id}`;
  await Mailer.sendMail(to, subject, text);

  return response(res, 200, newAccount);
};
