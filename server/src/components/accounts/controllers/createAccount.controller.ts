import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";

export default async (req: Request, res: Response) => {
  const newAccount = await AccountService.createAccount(req.body);
  return response(res, 200, newAccount);
};
