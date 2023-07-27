import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";
import Mailer from "../../../services/Mailer";
import { HOST } from "../../../config/envs";
import { Account } from "../entities/Account.entity";
import { IUserFullName } from "../../../components/User/models/IUser";
import UserService from "../../User/services";
import { generateRandomCVU } from "../../../utils/generateRandomCVU";
import { generateAlias } from "../../../utils/generateAlias";

export default async (req: any, res: Response) => {
  const { password, email, first_name, last_name } = req.body;

  const newAccount = new Account();

  const newUser: IUserFullName = {
    first_name,
    last_name
  };

  const createdUser = await UserService.createUser(newUser);

  newAccount.password = password;
  newAccount.email = email;
  newAccount.balance = 0;
  newAccount.date_created = new Date();
  newAccount.user = createdUser;
  newAccount.cvu = generateRandomCVU();
  newAccount.alias = generateAlias();
  newAccount.transactions = [];
  newAccount.name = `${first_name} ${last_name}`;

  await AccountService.createAccount(newAccount);

  const to = newAccount.email;
  const subject = "Verify your email";
  const text = `${HOST}/users/verify/${newAccount.id}`;
  await Mailer.sendMail(to, subject, text);

  return response(res, 200, newAccount);
};
