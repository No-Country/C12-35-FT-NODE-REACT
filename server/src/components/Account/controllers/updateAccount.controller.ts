import { Request, Response } from "express";
import response from "../../../utils/response";
import AccountService from "../services";

export default async (req: any, res: Response) => {
  const data = await AccountService.updateAccount(parseInt(req.userId), req.body);
  return response(res, 200, data);
};
