import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";
<<<<<<< HEAD
import UserService from "../../users/services/index";
import { Account } from "../entities/Account.entity";
import Mailer from "../../../services/Mailer";
import { HOST } from "../../../config/envs";

export default async (req: Request, res: Response) => {
  const newUser = await UserService.createUsers(req.body);
  const to = newUser.email;
  const subject = "Verify your email";
  const text = `${HOST}/users/verify/${newUser.id}`;
  await Mailer.sendMail(to, subject, text);
  const newAccountInstance = new Account();
  const newAccount = await AccountService.createAccount(newAccountInstance);
  newAccount.userId = newUser.id;
=======
import Mailer from "../../../services/Mailer";
import { HOST } from "../../../config/envs";
import TransactionHistoryService from "../../transactionHistories/services";
import { Account } from "../entities/Account.entity";
import { History } from "../../transactionHistories/entities/History.entity";
import { User } from "../../../components/users/entities/User.entity";
import UserService from "../../users/services";

export default async (req: any, res: Response) => {
  const { password, email, balance, type } = req.body;

  const newUser = new User();
  const newAccount = new Account();
  const newHistory = new History();

  newAccount.password = password;
  newAccount.email = email;
  newAccount.balance = balance;
  newAccount.type = type;
  newAccount.date_created = new Date();
  newAccount.user = newUser;
  newAccount.transaction_history = newHistory;

  await UserService.createUser(newUser);
  await TransactionHistoryService.createTransactionHistory(newHistory);
  await AccountService.createAccount(newAccount);

  const to = newAccount.email;
  const subject = "Verify your email";
  const text = `${HOST}/users/verify/${newAccount.id}`;
  await Mailer.sendMail(to, subject, text);

>>>>>>> b822c13 (.)
  return response(res, 200, newAccount);
};
