import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";

export default async (req: Request, res: Response) => {
  const { identifier } = req.body;
  const regex = /^[-+]?\d+(.\d*)?|.\d+$/;
  const result = regex.test(identifier);

  const search = result === true ? { cvu: identifier } : { alias: identifier };

  const account = await AccountService.findOneAccount(search);

  return response(res, 200, {
    cvu: account.cvu,
    alias: account.alias,
    fullname: `${account.user.first_name} ${account.user.last_name}`
  });
};
