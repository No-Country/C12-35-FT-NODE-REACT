import { Response } from "express";
import response from "../../../utils/response";
import TransactionService from "../services";
import AccountService from "../../accounts/services";

export default async (req: any, res: Response) => {
  const { identifier } = req.body;
  const regex = /^[-+]?\d+(.\d*)?|.\d+$/;
  const result = regex.test(identifier);

  const search = result === true ? { cvu: identifier } : { alias: identifier };

  const payer = await AccountService.getAccountById(req.userId);
  const receive = await AccountService.findOneAccount(search);

  if (!payer) throw new Error("Intenta relizar un pago desde una cuenta que no está registrada o está inhabilitada");
  if (!receive)
    throw new Error("Está intentando relizar un pago a una cuenta que no está registrada o está inhabilitada");

  await TransactionService.subtractAmount(payer, req.amount);
  await TransactionService.addAmount(receive, req.amount, req.type);

  return response(res, 200, { payer, receive });
};
