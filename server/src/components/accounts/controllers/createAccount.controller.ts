import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";
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
  return response(res, 200, newAccount);
};
